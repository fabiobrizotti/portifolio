import Link from "next/link";
import { Home, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 relative overflow-hidden">
      {/* Subtle top ambient radial lighting, matching the Home page */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zinc-800/10 blur-[120px] pointer-events-none rounded-full" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 relative z-10 pt-36 pb-16 flex items-center justify-center">
        <div className="w-full max-w-md text-center space-y-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-10">
          {/* Status pill, same style as the Hero badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/90 border border-zinc-800 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#FF5500] animate-pulse" />
            <span>404 · Página não encontrada</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Destino Inexistente
            </h1>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
              A rota que você tentou acessar não foi localizada ou foi movida.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Retornar ao Início</span>
            </Link>
            <Link
              href="/#projetos"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5500] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <span>Ver Projetos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}