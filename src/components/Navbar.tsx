"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#090a0f]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group text-sm font-medium tracking-tight text-zinc-200 hover:text-white transition-colors"
        >
          {/* Subtle pixel status dot */}
          <span className="w-2 h-2 rounded-[1px] bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span>fabiobrizotti</span>
          <span className="text-xs text-zinc-500 font-mono">/dev</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
          <a href="#sobre" className="hover:text-zinc-100 transition-colors">
            Sobre
          </a>
          <a href="#experiencia" className="hover:text-zinc-100 transition-colors">
            Experiência
          </a>
          <a href="#projetos" className="hover:text-zinc-100 transition-colors">
            Projetos
          </a>
          <a href="#contato" className="hover:text-zinc-100 transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/fabiobrizotti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabiobrizotti/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:fabio.brizottilab@gmail.com"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
