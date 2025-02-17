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
        "relative w-full overflow-hidden bg-gradient-to-b from-[#f8f5f0] via-[#f5f0e8] to-muted",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b7355]/10 via-accent/5 to-[#d4c4b4]/10" />

      {/* Radial gradient for spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,115,85,0.05)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative w-full">{children}</div>
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
    <span className={cn("text-[#8b7355] font-bold", className)}>
      {children}
    </span>
  );
};
