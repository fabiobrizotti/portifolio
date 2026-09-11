import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabio Brizotti | Desenvolvedor Autônomo & Engenheiro de Software",
  description: "Portfólio de Engenharia de Software, Arquitetura de Sistemas e Inteligência Artificial por Fabio Brizotti.",
  keywords: [
    "Fabio Brizotti",
    "Desenvolvedor Autônomo",
    "Engenharia de Software",
    "Anne IA",
    "Next.js",
    "TypeScript",
    "RabbitMQ",
    "Arquitetura de Software",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-[#090a0f] text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
