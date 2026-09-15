import React from "react";
import { Server, Brain, Database, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Engenharia & Backend",
    icon: <Server className="w-4 h-4 text-zinc-400" />,
    skills: ["Node.js", "TypeScript", "Python", "Docker", "RabbitMQ", "Redis", "REST APIs", "Microservices"],
  },
  {
    title: "Inteligência Artificial & RAG",
    icon: <Brain className="w-4 h-4 text-zinc-400" />,
    skills: ["LLM Orchestration", "RAG Systems", "pgvector", "XML Guardrails", "n8n Automation", "Multimodal Agents"],
  },
  {
    title: "Bancos de Dados & Dados",
    icon: <Database className="w-4 h-4 text-zinc-400" />,
    skills: ["PostgreSQL", "Vetores & Embeddings", "Modelagem Relacional", "Persistência Assíncrona"],
  },
  {
    title: "Frontend & Infraestrutura",
    icon: <Terminal className="w-4 h-4 text-zinc-400" />,
    skills: ["Next.js (App Router)", "React", "Tailwind CSS", "Linux / Bash", "Git", "Vercel / Cloud Deploy"],
  },
];

export const Skills = () => {
  return (
    <section className="py-14 border-t border-zinc-800/60">
      <div className="space-y-8">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
            // 04. Habilidades
          </h2>
          <h3 className="text-xl font-medium text-white tracking-tight">
            Competências Técnicas
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 space-y-3"
            >
              <div className="flex items-center gap-2">
                {cat.icon}
                <h4 className="text-sm font-medium text-zinc-200">
                  {cat.title}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/60 border border-zinc-700/40 text-zinc-300"
                  >
                    {skill}
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
