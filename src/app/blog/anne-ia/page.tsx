import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle, Settings2, Database, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Rise } from "./motion";

const baseUrl = "https://fabiobrizotti.vercel.app";
const postUrl = `${baseUrl}/blog/anne-ia`;

export const metadata = {
  title: "Anne IA: o fim do vácuo no WhatsApp | Fabio Brizotti",
  description:
    "Cinco minutos sem resposta custam a venda. Como a Anne IA atende no WhatsApp com inteligência artificial: entende texto e áudio, consulta estoque e preço na fonte, e passa para humano quando precisa. Automação com n8n e Evolution API.",
  keywords: [
    "inteligência artificial",
    "IA no WhatsApp",
    "atendimento automatizado",
    "automação WhatsApp",
    "chatbot WhatsApp",
    "n8n",
    "Evolution API",
    "automação comercial",
    "atendimento com IA",
    "Anne IA",
    "Fabio Brizotti",
  ],
  authors: [{ name: "Fabio Brizotti", url: baseUrl }],
  alternates: { canonical: postUrl },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    url: postUrl,
    title: "Anne IA: o fim do vácuo no WhatsApp",
    description:
      "Atendimento inteligente no WhatsApp com IA: resposta imediata, tom da sua empresa, 24h por dia. Texto, áudio, estoque e preço na fonte.",
    siteName: "Fabio Brizotti",
    publishedTime: "2026-10-01T00:00:00-03:00",
    authors: ["Fabio Brizotti"],
    tags: ["inteligência artificial", "WhatsApp", "automação", "n8n"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anne IA: o fim do vácuo no WhatsApp",
    description:
      "Atendimento inteligente no WhatsApp com IA: resposta imediata, tom da sua empresa, 24h por dia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Anne IA: o fim do vácuo no WhatsApp",
  description:
    "Como a Anne IA atende no WhatsApp com inteligência artificial: entende texto e áudio, consulta estoque e preço na fonte, e passa para humano quando precisa.",
  author: { "@type": "Person", name: "Fabio Brizotti", url: baseUrl },
  datePublished: "2026-10-01",
  inLanguage: "pt-BR",
  url: postUrl,
  keywords: "inteligência artificial, WhatsApp, automação, n8n, atendimento automatizado",
};

function SectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
      {children}
    </h2>
  );
}

