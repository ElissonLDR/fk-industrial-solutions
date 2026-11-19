import { describe, expect, test } from "bun:test";
import { buildLeadPayload, captureTracking, leadSchema, leadWebhook, sendLead, trackingKeys } from "./lead-capture";

function storage() {
  const values = new Map<string, string>();
  return { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => { values.set(key, value); } } as Storage;
}
const input = { nome: "Teste FK", telefone: "(11) 99999-9999", cultura: "Mandioca", volume_diario: "Até 1.000 kg", cnpj_ie: "Sim" };

describe("lead capture rules", () => {
  test("captures all URL parameters without clearing saved attribution", () => {
    const saved = storage();
    captureTracking(`https://example.com/?${trackingKeys.map(key => `${key}=${key}-value`).join("&")}`, "https://first.example/", saved);
    captureTracking("https://example.com/?utm_source=&utm_medium=new", "https://second.example/", saved);
    for (const key of trackingKeys) expect(saved.getItem(key)).toBe(key === "utm_medium" ? "new" : `${key}-value`);
    expect(saved.getItem("referrer")).toBe("https://first.example/");
  });
  test("keeps an empty first referrer on later visits", () => {
    const saved = storage();
    captureTracking("https://example.com/", "", saved);
    captureTracking("https://example.com/", "https://later.example/", saved);
    expect(saved.getItem("referrer")).toBe("");
  });
  test("requires a nonblank name", () => {
    expect(leadSchema.safeParse({ ...input, nome: "  " }).success).toBe(false);
  });
  test("accepts only ten or eleven phone digits and strips formatting", () => {
    for (const telefone of ["1199999999", "11999999999"]) expect(leadSchema.parse({ ...input, telefone }).telefone).toBe(telefone);
    for (const telefone of ["", "119999999", "5511999999999"]) expect(leadSchema.safeParse({ ...input, telefone }).success).toBe(false);
    expect(leadSchema.parse(input).telefone).toBe("11999999999");
  });
  for (const field of ["cultura", "volume_diario", "cnpj_ie"]) {
    test(`requires a selected ${field}`, () => {
      expect(leadSchema.safeParse({ ...input, [field]: "" }).success).toBe(false);
    });
  }
  test("sends exactly the requested keys, labels and empty tracking strings", async () => {
    const payload = buildLeadPayload(input, "https://lp.fankorte.com.br/#formulario", storage());
    expect(payload).toEqual({ ...input, telefone: "11999999999", origem: "LP Grupo FK", utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: "", gclid: "", fbclid: "", pagina: "https://lp.fankorte.com.br/#formulario", referrer: "" });
    let conversions = 0;
    await sendLead(payload, () => { conversions++; }, (async (url, options) => {
      expect(url).toBe(leadWebhook);
      expect(options?.method).toBe("POST");
      expect(options?.headers).toEqual({ "Content-Type": "application/json" });
      expect(JSON.parse(String(options?.body))).toEqual(payload);
      return new Response("Accepted", { status: 202 });
    }) as typeof fetch);
    expect(conversions).toBe(1);
  });
  test("does not convert on HTTP errors or network failures", async () => {
    let conversions = 0;
    const payload = buildLeadPayload(input, "https://example.com", storage());
    for (const request of [async () => new Response("error", { status: 500 }), async () => { throw new Error("offline"); }]) {
      await expect(sendLead(payload, () => { conversions++; }, request as typeof fetch)).rejects.toThrow();
    }
    expect(conversions).toBe(0);
  });
});