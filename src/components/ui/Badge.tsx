import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "orange" | "aubergine" | "default" | "outline" | "subtle";
  size?: "sm" | "md";
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-white/[0.04] text-gray-300 border-white/10 hover:border-white/20",
    orange: "bg-ubuntu-orange/10 text-ubuntu-orangeLight border-ubuntu-orange/30",
    aubergine: "bg-ubuntu-aubergine/15 text-purple-300 border-ubuntu-aubergine/30",
    subtle: "bg-white/[0.03] text-gray-400 border-white/5",
    outline: "bg-transparent text-gray-400 border-white/10",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-sans tracking-wide",
    md: "text-xs px-3 py-1 font-sans",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors duration-150 font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
