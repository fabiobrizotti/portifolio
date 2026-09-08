import React from "react";
import Image from "next/image";
import profilePic from "@/assets/png/perfil_icon.png";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "./ui/Button";
import { ArrowUpRight, ArrowRight, Store, Bot, Award, CheckCircle2, Building, Layers } from "lucide-react";

export function Hero() {
  const { personal, metrics } = portfolioData;

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Value Proposition & Executive Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Profile Avatar + Availability Status & Domain Badge */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-ubuntu-orange/50 p-0.5 bg-gradient-to-tr from-ubuntu-orange/30 to-ubuntu-aubergine/30 shadow-ubuntu-orange">
                  <Image
                    src={profilePic}
                    alt={personal.fullName}
                    priority
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0C0D12]" title="Disponível" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                <span className="w-2 h-2 rounded-full bg-ubuntu-orange animate-pulse" />
                <span className="text-xs font-mono text-ubuntu-orange font-semibold">
                  fabiobrizotti.dev
                </span>
                <span className="text-gray-600">·</span>
                <span className="text-xs font-medium text-gray-300">
                  {personal.availabilityStatus}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Olá, eu sou <span className="text-gradient-orange">{personal.name}</span>.
              <br />
              <span className="text-gray-300 text-xl sm:text-2xl md:text-3xl font-semibold">
                {personal.role}
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8">
              {personal.headline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a href="#about">
                <Button variant="primary" size="lg" className="gap-2">
                  <span>Conhecer Trajetória</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#projects">
                <Button variant="outline" size="lg" className="gap-2">
                  <span>Ver Projetos &amp; Produtos</span>
                </Button>
              </a>
            </div>

            {/* Executive Impact Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-white/10">
              {metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs font-medium text-gray-400 mt-0.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Strategic Pillars / Executive Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-[#141622]/90 border border-white/10 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle inner warm glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-ubuntu-orange/10 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ubuntu-orange font-bold block mb-1">
                    1.1 VISÃO GERAL
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Pilares de Atuação &amp; Engenharia
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-ubuntu-orange/10 border border-ubuntu-orange/30 flex items-center justify-center text-ubuntu-orange flex-shrink-0 mt-0.5">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Visão de Negócio Prática</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                        Fundação da B&amp;B Doceria: gestão de operações, controle de fluxo e identificação de gargalos reais.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-ubuntu-aubergine/20 border border-ubuntu-aubergine/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Criação de Produtos &amp; IA</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                        Criador da Anne IA: automação inteligente no WhatsApp com mensageria e RAG sem perda de pedidos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 flex-shrink-0 mt-0.5">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Liderança &amp; Suporte Técnico</h4>
                      <p className="text-xs text-gray-400 leading-relaxed mt-0.5">
                        Monitoria BEEM na ETEC Tietê: manutenção de infraestrutura, redes e suporte a alunos e professores.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400 border-t border-white/5 font-mono">
                  <span>DISPONIBILIDADE</span>
                  <span className="text-ubuntu-orange font-semibold">PRESENCIAL &amp; REMOTO</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
