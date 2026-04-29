"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest-800 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-forest-950)] text-white shadow-sm hover:bg-[var(--color-forest-800)] hover:shadow-md hover:ring-1 hover:ring-[var(--color-copper-500)]",
        destructive:
          "bg-[var(--color-danger)] text-white shadow-sm hover:bg-[var(--color-danger)]/90",
        outline:
          "border border-[var(--color-forest-950)] bg-transparent text-[var(--color-forest-950)] shadow-sm hover:bg-[var(--color-sand-100)]",
        secondary:
          "bg-[var(--color-sand-100)] text-[var(--color-forest-950)] shadow-sm hover:bg-[var(--color-stone-200)]",
        ghost: "hover:bg-[var(--color-stone-200)] text-[var(--color-forest-950)]",
        link: "text-[var(--color-forest-950)] underline-offset-4 hover:underline",
        regulated: "bg-[var(--color-amber-400)] text-[var(--color-forest-950)] hover:bg-[var(--color-amber-400)]/80",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-lg px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Combine HTML button props with Framer Motion props and our variants
export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...(props as any)}
        />
      );
    }

    return (
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
