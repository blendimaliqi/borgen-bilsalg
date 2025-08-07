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
        "relative w-full overflow-hidden bg-gradient-to-b from-background via-muted/50 to-muted px-4 sm:px-8 py-6",
        className
      )}
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />

      {/* Improved radial gradient for spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      {/* Subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 opacity-70 animate-gradient bg-200%" />

      {/* Content with improved max-width for better responsiveness */}
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
    <span className={cn("text-white underline relative", className)}>
      {children}
    </span>
  );
};
