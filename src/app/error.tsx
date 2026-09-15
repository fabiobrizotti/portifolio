"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception safely without crashing the UI
    console.error("Aplicação encontrou uma exceção:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="w-full max-w-md text-center space-y-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-10">
        {/* Status pill, same style as the Hero badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5500] animate-pulse" />
          <span>Recuperação de falha</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Algo inesperado aconteceu
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
            O sistema isolou o erro para proteger sua navegação. Você pode
            recarregar o componente ou retornar ao início.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Tentar novamente</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Retornar ao Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}