export default function AnneIaPost() {
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

      <main className="max-w-4xl mx-auto px-6 relative z-10 pt-32 pb-16 space-y-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> /blog
        </Link>

        {/* Hero */}
        <div className="space-y-4">
          <Rise instant>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Anne IA</span>
            </div>
          </Rise>
          <Rise instant delay={0.08}>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Anne IA: o fim do vácuo no WhatsApp
            </h1>
          </Rise>
          <Rise instant delay={0.16}>
            <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Cinco minutos sem resposta e o cliente já abriu o concorrente. A
              Anne responde na hora, com o tom da sua empresa, e segura a venda
              até o fim.
            </p>
          </Rise>
          <Rise instant delay={0.24}>
            <div className="flex flex-wrap gap-2 pt-1">
              {["WhatsApp", "n8n", "Evolution API", "Atendimento"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/50 border border-zinc-700/50 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Rise>
        </div>

        {/* O problema */}
        <Rise>
        <section className="space-y-4">
          <div>
            <SectionLabel>{"// O problema"}</SectionLabel>
            <h3 className="text-xl font-medium text-white tracking-tight">
              Cinco minutos de silêncio custam a venda
            </h3>
          </div>
          <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
              Quem toca operação sabe como é. Você está embalando pedido,
              conferindo estoque, atendendo no balcão. Cinco minutos passam
              rápido para quem está trabalhando.
            </p>
            <p>
              Para quem mandou mensagem, passam devagar. No WhatsApp a intenção
              de compra é imediata. Se a resposta demora, a pessoa chama o
              próximo da lista. Rapidez no primeiro contato é parte da venda,
              não só suporte.
            </p>
            <p>
              Vi isso de perto nos 9 meses de B&amp;B Doceria. A Anne nasceu
              para cobrir esse intervalo. Ela atende na hora, entende texto e
              áudio, e resolve a dúvida até o fim sem parecer menu de
              telemarketing.
            </p>
          </div>
        </section>
        </Rise>

        {/* Como funciona */}
        <Rise>
        <section className="space-y-4">
          <div>
            <SectionLabel>{"// Como funciona"}</SectionLabel>
            <h3 className="text-xl font-medium text-white tracking-tight">
              O que ela faz
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: MessageCircle,
                color: "text-emerald-400",
                t: "Conversa de verdade",
                d: "Sem menu de digite 1 ou 2. A pessoa escreve do jeito dela, manda áudio se quiser, e a Anne responde no mesmo ritmo.",
              },
              {
                icon: Settings2,
                color: "text-amber-400",
                t: "Tom da casa",
                d: "Formal, direto ou mais acolhedor. Preço, regra de negócio e limite de atuação entram como parâmetro. Ela fala do jeito que o negócio pede.",
              },
              {
                icon: Database,
                color: "text-cyan-400",
                t: "Consulta na fonte",
                d: "Estoque, frete, forma de pagamento. Ela checa o dado atualizado antes de responder e monta pedido complexo sem inventar.",
              },
              {
                icon: Users,
                color: "text-zinc-200",
                t: "Chama gente quando precisa",
                d: "Tem hora que é caso para humano. Ela percebe e passa a conversa com contexto, em vez de enrolar o cliente.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2"
              >
                <c.icon className={`w-4 h-4 ${c.color}`} />
                <h4 className="text-xs font-semibold tracking-wide uppercase font-mono text-zinc-200">
                  {c.t}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
        </Rise>

        {/* Além do delivery */}
        <Rise>
        <section className="space-y-4">
          <div>
            <SectionLabel>{"// Além do delivery"}</SectionLabel>
            <h3 className="text-xl font-medium text-white tracking-tight">
              WhatsApp como canal principal
            </h3>
          </div>
          <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
              Funciona para doceria, restaurante e varejo local que recebe
              pedido o dia todo. Mas o uso não para aí.
            </p>
            <p>
              Vale para profissional liberal também. Um advogado que passa o
              dia em audiência não tem como responder dúvida repetida de
              cliente na hora, mas deixar no vácuo passa descaso. A Anne
              segura esse primeiro atendimento, responde o básico e separa o
              que é urgente de verdade.
            </p>
            <p>
              Prestador de serviço usa para triar chamado. Operação B2B usa
              para cotação e acompanhamento. Equipe interna usa para triagem
              rápida entre setores. Onde hoje tem uma caixa de entrada lotada,
              dá para colocar a Anne na frente respondendo o repetitivo.
            </p>
          </div>
        </section>
        </Rise>

        {/* Detalhe */}
        <Rise>
        <section className="space-y-4">
          <div>
            <SectionLabel>{"// Detalhe"}</SectionLabel>
            <h3 className="text-xl font-medium text-white tracking-tight">
              Para não parecer robô
            </h3>
          </div>
          <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
            <p>
              Resposta longa chega quebrada em blocos curtos, que cabem na tela
              do celular. O status de digitando aparece antes da resposta, como
              numa conversa normal. É velocidade de máquina com ritmo de
              pessoa.
            </p>
          </div>
        </section>
        </Rise>

        {/* Fechamento */}
        <Rise>
        <section className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 space-y-3">
          <h3 className="text-xs font-semibold tracking-wide uppercase font-mono text-zinc-200">
            Fechamento
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            A conta é simples. Sem espera, menos venda perdida. Com resposta
            imediata, o cliente fica. A Anne fica no WhatsApp 24 horas por dia,
            respondendo com os dados do seu negócio e passando para a equipe
            quando o assunto aperta.
          </p>
        </section>
        </Rise>

        {/* CTA fluxo */}
        <Rise>
        <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8 space-y-3">
          <h3 className="text-xl font-medium text-white tracking-tight">
            Quer ver como funciona por dentro?
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            Da mensagem que chega até a resposta na hora: o passo a passo
            visual do atendimento da Anne.
          </p>
          <Link
            href="/blog/anne-ia/workflow"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
          >
            Ver o fluxo de atendimento <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
        </Rise>
      </main>
    </div>
  );
}
