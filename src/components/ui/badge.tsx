import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-forest-950)] text-white shadow-sm",
        secondary:
          "border-transparent bg-[var(--color-stone-200)] text-[var(--color-forest-950)]",
        destructive:
          "border-transparent bg-[var(--color-danger)] text-white shadow-sm",
        outline: "text-[var(--color-forest-950)] border-[var(--color-forest-900)]",
        success: "border-transparent bg-[var(--color-success)] text-white shadow-sm",
        warning: "border-transparent bg-[var(--color-warning)] text-white shadow-sm",
        accent: "border-transparent bg-[var(--color-copper-500)] text-white shadow-sm",
        info: "border-transparent bg-[var(--color-olive-600)] text-white shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

