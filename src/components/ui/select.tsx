import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => (
  <div className="relative">
    <select
      ref={ref}
      className={cn(
        "h-12 w-full appearance-none rounded-[var(--radius-md)] border border-stone-200 bg-white px-4 pr-10 text-sm font-bold text-[var(--color-forest-950)] outline-none transition-all focus:border-[var(--color-copper-500)] focus:ring-2 focus:ring-[var(--color-copper-500)]/20 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    >
      {children}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
  </div>
));
Select.displayName = "Select";

export { Select };
