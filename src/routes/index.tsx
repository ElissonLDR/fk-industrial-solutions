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
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-machine.jpg";
import bladesImg from "@/assets/blades-detail.jpg";
import farmerImg from "@/assets/farmer-operation.jpg";
import logoFk from "@/assets/logo-fk.png";
import { IndustrialButton } from "@/components/industrial-button";
import { Reveal } from "@/components/reveal";
import { formatCurrency, formatMonths, useCountAnimation, useCountUp } from "@/hooks/use-count-up";

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
    <div className="min-h-screen bg-[#F7F7F4] text-base text-[#080808] font-sans antialiased">
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
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-[#F7F7F4]/80">
          <a href="#problema" className="hover:text-white transition">Desafios</a>
          <a href="#solucao" className="hover:text-white transition">Tecnologia</a>
          <a href="#roi" className="hover:text-white transition">Retorno</a>
          <a href="#provas" className="hover:text-white transition">Depoimentos</a>
        </nav>
        <IndustrialButton href="#formulario" size="sm" className="hidden sm:inline-flex">
          Solicitar proposta
          <ArrowRight className="w-4 h-4" />
        </IndustrialButton>
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
          <Reveal immediate variant="fade" delay={0}>
            <div className="shape-para shape-para-sm inline-flex items-center gap-2 bg-[#BD1C2C] text-white px-5 py-2 text-[11px] font-bold tracking-[0.18em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Tecnologia Patenteada Pós-Colheita
            </div>
          </Reveal>

          <Reveal immediate variant="text" delay={120}>
            <h1 className="mt-6 font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] tracking-tight">
              Reduza até <span className="text-[#BD1C2C]">80%</span> a mão de obra com{" "}
              <span className="text-[#0FB85C]">facas autoajustáveis patenteadas</span>
            </h1>
          </Reveal>

          <Reveal immediate variant="up" delay={240}>
            <p className="mt-6 text-base text-[#F7F7F4]/85 max-w-2xl leading-relaxed">
              Processe até <strong className="text-white">900 raízes por hora</strong> com assepsia total
              em aço inox AISI 304. Elimine as paradas na produção causadas pela falta de diaristas e
              garanta o padrão exigido pelos grandes supermercados.
            </p>
          </Reveal>

          <Reveal immediate variant="up" delay={360}>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <IndustrialButton
                href="#formulario"
                size="lg"
                shadow
                className="group"
              >
                Solicitar Proposta Técnica
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </IndustrialButton>
              <div className="flex items-center gap-3 text-base text-[#F7F7F4]/70">
                <ShieldCheck className="w-5 h-5 text-[#0FB85C]" />
                Resposta de engenharia em até 24h
              </div>
            </div>
          </Reveal>

          <Reveal immediate variant="up" delay={480}>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 max-w-3xl">
              <Spec end={900} unit="raízes/h" label="Capacidade" />
              <Spec end={80} suffix="%" label="Menos mão de obra" />
              <Spec end={304} unit="AISI" label="Aço inox" />
              <Spec end={12} unit="anos" label="Durabilidade" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* bottom industrial bar */}
      <div className="absolute bottom-0 left-0 right-0 h-3 diagonal-stripes opacity-90" />
    </section>
  );
}

function Spec({
  end,
  suffix = "",
  unit,
  label,
}: {
  end: number;
  suffix?: string;
  unit?: string;
  label: string;
}) {
  const { value, ref } = useCountUp(end);

  return (
    <div className="bg-[#080808] p-5">
      <div className="flex items-baseline gap-1">
        <span
          ref={ref}
          className="font-display font-black text-3xl lg:text-4xl text-white tabular-nums"
        >
          {value}
          {suffix}
        </span>
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
    <Reveal variant="fade">
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
    </Reveal>
  );
}

