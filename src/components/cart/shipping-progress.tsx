import { Truck } from "lucide-react";
import { formatPrice } from "@/lib/utils";

type ShippingProgressProps = {
  total: number;
  threshold?: number;
};

export function ShippingProgress({ total, threshold = 150 }: ShippingProgressProps) {
  const remaining = Math.max(0, threshold - total);
  const progress = Math.min(100, (total / threshold) * 100);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[var(--color-forest-950)]">
        <Truck className="h-4 w-4 text-[var(--color-copper-500)]" />
        Dostava
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-stone-100">
        <div className="h-full rounded-full bg-[var(--color-copper-500)]" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-3 text-xs font-medium text-stone-500">
        {remaining === 0
          ? "Ostvarili ste besplatnu dostavu za standardne proizvode."
          : `Još ${formatPrice(remaining)} do besplatne dostave za standardne proizvode.`}
      </p>
    </div>
  );
}
