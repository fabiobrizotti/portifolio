import React from "react";
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-14 border-t border-zinc-800/60">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // 05. Conexão
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Contato & Redes
          </h3>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-6">
          <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
            Aberto para projetos de automação, sistemas com IA e qualquer conversa técnica sobre software.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href="mailto:fabio.brizottilab@gmail.com"
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 text-zinc-200 hover:text-white hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Email</div>
                  <div className="text-xs font-medium text-zinc-200">fabio.brizottilab@gmail.com</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://github.com/fabiobrizotti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 text-zinc-200 hover:text-white hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">GitHub</div>
                  <div className="text-xs font-medium text-zinc-200">github.com/fabiobrizotti</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/fabiobrizotti/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 text-zinc-200 hover:text-white hover:border-zinc-700 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">LinkedIn</div>
                  <div className="text-xs font-medium text-zinc-200">Fabio Brizotti</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/70 text-zinc-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Status</div>
                  <div className="text-xs font-medium text-emerald-400">Disponível para projetos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <nav aria-label="Navegação secundária" className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mb-8 border-t border-slate-800/80 pt-8">
          <a href="#sobre" className="hover:text-[#FF5500] transition-colors">Sobre</a>
          <a href="#experiencia" className="hover:text-[#FF5500] transition-colors">Experiência</a>
          <a href="#projetos" className="hover:text-[#FF5500] transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-[#FF5500] transition-colors">Contato</a>
        </nav>

        <footer className="pt-8 pb-12 text-center text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Fabio Brizotti. Construído com Next.js & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};
