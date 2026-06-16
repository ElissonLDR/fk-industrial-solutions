import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Factory,
  ShieldCheck,
  Gauge,
  Wrench,
  Cog,
  Sparkles,
  TrendingUp,
  Calculator,
  Users,
  Award,
  Banknote,
  Phone,
  PlayCircle,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-machine.jpg";
import bladesImg from "@/assets/blades-detail.jpg";
import farmerImg from "@/assets/farmer-operation.jpg";
import logoFk from "@/assets/logo-fk.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo FK | Mecanização Industrial de Pós-Colheita" },
      {
        name: "description",
        content:
          "Tecnologia patenteada Fankorte: reduza até 80% a mão de obra com facas autoajustáveis em aço inox AISI 304. Processe até 900 raízes/hora.",
      },
      { property: "og:title", content: "Grupo FK | Mecanização Industrial de Pós-Colheita" },
      {
        property: "og:description",
        content:
          "Facas autoajustáveis patenteadas, aço inox AISI 304, fluxo contínuo. Solicite uma proposta técnica sob medida.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] text-[#080808] font-sans antialiased">
      <Header />
      <Hero />
      <MarqueeBar />
      <PainSection />
      <SolutionSection />
      <ComparisonTable />
      <RoiSection />
      <TrustSection />
      <SocialProof />
      <LeadForm />
      <Footer />
      <FloatingWhatsapp />
      <StickyMobileCta />
    </div>
  );
}

