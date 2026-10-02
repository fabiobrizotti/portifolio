import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Rise } from "../motion";
import { WorkflowNodes } from "./nodes";

const baseUrl = "https://fabiobrizotti.vercel.app";
const postUrl = `${baseUrl}/blog/anne-ia/workflow`;

const stepNames = [
  "Recepção e organização do contato",
  "Controle de ritmo e proteção",
  "Pausa para atendimento humano",
  "Separação de texto, imagem e áudio",
  "Fila organizada de mensagens",
  "Junta as mensagens antes de responder",
  "Última checagem antes de responder",
  "Assume a identidade da empresa",
  "O cérebro e as ferramentas",
  "Despacho e fila de saída",
  "Retira o recado com segurança",
  "Fatia a resposta para o celular",
  "Entrega no ritmo humano",
];

export const metadata = {
  title: "Como a Anne organiza seu WhatsApp | Fabio Brizotti",
  description:
    "Veja o passo a passo de como a Anne recebe, organiza e responde cada mensagem do seu WhatsApp — sem travar a loja nos momentos de pico.",
  keywords: [
    "atendimento automatizado",
    "automação WhatsApp",
    "organização de atendimento",
    "Anne IA",
    "Fabio Brizotti",
  ],
  authors: [{ name: "Fabio Brizotti", url: baseUrl }],
  alternates: { canonical: postUrl },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: postUrl,
    title: "Como a Anne organiza seu WhatsApp",
    description:
      "Do primeiro oi até a resposta: o fluxo que mantém seu WhatsApp organizado mesmo nos dias de pico.",
    siteName: "Fabio Brizotti",
    publishedTime: "2026-10-02T00:00:00-03:00",
    authors: ["Fabio Brizotti"],
    tags: ["WhatsApp", "automação", "atendimento"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Como a Anne organiza seu WhatsApp",
    description:
      "Do primeiro oi até a resposta: o fluxo que mantém seu WhatsApp organizado mesmo nos dias de pico.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Como a Anne organiza seu WhatsApp",
  description:
    "Fluxo de atendimento automatizado no WhatsApp: recepção, proteção, pausa humana, triagem e fila.",
  inLanguage: "pt-BR",
  url: postUrl,
  step: stepNames.map((name, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name,
  })),
};

export default function WorkflowPage() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zinc-800/10 blur-[120px] pointer-events-none rounded-full" />

      <Navbar />

      <main className="max-w-3xl mx-auto px-6 relative z-10 pt-32 pb-16 space-y-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> /blog
        </Link>

        {/* Cabeçalho */}
        <div className="space-y-4">
          <Rise instant>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Anne IA · Por dentro do fluxo</span>
            </div>
          </Rise>
          <Rise instant delay={0.08}>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Como a Anne organiza seu WhatsApp
            </h1>
          </Rise>
          <Rise instant delay={0.16}>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              O objetivo desse fluxo é resolver o gargalo que muitas empresas
              enfrentam no WhatsApp, onde clientes esperam muito tempo na fila
              para tirar dúvidas simples e repetitivas sobre preços, horários
              ou informações básicas.
            </p>
          </Rise>
        </div>

        {/* Fluxo */}
        <section aria-label="Etapas do atendimento">
          <WorkflowNodes />
        </section>

        {/* Fechamento */}
        <Rise>
          <section className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 space-y-3">
            <h2 className="text-xs font-semibold tracking-wide uppercase font-mono text-zinc-200">
              No fim das contas
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Nenhuma mensagem se perde, ninguém espera demais e sua equipe só
              pega o que realmente precisa de gente. Quer ver a história
              completa?{" "}
              <Link
                href="/blog/anne-ia"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                Volte ao artigo da Anne IA
              </Link>
              .
            </p>
          </section>
        </Rise>
      </main>
    </div>
  );
}
