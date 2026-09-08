import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { GraduationCap, School, Store, ArrowRight, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";
import { Button } from "./ui/Button";

export function About() {
  const { personal, coreValues } = portfolioData;

  const pillarIcons = [
    <Cpu key="0" className="w-4 h-4 text-ubuntu-orange" />,
    <ShieldCheck key="1" className="w-4 h-4 text-purple-300" />,
    <Zap key="2" className="w-4 h-4 text-ubuntu-orangeLight" />,
    <Layers key="3" className="w-4 h-4 text-gray-300" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="2"
          tag="TRAJETÓRIA &amp; FORMAÇÃO"
          title="Trajetória, Formação &amp; Princípios"
          subtitle="Da vivência prática de negócios à concepção de soluções de automação, engenharia de software e liderança técnica."
        />

        {/* 2.1, 2.2, 2.3 Quick Structural Cards (NBR 6024) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* 2.1 Formação Técnica */}
          <div className="p-5 rounded-xl bg-[#141622]/90 border border-white/[0.08] hover:border-ubuntu-orange/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ubuntu-orange/10 border border-ubuntu-orange/30 flex items-center justify-center text-ubuntu-orange flex-shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-ubuntu-orange font-bold block">
                  2.1 FORMAÇÃO TÉCNICA
                </span>
                <h4 className="text-sm font-bold text-white">ETEC Dr. Nelson Alves Vianna</h4>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Técnico em Desenvolvimento de Sistemas. Base sólida em modelagem de dados, algoritmos, arquitetura de sistemas e metodologias de engenharia.
            </p>
          </div>

          {/* 2.2 Liderança & Suporte */}
          <div className="p-5 rounded-xl bg-[#141622]/90 border border-white/[0.08] hover:border-ubuntu-aubergine/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ubuntu-aubergine/20 border border-ubuntu-aubergine/40 flex items-center justify-center text-purple-300 flex-shrink-0">
                <School className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-purple-300 font-bold block">
                  2.2 LIDERANÇA TÉCNICA
                </span>
                <h4 className="text-sm font-bold text-white">Aluno Monitor BEEM</h4>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Gestão de laboratórios e manutenção de redes na ETEC Tietê. Suporte a docentes e alunos, resolução de incidentes e mediação de demandas.
            </p>
          </div>

          {/* 2.3 Vivência Prática */}
          <div className="p-5 rounded-xl bg-[#141622]/90 border border-white/[0.08] hover:border-ubuntu-orange/30 transition-all duration-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-ubuntu-orange/10 border border-ubuntu-orange/30 flex items-center justify-center text-ubuntu-orange flex-shrink-0">
                <Store className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-ubuntu-orange font-bold block">
                  2.3 VIVÊNCIA PRÁTICA
                </span>
                <h4 className="text-sm font-bold text-white">Fundador B&amp;B Doceria</h4>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              9 meses de operação de confeitaria artesanal em 2024. Gestão de fluxo de caixa, precificação, atendimento e mapeamento de gargalos operacionais.
            </p>
          </div>
        </div>

        {/* Detailed Narrative & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <Card accentColor="orange" className="p-7 space-y-5">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-ubuntu-orange uppercase tracking-wider font-semibold">
                  CONTEXTO &amp; MOTIVAÇÃO
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  A Engenharia como Ferramenta de Negócio
                </h3>
              </div>

              {personal.fullBio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a href="#projects">
                  <Button variant="primary" size="sm" className="gap-2">
                    <span>Ver Soluções &amp; Produtos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="sm">
                    <span>Entrar em Contato</span>
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Core Values / 2.4 Pilares Estratégicos */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                2.4 PRINCÍPIOS DE ENGENHARIA &amp; EXECUÇÃO
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreValues.map((value, idx) => (
                <Card
                  key={idx}
                  accentColor={idx % 2 === 0 ? "orange" : "aubergine"}
                  className="p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3">
                      {pillarIcons[idx % pillarIcons.length]}
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">
                      {value.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>PILAR 2.4.{idx + 1}</span>
                    <span className="text-ubuntu-orange font-medium">VALIDADO</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
