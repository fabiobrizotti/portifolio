"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowUpRight, CircleDot, GitBranch, Layers3, Sparkles, Workflow } from "lucide-react";
import { useRef } from "react";

const chapters = [
  { id: "origem", number: "01", label: "A origem", icon: CircleDot, title: "Antes de ser produto, foi pergunta.", text: "A inteligência artificial começa com uma provocação simples: máquinas podem aprender padrões e tomar decisões? Da lógica simbólica aos primeiros experimentos, a ideia sempre foi ampliar o que uma mente humana consegue explorar." },
  { id: "aprendizado", number: "02", label: "O aprendizado", icon: Layers3, title: "Modelos não pensam. Eles encontram relações.", text: "Um modelo observa exemplos, ajusta seus parâmetros e transforma contexto em probabilidade. O resultado parece mágico porque bilhões de pequenas relações acontecem em milissegundos — mas o mecanismo é iteração, escala e feedback." },
  { id: "interface", number: "03", label: "A interface", icon: Workflow, title: "Quando a ferramenta começa a conversar.", text: "A virada não foi apenas técnica. Interfaces conversacionais tornaram uma infraestrutura complexa acessível a qualquer pessoa. O prompt virou uma nova camada entre intenção e software." },
  { id: "agentes", number: "04", label: "Os agentes", icon: GitBranch, title: "Do responder ao fazer.", text: "Agentes conectam modelos a ferramentas, memória e objetivos. Eles observam um estado, escolhem um próximo passo e aprendem com o resultado — aproximando software de um colaborador que executa junto." },
];

export function AIChangelog() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main ref={ref} className="min-h-screen overflow-hidden bg-[#08090d] text-zinc-100 selection:bg-indigo-300/30">
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-indigo-300 via-violet-300 to-emerald-300" />
      <div className="pointer-events-none fixed inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <header className="flex items-center justify-between py-7">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"><ArrowLeft className="size-4" /> /blog</Link>
          <span className="font-mono text-xs text-zinc-600">AI / 001</span>
        </header>

        <section className="relative flex min-h-[88vh] flex-col justify-center py-24">
          <div className="absolute right-0 top-24 hidden size-72 rounded-full border border-indigo-300/10 lg:block"><div className="absolute inset-12 rounded-full border border-violet-300/10" /><div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200 shadow-[0_0_30px_10px_rgba(165,180,252,0.35)]" /></div>
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-indigo-200"><Sparkles className="size-4" /> uma linha do tempo aberta</p>
          <h1 className="max-w-4xl text-6xl font-semibold tracking-[-0.07em] text-white sm:text-8xl">Inteligência<br /><span className="text-zinc-500">Artificial.</span></h1>
          <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">Um mapa mental sobre a criação, o funcionamento e o futuro de sistemas que aprendem com o mundo.</p>
          <a href="#origem" className="mt-14 flex w-fit items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="flex size-10 items-center justify-center rounded-full border border-white/15"><ArrowDown className="size-4" /></span> começar a percorrer</a>
        </section>

        <section className="grid border-t border-white/[0.08] py-16 md:grid-cols-[180px_1fr] md:gap-16">
          <aside className="mb-12 md:mb-0"><p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">navegação</p><div className="mt-6 hidden flex-col gap-4 md:flex">{chapters.map((chapter) => <a key={chapter.id} href={`#${chapter.id}`} className="font-mono text-xs text-zinc-500 transition hover:text-indigo-200">{chapter.number} / {chapter.label}</a>)}</div></aside>
          <div className="relative">
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-indigo-300/50 via-violet-300/30 to-transparent" />
            <div className="flex flex-col gap-28 pl-10 sm:gap-40 sm:pl-16">
              {chapters.map((chapter, index) => {
                const Icon = chapter.icon;
                return <motion.article key={chapter.id} id={chapter.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.05 }} className="relative scroll-mt-20">
                  <div className="absolute -left-[43px] top-0 flex size-4 items-center justify-center rounded-full border border-indigo-200/60 bg-[#08090d] sm:-left-[69px]"><div className="size-1.5 rounded-full bg-indigo-200" /></div>
                  <div className="mb-6 flex items-center gap-3 font-mono text-xs text-indigo-200/70"><Icon className="size-4" /> {chapter.number} · {chapter.label}</div>
                  <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">{chapter.title}</h2>
                  <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">{chapter.text}</p>
                  {index < chapters.length - 1 && <div className="mt-12 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600"><span className="h-px w-10 bg-white/10" /> próxima camada</div>}
                </motion.article>;
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.08] py-28 text-center"><p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/70">continua em construção</p><h2 className="mx-auto mt-6 max-w-2xl text-4xl font-medium tracking-[-0.05em] text-white sm:text-6xl">O mapa ainda está se formando.</h2><p className="mx-auto mt-6 max-w-lg leading-7 text-zinc-400">Cada nova pergunta abre um caminho. Este é apenas o primeiro rascunho.</p><Link href="/blog" className="mt-10 inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white">voltar às coleções <ArrowUpRight className="size-4" /></Link></section>
      </div>
    </main>
  );
}
