import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full rounded-[var(--radius-md)] border border-stone-200 bg-white px-4 py-3 text-sm font-medium text-[var(--color-forest-950)] shadow-inner outline-none transition-all placeholder:text-stone-400 focus:border-[var(--color-copper-500)] focus:ring-2 focus:ring-[var(--color-copper-500)]/20 disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