/* ---------------------- PAIN ---------------------- */
function PainSection() {
  return (
    <section id="problema" className="py-24 lg:py-32 bg-[#F7F7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="text">
          <div className="max-w-3xl">
            <SectionLabel color="red">02 — O Gargalo Operacional</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
              O prejuízo invisível que trava o crescimento da sua agroindústria.
            </h2>
            <p className="mt-6 text-base text-[#080808]/75 leading-relaxed">
              Tocar o processamento de forma manual ou com ferramentas improvisadas cria dois
              problemas que corroem sua margem de lucro todos os dias:
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
          <Reveal variant="left" delay={0}>
            <PainCard
              number="01"
              title="Turnover e falta de diaristas no campo."
              subtitle="A Instabilidade do “Moda Facão”"
              body="Depender de equipes de descasque manual significa colocar o ritmo da sua colheita na mão de terceiros. Quando o pessoal falta, a produção para, o tubérculo passa do ponto e o seu faturamento despenca."
              icon={<Users className="w-7 h-7" />}
            />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <PainCard
              number="02"
              title="Perda de contratos por falta de padronização."
              subtitle="A Barreira dos Supermercados"
              body="As grandes redes de supermercados e indústrias de fécula exigem assepsia rigorosa e cortes uniformes. O descasque manual rústico gera contaminação, não atinge as normas sanitárias e faz você perder contratos lucrativos."
              icon={<XCircle className="w-7 h-7" />}
            />
          </Reveal>
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
    <div className="shape-para shape-para-md shape-para-inset-lg shape-para-shadow relative bg-white py-8 lg:py-10">
      <div className="relative z-[1] flex items-start justify-between gap-4">
        <span className="font-display font-black text-5xl text-[#B8B8B2]/40">{number}</span>
        <div className="shape-para shape-para-sm w-12 h-12 grid place-items-center bg-[#BD1C2C]/10 text-[#BD1C2C]">{icon}</div>
      </div>
      <div className="relative z-[1] mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#BD1C2C]">
        {subtitle}
      </div>
      <h3 className="relative z-[1] mt-2 font-display font-bold text-2xl text-[#080808] leading-tight">{title}</h3>
      <p className="relative z-[1] mt-4 text-base text-[#080808]/70 leading-relaxed">{body}</p>
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
          <Reveal variant="text">
            <div>
              <SectionLabel color="white">03 — Engenharia FK</SectionLabel>
              <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                Engenharia de Precisão vs.{" "}
                <span className="text-[#BD1C2C]">Sistemas Inferiores de Serralheria</span>
              </h2>
            </div>
          </Reveal>
          <Reveal variant="up" delay={120}>
            <p className="text-base text-[#F7F7F4]/75 leading-relaxed">
              Não confunda o maquinário industrial do Grupo FK com cópias baratas de balcão. Entenda
              por que nossa tecnologia patenteada garante até{" "}
              <strong className="text-white">12 anos de durabilidade</strong> em campo:
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-10">
          <Reveal variant="up" delay={0}>
            <FeatureBlock
              icon={<Cog className="w-8 h-8" />}
              label="Patente FK"
              title="Facas Flexíveis Autoajustáveis"
              body="Lâminas circulares que se adaptam aos contornos e curvas de raízes tortas, removendo apenas a casca."
            />
          </Reveal>
          <Reveal variant="up" delay={120}>
            <FeatureBlock
              icon={<ShieldCheck className="w-8 h-8" />}
              label="AISI 304"
              title="Aço Inox Legítimo"
              body="Resistência absoluta à umidade, total conformidade com Anvisa e zero contaminação."
              highlight
            />
          </Reveal>
          <Reveal variant="up" delay={240}>
            <FeatureBlock
              icon={<Gauge className="w-8 h-8" />}
              label="Operação"
              title="Fluxo Contínuo Lateral"
              body="Alta produtividade contínua com apenas 3 operadores, sem paradas para carga e descarga."
            />
          </Reveal>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 lg:gap-10">
          <Reveal variant="left">
            <div className="shape-para shape-para-lg relative aspect-[4/3] overflow-hidden">
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
          </Reveal>
          <Reveal variant="right" delay={120}>
            <div className="shape-para shape-para-lg relative aspect-[4/3] overflow-hidden">
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
          </Reveal>
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
      className={`shape-para shape-para-md shape-para-inset shape-para-shadow-dark relative py-8 h-full ${
        highlight
          ? "bg-[#BD1C2C] text-white"
          : "bg-white/5 text-[#F7F7F4]"
      }`}
    >
      <div className={`shape-para shape-para-sm w-14 h-14 grid place-items-center ${highlight ? "bg-white/15" : "bg-[#BD1C2C]/15 text-[#BD1C2C]"}`}>
        {icon}
      </div>
      <div className={`mt-6 text-[11px] font-bold uppercase tracking-[0.2em] ${highlight ? "text-white/80" : "text-[#0FB85C]"}`}>
        {label}
      </div>
      <h3 className="mt-2 font-display font-bold text-2xl leading-tight">{title}</h3>
      <p className={`mt-3 text-base leading-relaxed ${highlight ? "text-white/90" : "text-[#F7F7F4]/75"}`}>
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
        <Reveal variant="up">
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
                  <p className="text-base leading-relaxed text-[#080808]">{r.fk}</p>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#BD1C2C] mt-0.5 shrink-0" />
                  <p className="text-base leading-relaxed text-[#080808]/70">{r.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
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
        <Reveal variant="text">
          <div className="max-w-3xl">
            <SectionLabel color="green">04 — A Matemática do ROI</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Faça as contas: <span className="text-[#0FB85C]">Deixe de pagar diárias</span> e passe a acumular lucro.
            </h2>
            <p className="mt-6 text-base text-[#F7F7F4]/80 leading-relaxed">
              Equipamento industrial não é custo, é investimento com retorno garantido no papel. Veja
              a matemática do seu negócio:
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-8 lg:gap-10">
          <Reveal variant="up" delay={0}>
            <RoiCard
              label="Investimento Comercial no Kit"
              icon={<Banknote className="w-7 h-7" />}
              tone="muted"
              animation={{ end: 75700, start: 98000, direction: "down", format: "currency" }}
            />
          </Reveal>
          <Reveal variant="up" delay={120}>
            <RoiCard
              label="Economia Mensal Média"
              sub="Mão de obra / Desperdício"
              icon={<TrendingUp className="w-7 h-7" />}
              tone="green"
              animation={{ end: 10000, direction: "up", format: "currency" }}
            />
          </Reveal>
          <Reveal variant="up" delay={240}>
            <RoiCard
              label="Tempo de Amortização"
              icon={<Calculator className="w-7 h-7" />}
              tone="red"
              animation={{ end: 7.5, start: 18, direction: "down", format: "months", decimals: 1 }}
            />
          </Reveal>
        </div>

        <Reveal variant="up" delay={120}>
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
          <IndustrialButton href="#formulario" size="md" className="mt-8">
            Quero calcular meu ROI
            <ArrowRight className="w-4 h-4" />
          </IndustrialButton>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoiCard({
  label,
  sub,
  icon,
  tone,
  animation,
}: {
  label: string;
  sub?: string;
  icon: React.ReactNode;
  tone: "muted" | "green" | "red";
  animation: {
    end: number;
    start?: number;
    direction: "up" | "down";
    format: "currency" | "months";
    decimals?: number;
  };
}) {
  const toneClass = {
    muted: "bg-white/5 text-white",
    green: "bg-[#0A8E48] text-white",
    red: "bg-[#BD1C2C] text-white",
  }[tone];

  const { value, ref } = useCountAnimation<HTMLDivElement>(animation.end, {
    start: animation.start,
    direction: animation.direction,
    decimals: animation.decimals ?? 0,
  });

  const displayValue =
    animation.format === "currency" ? formatCurrency(value) : formatMonths(value);

  return (
    <div className={`shape-para shape-para-md shape-para-inset shape-para-shadow-dark relative py-8 h-full ${toneClass}`}>
      <div className="shape-para shape-para-sm w-12 h-12 grid place-items-center bg-white/15">{icon}</div>
      <div className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">{label}</div>
      <div
        ref={ref}
        className="mt-2 font-display font-black text-4xl lg:text-5xl tracking-tight tabular-nums"
      >
        {displayValue}
      </div>
      {sub && <div className="mt-1 text-base opacity-80">{sub}</div>}
    </div>
  );
}

/* ---------------------- TRUST ---------------------- */
function TrustSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F7F4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="text">
          <div className="max-w-3xl">
            <SectionLabel color="blue">05 — Selos & Crédito</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
              Facilidade na compra, segurança jurídica na operação.
            </h2>
            <p className="mt-6 text-base text-[#080808]/75 leading-relaxed">
              Oferecemos suporte completo de engenharia e acesso às principais linhas de crédito do
              agronegócio para facilitar o seu investimento:
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8 lg:gap-10">
          <Reveal variant="left">
            <SealCard
              tag="Selo 1"
              title="Conformidade Sanitária (ANVISA)"
              body="Estrutura 100% em aço inox que atende integralmente aos padrões exigidos de higiene e segurança alimentar."
              color="blue"
              icon={<ShieldCheck className="w-8 h-8" />}
            />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <SealCard
              tag="Selo 2"
              title="Segurança Industrial (NR12)"
              body="Equipamento projetado sob rígidas normas de segurança do trabalho, protegendo seus operadores de acidentes e sua empresa de multas fiscais."
              color="red"
              icon={<Wrench className="w-8 h-8" />}
            />
          </Reveal>
        </div>

        <Reveal variant="up" delay={120}>
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
              <Reveal key={t} variant="fade" delay={i * 80}>
                <div className="border border-[#080808]/10 p-5 bg-[#F7F7F4] flex items-start gap-3 h-full">
                  <CheckCircle2 className="w-5 h-5 text-[#0A8E48] shrink-0 mt-0.5" />
                  <span className="font-display font-semibold text-base text-[#080808] leading-tight">
                    {t}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </Reveal>
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
    <div
      className="shape-para shape-para-md shape-para-inset-lg shape-para-shadow shape-para-accent-top relative bg-white py-8 lg:py-10 overflow-hidden"
      style={{ "--para-accent": accent } as React.CSSProperties}
    >
      <div className="flex items-center gap-4">
        <div
          className="shape-para shape-para-sm w-14 h-14 grid place-items-center text-white"
          style={{ backgroundColor: accent }}
        >
          {icon}
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: accent }}>
          {tag}
        </div>
      </div>
      <h3 className="mt-5 font-display font-bold text-2xl text-[#080808] leading-tight">{title}</h3>
      <p className="mt-3 text-base text-[#080808]/70 leading-relaxed">{body}</p>
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
        <Reveal variant="text">
          <div className="max-w-3xl">
            <SectionLabel color="white">06 — Prova de Campo</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              Quem está na roça <span className="text-[#0FB85C]">aprova a tecnologia FK.</span>
            </h2>
            <p className="mt-6 text-base text-[#F7F7F4]/80 leading-relaxed">
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
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Reveal key={i} variant="up" delay={(i - 1) * 120}>
              <VideoCard index={i} />
            </Reveal>
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
    <div className="group relative aspect-[4/5] bg-[#1a1a1a] border border-white/10 overflow-hidden">
      <img
        src={index === 2 ? farmerImg : index === 1 ? heroImg : bladesImg}
        alt={`Depoimento ${region}`}
        className="w-full h-full object-cover opacity-60"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
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
          <Reveal variant="left" className="lg:sticky lg:top-24 self-start">
            <SectionLabel color="red">07 — Triagem Inteligente</SectionLabel>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-[#080808]">
              Simule a Proposta Ideal para a sua Produção
            </h2>
            <p className="mt-6 text-base text-[#080808]/75 leading-relaxed">
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
                  <span className="text-base">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined") {
                const w = window as Window & { dataLayer?: Record<string, unknown>[] };
                w.dataLayer = w.dataLayer || [];
                w.dataLayer.push({ event: "lead_form_submit" });
              }
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
                <p className="mt-3 text-base text-[#080808]/70">
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
                      className="w-full bg-[#F7F7F4] border border-[#080808]/15 px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-[#BD1C2C] focus:bg-white transition"
                      placeholder="Seu nome"
                    />
                  </Field>

                  <Field label="Telefone / WhatsApp Comercial" required>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      className="w-full bg-[#F7F7F4] border border-[#080808]/15 px-4 py-3.5 text-base text-[#080808] focus:outline-none focus:border-[#BD1C2C] focus:bg-white transition"
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

                <IndustrialButton
                  as="button"
                  type="submit"
                  size="lg"
                  fullWidth
                  shadow
                  className="mt-8"
                >
                  Enviar e Falar com Engenheiro
                </IndustrialButton>

                <p className="mt-4 text-xs text-[#080808]/60 text-center">
                  Seus dados são tratados com sigilo. Sem spam.
                </p>
              </>
            )}
          </form>
          </Reveal>
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
      <span className="block text-base font-display font-semibold text-[#080808] mb-2">
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
      <span className="text-base font-medium">{label}</span>
    </label>
  );
}

/* ---------------------- FOOTER ---------------------- */
function Footer() {
  return (
    <footer className="bg-[#080808] text-[#F7F7F4]/70 py-8 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <img src={logoFk} alt="Grupo FK" className="h-9 w-auto" />
        <p className="text-center sm:text-right">
          © {new Date().getFullYear()} Grupo FK · Fankorte Industrial Solutions
        </p>
      </div>
    </footer>
  );
}

/* ---------------------- FLOATING ---------------------- */
function StickyMobileCta() {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#080808] border-t border-white/10 p-3">
      <IndustrialButton href="#formulario" size="md" fullWidth>
        Solicitar Proposta Técnica
        <ChevronRight className="w-4 h-4" />
      </IndustrialButton>
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
