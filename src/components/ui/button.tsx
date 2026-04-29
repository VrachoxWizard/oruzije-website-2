"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-copper-500)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-forest-950)] text-white shadow-sm hover:bg-[var(--color-forest-900)] hover:shadow-lg hover:shadow-forest-950/20 border border-transparent",
        destructive:
          "bg-[var(--color-danger)] text-white shadow-sm hover:bg-[var(--color-danger)]/90",
        outline:
          "border-2 border-[var(--color-forest-950)] bg-transparent text-[var(--color-forest-950)] hover:bg-[var(--color-forest-950)] hover:text-white",
        secondary:
          "bg-[var(--color-stone-200)] text-[var(--color-forest-950)] hover:bg-[var(--color-sand-200)]",
        ghost: "hover:bg-[var(--color-stone-100)] text-[var(--color-forest-950)]",
        link: "text-[var(--color-forest-950)] underline-offset-4 hover:underline",
        regulated: "bg-[var(--color-copper-500)] text-white hover:bg-[var(--color-copper-600)] shadow-sm hover:shadow-copper-500/20",
        accent: "bg-[var(--color-amber-500)] text-[var(--color-forest-950)] hover:bg-[var(--color-amber-600)] hover:text-white",
      },
      size: {
        default: "h-12 px-8 py-3 rounded-[var(--radius-md)]",
        sm: "h-10 rounded-[var(--radius-sm)] px-4 text-xs",
        lg: "h-16 rounded-[var(--radius-lg)] px-12 text-base tracking-tight",
        icon: "h-12 w-12 rounded-[var(--radius-md)]",
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
    // Separate motion props if necessary, but for asChild we usually want to avoid them
    if (asChild) {
      // Filter out motion-specific props that Slot/Radix doesn't understand
      const { 
        whileHover, whileTap, transition, initial, animate, exit, variants, 
        ...childProps 
      } = props as any;

      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...childProps}
        />
      );
    }

    return (
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

