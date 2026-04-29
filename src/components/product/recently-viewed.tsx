"use client";

import React, { useEffect, useState } from "react";
import { useViewHistoryStore } from "@/lib/view-history-store";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import { Container } from "../layout/container";
import { History } from "lucide-react";

export function RecentlyViewed({ excludeId }: { excludeId?: string }) {
  const [mounted, setMounted] = useState(false);
  const viewedProductIds = useViewHistoryStore((state) => state.viewedProductIds);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  if (viewedProductIds.length <= (excludeId ? 0 : 0)) return null;

  const viewedProducts = viewedProductIds
    .filter((id) => id !== excludeId)
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (viewedProducts.length === 0) return null;

  return (
    <section className="py-24 border-t border-stone-100 bg-stone-50/30 bg-texture">
      <Container>
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-4 h-4 text-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Vaša Povijest</span>
          </div>
          <h2 className="text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Nedavno ste <span className="text-[var(--color-copper-500)]">Gledali</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {viewedProducts.map((product) => (
            <ProductCard key={product!.id} product={product!} />
          ))}
        </div>
      </Container>
    </section>
  );
}

