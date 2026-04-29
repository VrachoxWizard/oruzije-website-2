"use client";

import { History } from "lucide-react";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { useViewHistoryStore } from "@/lib/view-history-store";
import type { Product } from "@/types/product";

export function RecentlyViewed({ excludeId }: { excludeId?: string }) {
  const viewedProductIds = useViewHistoryStore((state) => state.viewedProductIds);
  const viewedProducts = viewedProductIds
    .filter((id) => id !== excludeId)
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product))
    .slice(0, 4);

  if (viewedProducts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-stone-100 bg-stone-50/40 bg-texture py-16">
      <Container>
        <div className="mb-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <History className="h-4 w-4 text-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
              Vaša povijest
            </span>
          </div>
          <h2 className="text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Nedavno gledano
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {viewedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
