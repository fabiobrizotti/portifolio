"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Mail, Copy, Check, Github, Linkedin, Send, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          sectionNumber="5"
          tag="COMUNICAÇÃO DIRETA &amp; CONTATO"
          title="Vamos Iniciar uma Conversa?"
          subtitle="Aberto para discutir oportunidades em desenvolvimento de software, criação de novos produtos, automação inteligente e consultoria técnica."
          align="center"
        />

        <Card accentColor="orange" className="p-8 md:p-12 text-center relative overflow-hidden">
          {/* Ambient inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-ubuntu-orange/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-xl bg-ubuntu-orange/10 border border-ubuntu-orange/30 flex items-center justify-center text-ubuntu-orange shadow-ubuntu-orange">
              <Mail className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-ubuntu-orange uppercase tracking-wider">
                5.1 CANAL DIRETO
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Fale Diretamente Comigo
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Interessado em soluções eficientes de software, parcerias ou novos desafios profissionais? Envie uma mensagem.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-gray-300 font-mono text-xs sm:text-sm px-2">
                <span className="text-ubuntu-orange font-semibold">email:</span>
                <span className="text-white font-medium select-all">{personal.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white border border-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-ubuntu-orangeLight" />
                      <span className="text-ubuntu-orangeLight font-medium">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 sm:flex-initial"
                >
                  <Button variant="primary" size="sm" className="w-full gap-1.5">
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Email</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Location & Details */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-ubuntu-orange" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ubuntu-orange animate-pulse" />
                <span>Disponível para presencial &amp; remoto</span>
              </div>
            </div>

            {/* Social Links (NBR 6023 References) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-ubuntu-orange/40 transition-all font-mono text-xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-gray-500" />
              </a>

              <a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-ubuntu-orange/40 transition-all font-mono text-xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-gray-500" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
