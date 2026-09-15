import React from "react";
import { GraduationCap, Store, Code2, Compass } from "lucide-react";

export const About = () => {
  return (
    <section id="sobre" className="py-14 border-t border-zinc-800/60">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // 01. Trajetória
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Sobre mim
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Childhood & Foundations */}
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-medium text-zinc-200">
              Início Precoce & Curiosidade
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Aos 7 anos, mexi em scripts de games e desbloqueei um Android sozinho. Foi aí que entendi que dava pra modificar sistemas.
            </p>
          </div>

          {/* Entrepreneurship & First Bottleneck */}
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
              <Store className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-medium text-zinc-200">
              B&B Doceria (2025)
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Fundei a B&B Doceria e a gerenciei durante 9 meses. Nessa vivência prática, controlando estoque, calculando marcação de preços e atendendo clientes pelo WhatsApp, identifiquei um gargalo operacional crítico: o tempo gasto com atendimento manual competia diretamente com a produção.
            </p>
          </div>

          {/* Academic Formation */}
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-medium text-zinc-200">
              Formação Técnica & BEEM
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Técnico em Desenvolvimento de Sistemas pela ETEC Dr. Nelson Alves Vianna (Tietê - SP) e Ensino Médio na EE Plínio Rodrigues de Morais. Atuo como Aluno Monitor no programa BEEM, prestando suporte técnico em laboratórios, redes e orientando estudantes e professores na resolução de problemas de TI.
            </p>
          </div>

          {/* Vision & Autonomy */}
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-800/70 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
              <Code2 className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-medium text-zinc-200">
              Engenharia Orientada a Problemas Reais
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              A B&B Doceria foi o ponto de partida. A partir daí, comecei a estudar arquitetura de sistemas e IA para resolver problemas reais de negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
