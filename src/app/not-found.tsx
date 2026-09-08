import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#141622]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ubuntu-orange/10 border border-ubuntu-orange/30 text-ubuntu-orange font-mono text-xs font-bold">
          404 · PÁGINA NÃO ENCONTRADA
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Destino Inexistente
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            A rota que você tentou acessar não foi localizada ou foi movida.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ubuntu-orange hover:bg-ubuntu-orangeLight text-white text-xs font-mono font-semibold transition-all shadow-ubuntu-orange"
          >
            <Home className="w-4 h-4" />
            <span>Retornar ao Início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
