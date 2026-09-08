import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-gradient-to-r from-ubuntu-orange to-ubuntu-orangeLight text-white font-medium hover:brightness-110 shadow-ubuntu-orange border border-ubuntu-orange/40",
    secondary:
      "bg-white/[0.06] text-white font-medium hover:bg-white/[0.1] border border-white/10 hover:border-white/20 backdrop-blur-sm",
    outline:
      "bg-transparent text-gray-200 border border-white/15 hover:border-ubuntu-orange hover:text-ubuntu-orange hover:bg-ubuntu-orange/5",
    ghost:
      "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg",
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3 text-sm font-medium rounded-lg",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.99] cursor-pointer font-sans",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
