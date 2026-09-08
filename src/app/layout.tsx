import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "fabiobrizotti.dev | Fabio Brizotti — Engenharia, Produtos & Automação com IA",
  description: "Portfólio profissional de Fabio Luis Brizotti Filho (fabiobrizotti.dev). Desenvolvedor de Sistemas, criador da Anne IA, fundador da B&B Doceria e monitor do programa BEEM.",
  keywords: [
    "fabiobrizotti.dev",
    "Fabio Brizotti",
    "Fabio Luis Brizotti Filho",
    "Engenharia de Software",
    "Empreendedorismo em Tecnologia",
    "Desenvolvimento de Sistemas",
    "Automação Comercial",
    "Anne IA",
    "B&B Doceria",
    "ETEC Dr. Nelson Alves Vianna",
    "Programa BEEM",
    "Gestão de Produtos",
    "Inteligência Artificial Aplicada",
    "Arquitetura de Microsserviços"
  ],
  authors: [{ name: "Fabio Luis Brizotti Filho", url: "https://fabiobrizotti.dev" }],
  creator: "Fabio Luis Brizotti Filho",
  metadataBase: new URL("https://fabiobrizotti.dev"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fabiobrizotti.dev",
    title: "fabiobrizotti.dev | Fabio Brizotti — Engenharia & Produtos",
    description: "Transformando problemas reais de negócios em produtos digitais, automações inteligentes e arquiteturas escaláveis.",
    siteName: "fabiobrizotti.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "fabiobrizotti.dev | Fabio Brizotti — Engenharia & Produtos",
    description: "Transformando problemas reais de negócios em produtos digitais, automações inteligentes e arquiteturas escaláveis.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[#0C0D12] text-foreground antialiased selection:bg-ubuntu-orange selection:text-white bg-subtle-grid relative">
        {/* Subtle Ambient Background Lighting */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-ubuntu-orange/10 blur-[130px] rounded-full" />
          <div className="absolute top-[40%] -left-32 w-[500px] h-[400px] bg-ubuntu-aubergine/10 blur-[140px] rounded-full" />
          <div className="absolute top-[70%] -right-32 w-[500px] h-[400px] bg-ubuntu-orange/5 blur-[140px] rounded-full" />
        </div>

        {/* Main Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
