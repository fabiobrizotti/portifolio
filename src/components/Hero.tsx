import React from "react";
import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16">
      <div className="flex flex-col gap-6">
        {/* Status Pill with subtle retro pixel accent */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-300 w-fit">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-400 animate-pulse" />
          <span>Desenvolvedor Autônomo</span>
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-400">Tietê - SP, Brasil</span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Fabio Brizotti
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
            Sistemas web, automações e integrações de IA focados na operação real de empresas.
          </p>
        </div>

        {/* Quick CTA links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
          >
            <span>Ver Anne IA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <span>Minha Trajetória</span>
          </a>
        </div>
      </div>
    </section>
  );
};
