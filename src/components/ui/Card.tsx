import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accentColor?: "orange" | "aubergine" | "none";
}

export function Card({
  className,
  accentColor = "orange",
  children,
  ...props
}: CardProps) {
  const accentStyles = {
    none: "border-white/10 hover:border-white/20",
    orange: "border-white/[0.08] hover:border-ubuntu-orange/40 hover:bg-[#181A28]",
    aubergine: "border-white/[0.08] hover:border-ubuntu-aubergine/40 hover:bg-[#181A28]",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl bg-[#141622]/80 backdrop-blur-md border p-6 transition-all duration-200 group",
        accentStyles[accentColor],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
