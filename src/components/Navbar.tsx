"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

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
          className="order-1 flex items-center gap-2 group text-sm font-medium tracking-tight text-zinc-200 hover:text-white transition-colors"
        >
          {/* Subtle pixel status dot */}
          <span className="w-2 h-2 rounded-[1px] bg-emerald-500 inline-block shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          <span>fabiobrizotti</span>
          <span className="text-xs text-zinc-400 font-mono">/dev</span>
        </Link>

        <nav className="hidden sm:flex sm:order-2 items-center gap-6 text-xs font-medium text-zinc-400">
          <Link href="/#sobre" className="hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Sobre
          </Link>
          <Link href="/#experiencia" className="hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Experiência
          </Link>
          <Link href="/#projetos" className="hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Projetos
          </Link>
          <Link href="/blog" className="hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Blog
          </Link>
          <Link href="/#contato" className="hover:text-zinc-100 transition-colors duration-300 ease-in-out">
            Contato
          </Link>
        </nav>

        {/* Mobile hamburger (right) */}
        <button
          className="order-3 sm:hidden p-1.5 text-zinc-400 hover:text-white transition-colors duration-300 ease-in-out rounded-md hover:bg-white/5"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="order-2 mx-auto flex items-center gap-3 sm:order-3 sm:mx-0">
          <a
            href="https://github.com/fabiobrizotti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors duration-300 ease-in-out rounded-md hover:bg-white/5"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/fabiobrizotti/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors duration-300 ease-in-out rounded-md hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:fabio.brizottilab@gmail.com"
            className="p-1.5 text-zinc-400 hover:text-white transition-colors duration-300 ease-in-out rounded-md hover:bg-white/5"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-white/5 py-3 px-6 bg-[#090a0f]/80 backdrop-blur-md">
          <nav className="flex flex-col gap-3 text-xs font-medium text-zinc-400">
            <Link
              href="/#sobre"
              className="hover:text-zinc-100 transition-colors duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Sobre
            </Link>
            <Link
              href="/#experiencia"
              className="hover:text-zinc-100 transition-colors duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Experiência
            </Link>
            <Link
              href="/#projetos"
              className="hover:text-zinc-100 transition-colors duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Projetos
            </Link>
            <Link
              href="/blog"
              className="hover:text-zinc-100 transition-colors duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              href="/#contato"
              className="hover:text-zinc-100 transition-colors duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
