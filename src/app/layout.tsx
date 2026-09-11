import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Fabio Brizotti | Desenvolvedor Full Stack & Especialista em IA",
  description: "Portfólio de Fabio Brizotti - Desenvolvedor Full Stack especializado em IA, automações e arquitetura de software de alta performance.",
  verification: {
    google: [
      "zgtuckQnwXfJg3u7HpQdnOFRKnPWvJKI-EZaGwkDPac",
      "R8CwfbhssxGCNOdX9iQN2Wkcn-lKtRKjZIDgA1qH2GM",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="zgtuckQnwXfJg3u7HpQdnOFRKnPWvJKI-EZaGwkDPac" />
        <meta name="google-site-verification" content="R8CwfbhssxGCNOdX9iQN2Wkcn-lKtRKjZIDgA1qH2GM" />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
