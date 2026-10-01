import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

const posts = [
  {
    slug: "ai",
    eyebrow: "Mapa de ideias · 01",
    title: "Inteligência Artificial",
    description: "Uma linha do tempo visual para entender de onde a IA veio, como ela funciona e para onde está indo.",
    tone: "from-violet-500/20 via-indigo-500/10 to-transparent",
    icon: Sparkles,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090a0f] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.18),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between border-b border-white/[0.08] pb-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white">
            <span className="size-2 rounded-[2px] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
            fabiobrizotti <span className="font-mono text-xs text-zinc-500">/blog</span>
          </Link>
          <span className="font-mono text-xs text-zinc-500">ideias em construção</span>
        </header>

        <section className="grid min-h-[72vh] items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-indigo-300">/blog · arquivo vivo</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">
              Pensamentos que ganham forma enquanto você rola.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              Um espaço para conectar tecnologia, criação e as perguntas que ficam entre uma ideia e outra.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm text-zinc-500">
              <BookOpen className="size-4 text-indigo-300" />
              <span>1 coleção · leitura guiada</span>
            </div>
          </div>
          <div className="relative hidden aspect-square max-w-md justify-self-end rounded-full border border-white/[0.08] bg-white/[0.02] lg:flex">
            <div className="absolute inset-12 rounded-full border border-indigo-300/20" />
            <div className="absolute inset-24 rounded-full border border-indigo-300/20" />
            <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300 shadow-[0_0_40px_12px_rgba(165,180,252,0.25)]" />
            <span className="absolute left-[15%] top-[35%] font-mono text-[10px] text-zinc-600">curiosidade</span>
            <span className="absolute bottom-[25%] right-[12%] font-mono text-[10px] text-zinc-600">contexto</span>
          </div>
        </section>

        <section className="border-t border-white/[0.08] py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs text-zinc-500">coleções disponíveis</p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight">Escolha um caminho</h2>
            </div>
            <span className="font-mono text-xs text-zinc-600">01 / 01</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {posts.map(({ slug, eyebrow, title, description, tone, icon: Icon }) => (
              <Link key={slug} href={`/blog/${slug}`} className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-indigo-300/40 hover:bg-white/[0.05]">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone} opacity-70 transition duration-500 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-16 flex items-center justify-between">
                    <span className="font-mono text-xs text-indigo-200/80">{eyebrow}</span>
                    <ArrowUpRight className="size-5 text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <Icon className="mb-5 size-6 text-indigo-200" />
                  <h3 className="text-2xl font-medium tracking-tight text-white">{title}</h3>
                  <p className="mt-3 max-w-md leading-7 text-zinc-400">{description}</p>
                  <p className="mt-8 font-mono text-xs text-zinc-500">abrir mapa →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export const metadata = {
  title: "Blog | Fabio Brizotti",
  description: "Coleções e mapas mentais sobre tecnologia, criação e inteligência artificial.",
};

