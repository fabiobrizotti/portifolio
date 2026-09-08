import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="4"
          tag="HISTÓRICO PROFISSIONAL &amp; GESTÃO"
          title="Experiência Profissional &amp; Gestão"
          subtitle="Atuação prática em criação de produtos, liderança e monitoria de suporte técnico e fundação de empreendimento comercial."
        />

        <div className="relative border-l border-white/10 ml-4 md:ml-36 space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0C0D12] border-2 border-ubuntu-orange flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-ubuntu-orange" />
              </div>

              {/* Period indicator for Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 w-28 text-right">
                <span className="text-xs font-mono text-gray-400 font-semibold">
                  {exp.period}
                </span>
              </div>

              <Card
                accentColor={idx % 2 === 0 ? "orange" : "aubergine"}
                className="p-6 sm:p-7"
              >
                {/* Mobile Period Tag */}
                <div className="md:hidden flex items-center gap-1.5 text-xs font-mono text-ubuntu-orange mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>

                {/* Role, Section Number & Company */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-ubuntu-orange bg-ubuntu-orange/10 px-2 py-0.5 rounded border border-ubuntu-orange/20">
                      4.{idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-gray-300 px-2.5 py-1 rounded bg-white/[0.03] border border-white/10">
                    <Briefcase className="w-3.5 h-3.5 text-ubuntu-orange" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-ubuntu-orange flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {exp.techStack.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="default" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
