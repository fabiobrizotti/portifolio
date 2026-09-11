import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const baseUrl = "https://fabiobrizotti.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Fabio Brizotti | Desenvolvedor Full Stack & IA",
  description: "Portfólio de Fabio Brizotti: Desenvolvedor Full Stack focado em Inteligência Artificial, automações e software moderno.",
  keywords: [
    "Fabio Brizotti",
    "Desenvolvedor Full Stack",
    "Especialista em IA",
    "Engenheiro de Software",
    "Inteligência Artificial",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Automações",
  ],
  authors: [{ name: "Fabio Brizotti", url: baseUrl }],
  creator: "Fabio Brizotti",
  publisher: "Fabio Brizotti",
  alternates: {
    canonical: baseUrl,
    languages: {
      "pt-BR": baseUrl,
      "x-default": baseUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Fabio Brizotti | Desenvolvedor Full Stack & IA",
    description: "Portfólio de Fabio Brizotti: Desenvolvedor Full Stack focado em Inteligência Artificial, automações e software moderno.",
    siteName: "Fabio Brizotti",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fabio Brizotti | Desenvolvedor Full Stack & IA",
    description: "Portfólio de Fabio Brizotti: Desenvolvedor Full Stack focado em Inteligência Artificial, automações e software moderno.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: [
      "zgtuckQnwXfJg3u7HpQdnOFRKnPWvJKI-EZaGwkDPac",
      "R8CwfbhssxGCNOdX9iQN2Wkcn-lKtRKjZIDgA1qH2GM",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Fabio Brizotti",
      url: baseUrl,
      jobTitle: "Desenvolvedor Full Stack & Especialista em IA",
      description: "Desenvolvedor Full Stack focado em Inteligência Artificial, automações e arquitetura de software moderno.",
      sameAs: [
        "https://github.com/fabiobrizotti",
        "https://linkedin.com/in/fabiobrizotti",
      ],
      knowsAbout: [
        "Full Stack Development",
        "Artificial Intelligence",
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Automações",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Fabio Brizotti - Portfólio",
      publisher: {
        "@id": `${baseUrl}/#person`,
      },
      inLanguage: "pt-BR",
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
