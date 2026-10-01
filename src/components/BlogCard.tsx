import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BlogCardProps {
  href: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

// Wrapper sobre Card + Badge do shadcn (estilo Nova). A superfície preserva
// o Craft Dark da marca; os tokens do shadcn ficam só na estrutura.
// ponytail: hover é CSS puro; física magnética exigiria leaf "use client" com Motion.
export function BlogCard({ href, badge, title, description, tags }: BlogCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
    >
      <Card
        className={cn(
          "blog-card border bg-zinc-900/50 border-zinc-800/80 rounded-2xl p-6 sm:p-8 gap-4 ring-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:-translate-y-1 group-hover:border-zinc-700 group-hover:shadow-[0_8px_30px_-12px_rgba(16,185,129,0.25)]",
          "group-focus-visible:-translate-y-1 group-focus-visible:border-zinc-700",
          "group-active:scale-[0.99]"
        )}
      >
        <CardHeader className="px-0">
          <Badge className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[11px]">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {badge}
          </Badge>
          <CardTitle className="text-2xl font-semibold tracking-tight text-white pt-2">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-zinc-300 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 font-mono text-[11px]"
              >
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-0 pb-0 rounded-b-none border-t border-zinc-800/60 bg-transparent pt-4">
          <span className="inline-flex items-center gap-1 text-xs text-zinc-300">
            Ler análise
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
