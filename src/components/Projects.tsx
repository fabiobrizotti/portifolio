import React from "react";
import { ShieldCheck, Cpu, Network, Layers, Sparkles } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projetos" className="py-14 border-t border-zinc-800/60">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // 03. Trabalho & Engenharia
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Projeto em Destaque
          </h3>
        </div>

        {/* Flagship Project: Anne IA */}
        <div className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Flagship Project</span>
              </div>
              <h4 className="text-2xl font-semibold text-white tracking-tight">
                Anne IA — Plataforma de Atendimento Inteligente Multimodal
              </h4>
            </div>
          </div>

          {/* Description & Objective */}
          <p className="text-sm text-zinc-300 leading-relaxed">
            Plataforma self-hosted que automatiza o atendimento comercial no WhatsApp usando IA multimodal. Nasceu da necessidade real da B&B Doceria e hoje roda com 5 microsserviços em Docker.
          </p>

          {/* 4 Architectural Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Pillar 1 */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <Layers className="w-4 h-4 text-emerald-400" />
                <h5 className="text-xs font-semibold tracking-wide uppercase font-mono">
                  Soberania Tecnológica
                </h5>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Tudo roda em Docker com n8n self-hosted. Sem depender de serviços externos.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <Network className="w-4 h-4 text-cyan-400" />
                <h5 className="text-xs font-semibold tracking-wide uppercase font-mono">
                  Resiliência a Picos de Tráfego
                </h5>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                RabbitMQ e Redis garantem que nenhuma mensagem se perca, mesmo com muitos acessos ao mesmo tempo.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <h5 className="text-xs font-semibold tracking-wide uppercase font-mono">
                  Segurança Cognitiva (Guardrails)
                </h5>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Guardrails em XML bloqueiam Prompt Injection. O RAG com pgvector garante respostas baseadas no catálogo real do negócio.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2">
              <div className="flex items-center gap-2 text-zinc-200">
                <Cpu className="w-4 h-4 text-purple-400" />
                <h5 className="text-xs font-semibold tracking-wide uppercase font-mono">
                  Eficiência Operacional & LGPD
                </h5>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Responde áudio, imagem e texto direto no WhatsApp. Um mecanismo de limpeza automática descarta dados a cada 24h, em conformidade com a LGPD.
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 font-mono mr-1">Stack:</span>
            {[
              "Docker",
              "n8n Self-Hosted",
              "RabbitMQ",
              "Redis",
              "PostgreSQL",
              "pgvector",
              "LLMs Multimodal",
              "XML Guardrails",
              "WhatsApp Business API",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800/50 border border-zinc-700/50 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
