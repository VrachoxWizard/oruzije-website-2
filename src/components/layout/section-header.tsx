import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 flex flex-col gap-4 relative",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3">
        <div className="h-px w-8 bg-[var(--color-copper-500)]" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
          Kolekcija
        </span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] leading-[0.9]">
        {title}
      </h2>
      
      {description && (
        <p className="text-sm font-medium text-stone-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

