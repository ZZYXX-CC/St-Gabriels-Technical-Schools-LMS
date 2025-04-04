"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  text?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function PlaceholderImage({ text = "Placeholder", width, height, className }: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-muted overflow-hidden",
        "transition-all duration-300 ease-in-out hover:scale-105",
        className
      )}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '100%',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted" />
      <span className="relative text-lg font-medium text-foreground/80 text-center p-4">
        {text}
      </span>
    </div>
  );
} 