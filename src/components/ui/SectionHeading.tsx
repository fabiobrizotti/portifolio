import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  sectionNumber?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  sectionNumber,
  tag,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      <div className={cn("mb-2.5 flex items-center gap-2", align === "center" && "justify-center")}>
        {sectionNumber && (
          <span className="text-xs font-mono font-bold text-ubuntu-orange px-2 py-0.5 rounded bg-ubuntu-orange/10 border border-ubuntu-orange/20">
            {sectionNumber}
          </span>
        )}
        {tag && (
          <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
            {tag}
          </span>
        )}
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
