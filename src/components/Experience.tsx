import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "2026 — Presente",
    role: "Aluno monitor",
    company: "Programa BEEM",
    description:
      "Suporte técnico em laboratórios de informática e redes. Orientação a estudantes e professores no dia a dia de TI.",
    tags: ["Suporte Técnico", "Redes", "Hardware & Labs", "Atendimento"],
  },
  {
    period: "2025",
    role: "Desenvolvedor autônomo & ex-fundador",
    company: "B&B Doceria",
    description:
      "Gestão de operação e comércio durante 9 meses. Controle de estoque, precificação por markup e atendimento pelo WhatsApp. Essa vivência gerou os requisitos da Anne IA.",
    tags: ["Gestão de Negócio", "Automações", "Operações", "Arquitetura de Soluções"],
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-14 border-t border-zinc-800/60">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
            // 02. Carreira
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Experiência
          </h3>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 transition-all hover:border-zinc-700/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h4 className="text-base font-medium text-zinc-100">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  {exp.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/60 border border-zinc-700/40 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
