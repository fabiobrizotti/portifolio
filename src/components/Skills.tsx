import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { TrendingUp, Bot, Code2, Network } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = [
    <TrendingUp key="0" className="w-5 h-5 text-ubuntu-orange" />,
    <Bot key="1" className="w-5 h-5 text-purple-300" />,
    <Code2 key="2" className="w-5 h-5 text-ubuntu-orangeLight" />,
    <Network key="3" className="w-5 h-5 text-gray-300" />,
  ];

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case "Especialista":
        return "orange";
      case "Avançado":
        return "aubergine";
      default:
        return "default";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="4"
          tag="MATRIZ DE COMPETÊNCIAS"
          title="Competências Estratégicas &amp; Tecnológicas"
          subtitle="Domínio integrado entre visão de negócios e produtos, automação com IA, desenvolvimento fullstack e gestão de infraestrutura."
        />

        {/* 4.1, 4.2, 4.3, 4.4 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category, idx) => (
            <Card
              key={idx}
              accentColor={idx % 2 === 0 ? "orange" : "aubergine"}
              className="p-6 sm:p-7"
            >
              {/* Category Header with NBR 6024 Numbering */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                  {categoryIcons[idx % categoryIcons.length]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-ubuntu-orange">
                      4.{idx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 mt-0.5 block">
                    {category.skills.length} COMPETÊNCIAS CONSOLIDADAS
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-ubuntu-orange" />
                      <span className="text-sm text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>

                    <Badge
                      variant={getLevelBadgeVariant(skill.level)}
                      size="sm"
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
