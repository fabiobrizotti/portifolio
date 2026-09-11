import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      {/* Subtle top ambient radial lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-zinc-800/10 blur-[120px] pointer-events-none rounded-full" />

      <Navbar />

      <main className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
