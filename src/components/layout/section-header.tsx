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
        "mb-8 flex flex-col gap-2",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-forest-950)]">
        {title}
      </h2>
      {description && (
        <p className="text-base text-[var(--color-forest-800)]/80 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