/* ---------------------- HEADER ---------------------- */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <img src={logoFk} alt="Grupo FK Industrial Solutions" className="h-9 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#F7F7F4]/80">
          <a href="#problema" className="hover:text-white transition">Problema</a>
          <a href="#solucao" className="hover:text-white transition">Solução</a>
          <a href="#roi" className="hover:text-white transition">ROI</a>
          <a href="#provas" className="hover:text-white transition">Provas</a>
        </nav>
        <a
          href="#formulario"
          className="hidden sm:inline-flex items-center gap-2 bg-[#0A8E48] hover:bg-[#0FB85C] text-white px-4 py-2.5 rounded-sm font-bold text-sm uppercase tracking-wide transition"
        >
          Solicitar proposta
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------------------- HERO ---------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#080808] text-[#F7F7F4]">
      {/* background image as video stand-in */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Maquinário Fankorte descascando mandiocas no campo"
          className="w-full h-full object-cover opacity-55"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/30" />
        <div className="absolute inset-0 industrial-grid opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-32 lg:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#BD1C2C] text-white px-3 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Tecnologia Patenteada Pós-Colheita
          </div>

          <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight">
            Mecanização industrial de fluxo contínuo:{" "}
            <span className="text-[#BD1C2C]">reduza até 80%</span> a dependência de mão de obra com as{" "}
            <span className="underline decoration-[#0A8E48] decoration-4 underline-offset-4">
              únicas facas autoajustáveis
            </span>{" "}
            do Brasil.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-[#F7F7F4]/85 max-w-2xl leading-relaxed">
            Processe até <strong className="text-white">900 raízes por hora</strong> com assepsia total
            em aço inox AISI 304. Elimine as paradas na produção causadas pela falta de diaristas e
            garanta o padrão exigido pelos grandes supermercados.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#formulario"
              className="group inline-flex items-center justify-center gap-3 bg-[#0A8E48] hover:bg-[#0FB85C] text-white px-7 py-5 rounded-sm font-display font-bold text-base uppercase tracking-wider transition shadow-[0_10px_30px_-10px_rgba(10,142,72,0.6)]"
            >
              Solicitar Proposta Técnica Sob Medida
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </a>
            <div className="flex items-center gap-3 text-sm text-[#F7F7F4]/70">
              <ShieldCheck className="w-5 h-5 text-[#0FB85C]" />
              Resposta de engenharia em até 24h
            </div>
          </div>

          {/* spec strip */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-3xl">
            <Spec value="900" unit="raízes/h" label="Capacidade" />
            <Spec value="80%" unit="" label="Menos mão de obra" />
            <Spec value="304" unit="AISI" label="Aço inox" />
            <Spec value="12" unit="anos" label="Durabilidade" />
          </div>
        </div>
      </div>

      {/* bottom industrial bar */}
      <div className="absolute bottom-0 left-0 right-0 h-3 diagonal-stripes opacity-90" />
    </section>
  );
}

function Spec({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="bg-[#080808] p-5">
      <div className="flex items-baseline gap-1">
        <span className="font-display font-black text-3xl lg:text-4xl text-white">{value}</span>
        {unit && <span className="text-sm font-bold text-[#BD1C2C]">{unit}</span>}
      </div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#B8B8B2]">
        {label}
      </div>
    </div>
  );
}

/* ---------------------- MARQUEE ---------------------- */
function MarqueeBar() {
  const items = [
    "MANDIOCULTURA",
    "CACAUICULTURA",
    "AÇO INOX AISI 304",
    "FLUXO CONTÍNUO",
    "NR12",
    "ANVISA",
    "BNDES FINAME",
    "PRONAF",
  ];
  return (
    <div className="bg-[#BD1C2C] text-white py-3 overflow-hidden border-y border-black/20">
      <div className="flex gap-10 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-display font-bold text-sm tracking-[0.2em]">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-white/40">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

/* ---------------------- PAIN ---------------------- */
function PainSection() {
  return (
    <section id="problema" className="py-24 lg:py-32 bg-[#F7F7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel color="red">02 — O Gargalo Operacional</SectionLabel>
          <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
            O prejuízo invisível que trava o crescimento da sua agroindústria.
          </h2>
          <p className="mt-6 text-lg text-[#080808]/75 leading-relaxed">
            Tocar o processamento de forma manual ou com ferramentas improvisadas cria dois
            problemas que corroem sua margem de lucro todos os dias:
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <PainCard
            number="01"
            title="Turnover e falta de diaristas no campo."
            subtitle="A Instabilidade do “Moda Facão”"
            body="Depender de equipes de descasque manual significa colocar o ritmo da sua colheita na mão de terceiros. Quando o pessoal falta, a produção para, o tubérculo passa do ponto e o seu faturamento despenca."
            icon={<Users className="w-7 h-7" />}
          />
          <PainCard
            number="02"
            title="Perda de contratos por falta de padronização."
            subtitle="A Barreira dos Supermercados"
            body="As grandes redes de supermercados e indústrias de fécula exigem assepsia rigorosa e cortes uniformes. O descasque manual rústico gera contaminação, não atinge as normas sanitárias e faz você perder contratos lucrativos."
            icon={<XCircle className="w-7 h-7" />}
          />
        </div>
      </div>
    </section>
  );
}

function PainCard({
  number,
  title,
  subtitle,
  body,
  icon,
}: {
  number: string;
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative bg-white border border-[#B8B8B2]/40 p-8 lg:p-10 transition hover:border-[#BD1C2C] hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(189,28,44,0.35)]">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#BD1C2C]" />
      <div className="flex items-start justify-between gap-4">
        <span className="font-display font-black text-5xl text-[#B8B8B2]/40">{number}</span>
        <div className="w-12 h-12 grid place-items-center bg-[#BD1C2C]/10 text-[#BD1C2C]">{icon}</div>
      </div>
      <div className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#BD1C2C]">
        {subtitle}
      </div>
      <h3 className="mt-2 font-display font-bold text-2xl text-[#080808] leading-tight">{title}</h3>
      <p className="mt-4 text-[15px] text-[#080808]/70 leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------------------- SOLUTION ---------------------- */
function SolutionSection() {
  return (
    <section id="solucao" className="relative py-24 lg:py-32 bg-[#080808] text-[#F7F7F4] overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <SectionLabel color="white">03 — Engenharia FK</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Engenharia de Precisão vs.{" "}
              <span className="text-[#BD1C2C]">Sistemas Inferiores de Serralheria</span>
            </h2>
          </div>
          <p className="text-lg text-[#F7F7F4]/75 leading-relaxed">
            Não confunda o maquinário industrial do Grupo FK com cópias baratas de balcão. Entenda
            por que nossa tecnologia patenteada garante até{" "}
            <strong className="text-white">12 anos de durabilidade</strong> em campo:
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <FeatureBlock
            icon={<Cog className="w-8 h-8" />}
            label="Patente FK"
            title="Facas Flexíveis Autoajustáveis"
            body="Lâminas circulares que se adaptam aos contornos e curvas de raízes tortas, removendo apenas a casca."
          />
          <FeatureBlock
            icon={<ShieldCheck className="w-8 h-8" />}
            label="AISI 304"
            title="Aço Inox Legítimo"
            body="Resistência absoluta à umidade, total conformidade com Anvisa e zero contaminação."
            highlight
          />
          <FeatureBlock
            icon={<Gauge className="w-8 h-8" />}
            label="Operação"
            title="Fluxo Contínuo Lateral"
            body="Alta produtividade contínua com apenas 3 operadores, sem paradas para carga e descarga."
          />
        </div>

        {/* image showcase */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <img src={bladesImg} alt="Detalhe das facas autoajustáveis em aço inox AISI 304" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#BD1C2C]">
                Tecnologia Patenteada
              </div>
              <div className="mt-1 font-display font-bold text-xl text-white">
                Lâminas circulares flexíveis
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <img src={farmerImg} alt="Operador rural utilizando equipamento Fankorte" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0FB85C]">
                Operação Real no Campo
              </div>
              <div className="mt-1 font-display font-bold text-xl text-white">
                Validado em condições severas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  icon,
  label,
  title,
  body,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-8 border ${
        highlight
          ? "bg-[#BD1C2C] border-[#BD1C2C] text-white"
          : "bg-white/5 border-white/10 text-[#F7F7F4]"
      } transition hover:-translate-y-1`}
    >
      <div className={`w-14 h-14 grid place-items-center ${highlight ? "bg-white/15" : "bg-[#BD1C2C]/15 text-[#BD1C2C]"}`}>
        {icon}
      </div>
      <div className={`mt-6 text-[11px] font-bold uppercase tracking-[0.2em] ${highlight ? "text-white/80" : "text-[#0FB85C]"}`}>
        {label}
      </div>
      <h3 className="mt-2 font-display font-bold text-2xl leading-tight">{title}</h3>
      <p className={`mt-3 text-[15px] leading-relaxed ${highlight ? "text-white/90" : "text-[#F7F7F4]/75"}`}>
        {body}
      </p>
    </div>
  );
}

/* ---------------------- COMPARISON TABLE ---------------------- */
function ComparisonTable() {
  const rows = [
    {
      label: "Sistema de Descasque",
      fk: "Facas Flexíveis Patenteadas FK: Lâminas circulares que se adaptam perfeitamente aos contornos e curvas de raízes tortas, removendo apenas a casca.",
      other: "Rolos plásticos por abrasão: Giram raspando o tubérculo, quebram as pontas da mandioca e geram desperdício massivo de polpa e amido saudável.",
    },
    {
      label: "Matéria-Prima de Fabricação",
      fk: "Aço Inox AISI 304 Legítimo: Resistência absoluta à umidade constante, garantindo alta assepsia e total conformidade com a Anvisa.",
      other: "Ferro / Aço Carbono: Material oxidável de serralheria que enferruja rapidamente em contato com a água, contaminando o alimento e violando as regras sanitárias.",
    },
    {
      label: "Fluxo de Trabalho",
      fk: "Fluxo Contínuo Lateral: O motor opera sem paradas para carga e descarga. Alta produtividade contínua com apenas 3 operadores.",
      other: "Fluxo Intermitente: Exige compressores externos de ar caros (que dobram o custo de aquisição) e paradas constantes do motor para abastecimento.",
    },
  ];
  return (
    <section className="py-20 lg:py-24 bg-[#F7F7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden border border-[#080808]/10 bg-white shadow-sm">
          {/* header */}
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr]">
            <div className="bg-[#080808] text-white p-6 hidden md:block">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8B8B2]">Comparativo</div>
              <div className="mt-1 font-display font-bold text-lg">Diferencial Técnico</div>
            </div>
            <div className="bg-[#BD1C2C] text-white p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80">Tecnologia</div>
              <div className="mt-1 font-display font-bold text-lg flex items-center gap-2">
                <Award className="w-5 h-5" /> Equipamentos Grupo FK
              </div>
            </div>
            <div className="bg-[#B8B8B2]/30 text-[#080808] p-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#080808]/60">Mercado</div>
              <div className="mt-1 font-display font-bold text-lg flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Concorrentes por Abrasão / Serralherias
              </div>
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr_1.4fr] border-t border-[#080808]/10 ${
                i % 2 === 1 ? "bg-[#F7F7F4]" : "bg-white"
              }`}
            >
              <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-[#080808]/10 bg-[#080808] md:bg-transparent text-white md:text-[#080808]">
                <div className="font-display font-bold text-base uppercase tracking-wide">{r.label}</div>
              </div>
              <div className="p-6 md:p-7 border-b md:border-b-0 md:border-r border-[#080808]/10">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0A8E48] mt-0.5 shrink-0" />
                  <p className="text-[15px] leading-relaxed text-[#080808]">{r.fk}</p>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#BD1C2C] mt-0.5 shrink-0" />
                  <p className="text-[15px] leading-relaxed text-[#080808]/70">{r.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- ROI ---------------------- */
function RoiSection() {
  return (
    <section id="roi" className="relative py-24 lg:py-32 bg-[#080808] text-white overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <img src={bladesImg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel color="green">04 — A Matemática do ROI</SectionLabel>
          <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Faça as contas: <span className="text-[#0FB85C]">Deixe de pagar diárias</span> e passe a acumular lucro.
          </h2>
          <p className="mt-6 text-lg text-[#F7F7F4]/80 leading-relaxed">
            Equipamento industrial não é custo, é investimento com retorno garantido no papel. Veja
            a matemática do seu negócio:
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <RoiCard
            label="Investimento Comercial no Kit"
            value="R$ 75.700"
            icon={<Banknote className="w-7 h-7" />}
            tone="muted"
          />
          <RoiCard
            label="Economia Mensal Média"
            value="R$ 10.000"
            sub="Mão de obra / Desperdício"
            icon={<TrendingUp className="w-7 h-7" />}
            tone="green"
          />
          <RoiCard
            label="Tempo de Amortização"
            value="~7,5 meses"
            icon={<Calculator className="w-7 h-7" />}
            tone="red"
          />
        </div>

        <div className="mt-14 relative border-l-4 border-[#0FB85C] bg-gradient-to-r from-[#0A8E48]/20 to-transparent p-8 lg:p-12">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0FB85C]">
            ⚡ Destaque
          </div>
          <p className="mt-4 font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase leading-tight tracking-tight">
            A máquina se paga em menos de 8 meses.{" "}
            <span className="text-[#0FB85C]">
              Depois disso, a economia vira lucro líquido direto no seu bolso.
            </span>
          </p>
          <a
            href="#formulario"
            className="mt-8 inline-flex items-center gap-2 bg-[#0A8E48] hover:bg-[#0FB85C] text-white px-6 py-4 rounded-sm font-bold text-sm uppercase tracking-wider transition"
          >
            Quero calcular meu ROI
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function RoiCard({
  label,
  value,
  sub,
  icon,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  icon: React.ReactNode;
  tone: "muted" | "green" | "red";
}) {
  const toneClass = {
    muted: "bg-white/5 border-white/10 text-white",
    green: "bg-[#0A8E48] border-[#0A8E48] text-white",
    red: "bg-[#BD1C2C] border-[#BD1C2C] text-white",
  }[tone];
  return (
    <div className={`relative border p-8 ${toneClass}`}>
      <div className="w-12 h-12 grid place-items-center bg-white/15">{icon}</div>
      <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">{label}</div>
      <div className="mt-2 font-display font-black text-4xl lg:text-5xl tracking-tight">{value}</div>
      {sub && <div className="mt-1 text-sm opacity-80">{sub}</div>}
    </div>
  );
}

/* ---------------------- TRUST ---------------------- */
function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel color="blue">05 — Selos & Crédito</SectionLabel>
          <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
            Facilidade na compra, segurança jurídica na operação.
          </h2>
          <p className="mt-6 text-lg text-[#080808]/75 leading-relaxed">
            Oferecemos suporte completo de engenharia e acesso às principais linhas de crédito do
            agronegócio para facilitar o seu investimento:
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <SealCard
            tag="Selo 1"
            title="Conformidade Sanitária (ANVISA)"
            body="Estrutura 100% em aço inox que atende integralmente aos padrões exigidos de higiene e segurança alimentar."
            color="blue"
            icon={<ShieldCheck className="w-8 h-8" />}
          />
          <SealCard
            tag="Selo 2"
            title="Segurança Industrial (NR12)"
            body="Equipamento projetado sob rígidas normas de segurança do trabalho, protegendo seus operadores de acidentes e sua empresa de multas fiscais."
            color="red"
            icon={<Wrench className="w-8 h-8" />}
          />
        </div>

        <div className="mt-16 border border-[#080808]/10 bg-white p-8 lg:p-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#13508B]">
            Linhas de Crédito Atendidas
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Cadastrado no BNDES Finame",
              "Elegível para o PRONAF",
              "Aceitamos Consórcios Nacionais",
              "Parcelamento Comercial Direto com a fábrica",
            ].map((t, i) => (
              <div
                key={i}
                className="border border-[#080808]/10 p-5 bg-[#F7F7F4] flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0A8E48] shrink-0 mt-0.5" />
                <span className="font-display font-semibold text-sm text-[#080808] leading-tight">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SealCard({
  tag,
  title,
  body,
  color,
  icon,
}: {
  tag: string;
  title: string;
  body: string;
  color: "blue" | "red";
  icon: React.ReactNode;
}) {
  const accent = color === "blue" ? "#13508B" : "#BD1C2C";
  return (
    <div className="relative bg-white border border-[#080808]/10 p-8 lg:p-10 overflow-hidden group hover:-translate-y-1 transition">
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ backgroundColor: accent }}
      />
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 grid place-items-center text-white"
          style={{ backgroundColor: accent }}
        >
          {icon}
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
          {tag}
        </div>
      </div>
      <h3 className="mt-5 font-display font-bold text-2xl text-[#080808] leading-tight">{title}</h3>
      <p className="mt-3 text-[15px] text-[#080808]/70 leading-relaxed">{body}</p>
    </div>
  );
}

/* ---------------------- SOCIAL PROOF ---------------------- */
function SocialProof() {
  const regions = ["Paraná", "Pará", "Mato Grosso do Sul"];
  return (
    <section id="provas" className="py-24 lg:py-32 bg-[#080808] text-white relative overflow-hidden">
      <div className="absolute inset-0 industrial-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel color="white">06 — Prova de Campo</SectionLabel>
          <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Quem está na roça <span className="text-[#0FB85C]">aprova a tecnologia FK.</span>
          </h2>
          <p className="mt-6 text-lg text-[#F7F7F4]/80 leading-relaxed">
            Veja o depoimento real e sem edições de produtores e cooperativas das principais regiões
            polos do país (Paraná, Pará e Mato Grosso do Sul) mostrando as máquinas operando sob
            condições severas de campo.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {regions.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 bg-[#0FB85C] rounded-full" />
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <VideoCard key={i} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ index }: { index: number }) {
  const labels = [
    { region: "Paraná", who: "Cooperativa de Mandiocultores" },
    { region: "Pará", who: "Agroindústria Familiar" },
    { region: "Mato Grosso do Sul", who: "Produtor Polo Regional" },
  ];
  const { region, who } = labels[index - 1];
  return (
    <div className="group relative aspect-[4/5] bg-[#1a1a1a] border border-white/10 overflow-hidden cursor-pointer">
      <img
        src={index === 2 ? farmerImg : index === 1 ? heroImg : bladesImg}
        alt={`Depoimento ${region}`}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition duration-700"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-[#BD1C2C] text-white px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
        Vídeo Real
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="w-20 h-20 grid place-items-center rounded-full bg-white/15 backdrop-blur border border-white/30 group-hover:bg-[#BD1C2C] group-hover:border-[#BD1C2C] transition">
          <PlayCircle className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0FB85C]">{region}</div>
        <div className="mt-1 font-display font-bold text-lg text-white">{who}</div>
      </div>
    </div>
  );
}

/* ---------------------- FORM ---------------------- */
function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="formulario" className="py-24 lg:py-32 bg-[#F7F7F4] relative">
      <div className="absolute inset-x-0 top-0 h-3 diagonal-stripes opacity-90" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <SectionLabel color="red">07 — Triagem Inteligente</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
              Simule a Proposta Ideal para a sua Produção
            </h2>
            <p className="mt-6 text-lg text-[#080808]/75 leading-relaxed">
              Preencha os dados abaixo para receber uma análise técnica sob medida da nossa equipe
              de engenharia de pós-venda. Leva menos de 1 minuto.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Resposta em até 24h por engenheiro",
                "Análise técnica sob medida para o seu volume",
                "Simulação de crédito BNDES / PRONAF",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[#080808]">
                  <CheckCircle2 className="w-5 h-5 text-[#0A8E48] shrink-0 mt-0.5" />
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-white border border-[#080808]/10 p-8 lg:p-10 shadow-[0_30px_80px_-40px_rgba(8,8,8,0.4)]"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 grid place-items-center mx-auto bg-[#0A8E48] text-white rounded-full">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mt-6 font-display font-bold text-2xl text-[#080808]">
                  Dados recebidos com sucesso!
                </h3>
                <p className="mt-3 text-[#080808]/70">
                  Nossa equipe de engenharia entrará em contato em até 24h.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#BD1C2C]">
                  <Factory className="w-4 h-4" />
                  Formulário de Engenharia
                </div>

                <div className="mt-6 space-y-5">
                  <Field label="Nome Completo" required>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      className="w-full bg-[#F7F7F4] border border-[#080808]/15 px-4 py-3.5 text-[#080808] focus:outline-none focus:border-[#BD1C2C] focus:bg-white transition"
                      placeholder="Seu nome"
                    />
                  </Field>

                  <Field label="Telefone / WhatsApp Comercial" required>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      className="w-full bg-[#F7F7F4] border border-[#080808]/15 px-4 py-3.5 text-[#080808] focus:outline-none focus:border-[#BD1C2C] focus:bg-white transition"
                      placeholder="(00) 00000-0000"
                    />
                  </Field>

                  <Field label="Qual cultura sua agroindústria processa atualmente?" required>
                    <div className="grid grid-cols-3 gap-2">
                      {["Mandioca", "Cacau", "Outros"].map((opt) => (
                        <Radio key={opt} name="cultura" label={opt} />
                      ))}
                    </div>
                  </Field>

                  <Field label="Qual é o seu volume médio de processamento diário?" required>
                    <div className="space-y-2">
                      {["Até 1.000 kg", "De 1.000 a 5.000 kg", "Acima de 5.000 kg"].map((opt) => (
                        <Radio key={opt} name="volume" label={opt} block />
                      ))}
                    </div>
                  </Field>

                  <Field label="Você possui CNPJ ou Inscrição Estadual ativa?" required>
                    <div className="grid grid-cols-2 gap-2">
                      {["Sim", "Não"].map((opt) => (
                        <Radio key={opt} name="cnpj" label={opt} />
                      ))}
                    </div>
                  </Field>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-[#0A8E48] hover:bg-[#0FB85C] text-white px-7 py-5 font-display font-bold text-base uppercase tracking-wider transition shadow-[0_10px_30px_-10px_rgba(10,142,72,0.5)]"
                >
                  🚀 Enviar Dados e Falar com Engenheiro Suporte
                </button>

                <p className="mt-4 text-xs text-[#080808]/60 text-center">
                  Seus dados são tratados com sigilo. Sem spam.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-display font-semibold text-[#080808] mb-2">
        {label}
        {required && <span className="text-[#BD1C2C] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function Radio({ name, label, block }: { name: string; label: string; block?: boolean }) {
  return (
    <label
      className={`flex items-center gap-2 border border-[#080808]/15 bg-[#F7F7F4] px-4 py-3 cursor-pointer hover:border-[#BD1C2C] transition has-[:checked]:border-[#BD1C2C] has-[:checked]:bg-[#BD1C2C]/5 has-[:checked]:text-[#BD1C2C] ${
        block ? "w-full" : ""
      }`}
    >
      <input type="radio" name={name} className="accent-[#BD1C2C]" required />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="bg-[#080808] text-[#F7F7F4]/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <img src={logoFk} alt="Grupo FK" className="h-12 w-auto" />
            <p className="mt-4 text-sm leading-relaxed max-w-sm">
              Grupo FK / Fankorte — Mecanização industrial de fluxo contínuo para agroindústrias,
              produtores, cooperativas e associações.
            </p>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Navegação
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#problema" className="hover:text-white">Problema</a></li>
              <li><a href="#solucao" className="hover:text-white">Solução</a></li>
              <li><a href="#roi" className="hover:text-white">ROI</a></li>
              <li><a href="#formulario" className="hover:text-white">Proposta</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Conformidade
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>ANVISA — Higiene Alimentar</li>
              <li>NR12 — Segurança Industrial</li>
              <li>BNDES Finame · PRONAF</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} Grupo FK · Fankorte Industrial Solutions</span>
          <span>Tecnologia Patenteada · Fabricação Brasileira</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------- FLOATING ---------------------- */
function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 sm:bottom-6 right-6 z-50 w-14 h-14 grid place-items-center rounded-full bg-[#0A8E48] hover:bg-[#0FB85C] text-white shadow-[0_10px_30px_-5px_rgba(10,142,72,0.6)] transition hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

function StickyMobileCta() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#080808] border-t border-white/10 p-3">
      <a
        href="#formulario"
        className="flex items-center justify-center gap-2 bg-[#0A8E48] text-white py-3.5 font-display font-bold text-sm uppercase tracking-wider"
      >
        Solicitar Proposta Técnica
        <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ---------------------- SHARED ---------------------- */
function SectionLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color: "red" | "green" | "blue" | "white";
}) {
  const map = {
    red: "text-[#BD1C2C] before:bg-[#BD1C2C]",
    green: "text-[#0FB85C] before:bg-[#0FB85C]",
    blue: "text-[#13508B] before:bg-[#13508B]",
    white: "text-white before:bg-white",
  }[color];
  return (
    <div
      className={`relative inline-flex items-center gap-3 pl-6 text-[11px] font-bold uppercase tracking-[0.25em] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-px ${map}`}
    >
      {children}
    </div>
  );
}
