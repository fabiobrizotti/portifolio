import { Navbar } from "@/components/Navbar";
import { BlogCard } from "@/components/BlogCard";

export const metadata = {
  title: "Blog | Fabio Brizotti",
  description:
    "Notas de engenharia sobre inteligência artificial, automação no WhatsApp, n8n e IA aplicada: arquitetura, automações e atendimento inteligente.",
  keywords: [
    "blog engenharia de software",
    "inteligência artificial",
    "automação WhatsApp",
    "n8n",
    "IA aplicada",
    "atendimento automatizado",
  ],
  alternates: { canonical: "https://fabiobrizotti.vercel.app/blog" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fabiobrizotti.vercel.app/blog",
    title: "Blog | Fabio Brizotti",
    description:
      "Notas de engenharia sobre inteligência artificial, automação no WhatsApp, n8n e IA aplicada.",
    siteName: "Fabio Brizotti",
  },
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zinc-800/10 blur-[120px] pointer-events-none rounded-full" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 relative z-10 pt-32 pb-16 space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            {"// Blog"}
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Notas de engenharia
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mt-2 max-w-2xl">
            Análises técnicas tiradas do campo: o que foi mantido, o que precisa
            de conserto e o veredito sem rodeio.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <BlogCard
            href="/blog/anne-ia"
            badge="Anne IA"
            title="Anne IA: o fim do vácuo no WhatsApp"
            description="Cinco minutos sem resposta custam a venda. Como a Anne atende na hora, com o tom da sua empresa, e segura o cliente até o fim."
            tags={["WhatsApp", "n8n", "Atendimento"]}
          />
        </div>
      </main>
    </div>
  );
}
// ponytail: coluna única com 1 post (regra bento N→N, sem célula vazia); md:grid-cols-2 quando chegar o 2º.
