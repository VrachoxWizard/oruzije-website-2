"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-[var(--color-forest-950)] text-white shadow-sm hover:bg-[var(--color-forest-900)] hover:shadow-lg hover:shadow-forest-950/20",
        destructive: "bg-[var(--color-danger)] text-white shadow-sm hover:bg-[var(--color-danger)]/90",
        outline:
          "border-2 border-[var(--color-forest-950)] bg-transparent text-[var(--color-forest-950)] hover:bg-[var(--color-forest-950)] hover:text-white",
        secondary: "bg-[var(--color-stone-200)] text-[var(--color-forest-950)] hover:bg-[var(--color-sand-200)]",
        ghost: "text-[var(--color-forest-950)] hover:bg-[var(--color-stone-100)]",
        link: "text-[var(--color-forest-950)] underline-offset-4 hover:underline",
        regulated:
          "bg-[var(--color-copper-500)] text-white shadow-sm hover:bg-[var(--color-copper-600)] hover:shadow-copper-500/20",
        accent: "bg-[var(--color-amber-500)] text-[var(--color-forest-950)] hover:bg-[var(--color-amber-600)] hover:text-white",
      },
      size: {
        default: "h-12 rounded-[var(--radius-md)] px-8 py-3 text-sm",
        sm: "h-10 rounded-[var(--radius-sm)] px-4 text-xs",
        lg: "h-16 rounded-[var(--radius-lg)] px-12 text-base tracking-tight",
        icon: "h-12 w-12 rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type = "button", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        type={asChild ? undefined : type}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
