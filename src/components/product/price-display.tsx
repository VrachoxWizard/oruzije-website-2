import { cn, formatPrice } from "@/lib/utils";

type PriceDisplayProps = {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

export function PriceDisplay({ price, compareAtPrice, currency = "EUR", size = "md", className }: PriceDisplayProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {compareAtPrice && (
        <span className="text-xs font-medium text-stone-400 line-through decoration-[var(--color-copper-500)]/40">
          {formatPrice(compareAtPrice, currency)}
        </span>
      )}
      <span
        className={cn(
          "font-black tracking-tight text-[var(--color-forest-950)]",
          size === "sm" && "text-lg",
          size === "md" && "text-xl",
          size === "lg" && "text-4xl md:text-5xl",
        )}
      >
        {formatPrice(price, currency)}
      </span>
    </div>
  );
}
