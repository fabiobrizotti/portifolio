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
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#141622]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs font-bold">
          RECUPERAÇÃO DE FALHA
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            Algo inesperado aconteceu
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            O sistema isolou o erro para proteger sua navegação. Você pode tentar recarregar o componente ou retornar ao início.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-ubuntu-orange hover:bg-ubuntu-orangeLight text-white text-xs font-mono font-semibold transition-all shadow-ubuntu-orange"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Tentar Novamente</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white text-xs font-mono font-semibold transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
