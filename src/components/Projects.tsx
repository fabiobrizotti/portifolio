"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Github, ExternalLink, Activity, ArrowUpRight, CheckCircle2, Bot, Store, Building, Wrench } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Projetos" },
    { id: "produto", label: "Produtos & IA" },
    { id: "negocio", label: "Negócios & Operações" },
    { id: "lideranca", label: "Liderança & Suporte" },
    { id: "engenharia", label: "Engenharia & Dados" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "produto":
        return <Bot className="w-3.5 h-3.5 text-ubuntu-orange" />;
      case "negocio":
        return <Store className="w-3.5 h-3.5 text-ubuntu-orangeLight" />;
      case "lideranca":
        return <Building className="w-3.5 h-3.5 text-purple-300" />;
      default:
        return <Wrench className="w-3.5 h-3.5 text-gray-300" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="3"
          tag="PRODUTOS &amp; CASOS DE SUCESSO"
          title="Produtos &amp; Sistemas"
          subtitle="Soluções de engenharia concebidas para eliminar gargalos de negócio, automatizar operações críticas e gerenciar infraestruturas."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-ubuntu-orange text-white font-semibold shadow-ubuntu-orange"
                  : "bg-white/[0.04] text-gray-400 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid (NBR 6024 Section 3.1, 3.2, 3.3, 3.4) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project, idx) => (
            <Card
              key={project.id}
              accentColor={project.category === "produto" || project.category === "negocio" ? "orange" : "aubergine"}
              className="flex flex-col justify-between p-6 sm:p-7"
            >
              <div>
                {/* Header: NBR 6024 Sub-item Number & Links */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-ubuntu-orange bg-ubuntu-orange/10 px-2 py-0.5 rounded border border-ubuntu-orange/20">
                      3.{idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      {getCategoryIcon(project.category)}
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-ubuntu-orange/40 transition-colors"
                        aria-label="Código no GitHub"
                        title="Ver Repositório"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-ubuntu-orange hover:border-ubuntu-orange/40 transition-colors"
                        aria-label="Ver Demonstração"
                        title="Ver Demonstração"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-ubuntu-orangeLight transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-ubuntu-orange mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Business Impact Pill */}
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 mb-5 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ubuntu-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block font-semibold">
                      IMPACTO &amp; RESULTADO:
                    </span>
                    <span className="text-xs text-gray-300 leading-relaxed">
                      {project.impact}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <Badge key={tIdx} variant="default" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
