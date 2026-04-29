"use client";

import { useState } from "react";
import { CheckCircle2, Minus, Plus, Scale, ShieldCheck, Truck } from "lucide-react";
import { ComplianceNotice } from "@/components/product/compliance-notice";
import { PriceDisplay } from "@/components/product/price-display";
import { StockBadge } from "@/components/product/stock-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ComplianceCta } from "@/lib/compliance";
import { canAddToCart } from "@/lib/compliance";
import type { Product } from "@/types/product";

type ProductInfoProps = {
  product: Product;
  cta: ComplianceCta;
  onAction: (quantity: number) => void;
};

export function ProductInfo({ product, cta, onAction }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const isStandard = canAddToCart(product);

  return (
    <div className="flex flex-col">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {product.brand && (
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
            {product.brand}
          </span>
        )}
        <StockBadge status={product.stockStatus} />
        {product.badges?.map((badge) => (
          <Badge key={badge} variant={badge === "Novo" ? "default" : "accent"}>
            {badge}
          </Badge>
        ))}
      </div>

      <h1 className="mb-6 text-4xl font-black uppercase italic leading-none tracking-tight text-[var(--color-forest-950)] md:text-6xl">
        {product.name}
      </h1>

      <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-stone-600">
        {product.shortDescription}
      </p>

      <div className="mb-8 rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm">
        <PriceDisplay
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          size="lg"
        />
        <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-400">
          <Truck className="h-4 w-4 text-[var(--color-copper-500)]" />
          {product.deliveryInfo?.note ?? "Besplatna dostava za narudžbe iznad 150 €"}
        </div>
      </div>

      {product.complianceType !== "standard" && (
        <ComplianceNotice product={product} className="mb-8 rounded-[var(--radius-xl)]" />
      )}

      <div className="mb-10 flex flex-col gap-4 sm:flex-row">
        {isStandard && (
          <div className="flex h-14 items-center justify-between rounded-2xl border border-stone-200 bg-white px-3 shadow-sm sm:w-36">
            <button
              type="button"
              aria-label="Smanji količinu"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 transition-colors hover:bg-stone-100 hover:text-[var(--color-forest-950)]"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-sm font-black text-[var(--color-forest-950)]">{quantity}</span>
            <button
              type="button"
              aria-label="Povećaj količinu"
              onClick={() => setQuantity((value) => value + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-stone-400 transition-colors hover:bg-stone-100 hover:text-[var(--color-forest-950)]"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        )}

        <Button
          size="lg"
          variant={isStandard ? "default" : "regulated"}
          className="h-14 flex-1 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]"
          onClick={() => onAction(quantity)}
        >
          {cta.label}
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "Jasni uvjeti", desc: "Uvjeti kupnje vidljivi prije akcije" },
          { icon: CheckCircle2, title: "Stručna podrška", desc: "Pomoć pri odabiru i namjeni" },
          { icon: Scale, title: "Odgovorna prodaja", desc: "Provjera za regulirani asortiman" },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <item.icon className="mb-3 h-5 w-5 text-[var(--color-copper-500)]" />
            <h2 className="mb-1 text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]">
              {item.title}
            </h2>
            <p className="text-xs font-medium leading-relaxed text-stone-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
