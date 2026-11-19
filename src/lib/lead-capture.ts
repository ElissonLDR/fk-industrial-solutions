import { z } from "zod";

export const leadWebhook = "https://hook.us1.make.celonis.com/j7muma136nmrrcq5qg55ox2d53lqhysq";
export const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"] as const;

export function captureTracking(url: string, referrer: string, storage: Storage) {
  const params = new URL(url).searchParams;
  for (const key of trackingKeys) {
    const value = params.get(key);
    if (value) storage.setItem(key, value);
  }
  if (storage.getItem("referrer") === null) storage.setItem("referrer", referrer);
}

export const leadSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome.").max(100),
  telefone: z.string().transform((value) => value.replace(/\D/g, "")).pipe(z.string().regex(/^\d{10,11}$/, "Informe um telefone com DDD e 10 ou 11 dígitos.")),
  cultura: z.enum(["Mandioca", "Cacau", "Outros"]),
  volume_diario: z.enum(["Até 1.000 kg", "De 1.000 a 5.000 kg", "Acima de 5.000 kg"]),
  cnpj_ie: z.enum(["Sim", "Não"]),
});

export function buildLeadPayload(input: unknown, page: string, storage: Pick<Storage, "getItem">) {
  const lead = leadSchema.parse(input);
  return {
    ...lead,
    origem: "LP Grupo FK",
    utm_source: storage.getItem("utm_source") || "",
    utm_medium: storage.getItem("utm_medium") || "",
    utm_campaign: storage.getItem("utm_campaign") || "",
    utm_content: storage.getItem("utm_content") || "",
    utm_term: storage.getItem("utm_term") || "",
    gclid: storage.getItem("gclid") || "",
    fbclid: storage.getItem("fbclid") || "",
    pagina: page,
    referrer: storage.getItem("referrer") || "",
  };
}

export async function sendLead(payload: ReturnType<typeof buildLeadPayload>, onSuccess: () => void, request: typeof fetch = fetch) {
  const response = await request(leadWebhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30000),
  });
  if (!response.ok) throw new Error("Lead delivery failed");
  onSuccess();
}