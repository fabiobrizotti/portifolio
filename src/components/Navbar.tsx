"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "@/assets/png/perfil_icon.png";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X, Github, Linkedin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Prevent browser auto-scroll drift on mobile page reload
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", label: "Trajetória", href: "#about" },
    { num: "02", label: "Projetos", href: "#projects" },
    { num: "03", label: "Experiência", href: "#experience" },
    { num: "04", label: "Contato", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#" || href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        const navHeight = 72;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0C0D12]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm py-3"
          : "bg-[#0C0D12]/60 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => handleNavClick(e, "#top")}
          className="flex items-center gap-2.5 group text-white font-semibold text-base tracking-tight"
        >
          <div className="w-7 h-7 rounded-full overflow-hidden border border-ubuntu-orange/40 flex items-center justify-center shadow-sm group-hover:border-ubuntu-orange transition-all">
            <Image
              src={profilePic}
              alt="Fabio Brizotti"
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-mono text-sm tracking-tight text-gray-200 group-hover:text-white transition-colors">
            fabiobrizotti<span className="text-ubuntu-orange font-bold">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs text-gray-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/[0.06] transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] font-mono text-ubuntu-orange font-semibold">
                {link.num}.
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white transition-colors"
            aria-label="Menu de Navegação"
            type="button"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#10121A]/98 border-b border-white/10 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-200 hover:text-white px-3.5 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors flex items-center gap-2.5"
              >
                <span className="text-xs font-mono text-ubuntu-orange font-bold">
                  {link.num}.
                </span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-3">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white bg-white/[0.04] border border-white/5 text-xs font-mono transition-colors"
            >
              <Github className="w-4 h-4 text-ubuntu-orange" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-gray-300 hover:text-white bg-white/[0.04] border border-white/5 text-xs font-mono transition-colors"
            >
              <Linkedin className="w-4 h-4 text-purple-300" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
