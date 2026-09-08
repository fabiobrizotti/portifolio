import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0A0B10] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Brand & Domain */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a
              href="#"
              className="flex items-center gap-2 text-white font-semibold text-sm tracking-tight group"
            >
              <div className="w-6 h-6 rounded-md bg-ubuntu-orange/15 border border-ubuntu-orange/40 flex items-center justify-center text-ubuntu-orange font-mono font-bold text-xs group-hover:bg-ubuntu-orange group-hover:text-white transition-all">
                FB
              </div>
              <span className="font-mono text-sm tracking-tight text-gray-200 group-hover:text-white transition-colors">
                fabiobrizotti<span className="text-ubuntu-orange font-bold">.dev</span>
              </span>
            </a>

            <div className="hidden sm:block text-gray-700">|</div>

            <div className="text-xs text-gray-400 font-mono">
              {portfolioData.personal.fullName}
            </div>
          </div>

          {/* Right: Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-400">
              &copy; {currentYear} fabiobrizotti.dev
            </span>

            <a
              href="#"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-ubuntu-orange/40 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
