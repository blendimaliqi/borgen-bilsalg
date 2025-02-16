"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-b from-[#f8f5f0] via-[#f5f0e8] to-muted px-8 py-24",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 via-accent/5 to-[#d4c4b4]/10" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/texture.png')] opacity-15 mix-blend-multiply" />

      {/* Radial gradient for spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,115,85,0.05)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn("text-[#1A1A1A] font-bold", className)}>
      {children}
    </span>
  );
};
