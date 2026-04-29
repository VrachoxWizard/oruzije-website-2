import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-12 w-full rounded-[var(--radius-md)] border border-stone-200 bg-white px-4 text-sm font-medium text-[var(--color-forest-950)] shadow-inner outline-none transition-all placeholder:text-stone-400 focus:border-[var(--color-copper-500)] focus:ring-2 focus:ring-[var(--color-copper-500)]/20 disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
