"use client";

import React, { useEffect, useState } from "react";
import { useViewHistoryStore } from "@/lib/view-history-store";
import { products } from "@/data/products";
import { ProductCard } from "./product-card";
import { Container } from "../layout/container";
import { SectionHeader } from "../layout/section-header";

export function RecentlyViewed({ excludeId }: { excludeId?: string }) {
  const [mounted, setMounted] = useState(false);
  const viewedProductIds = useViewHistoryStore((state) => state.viewedProductIds);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || viewedProductIds.length === 0) return null;

  const viewedProducts = viewedProductIds
    .filter((id) => id !== excludeId)
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)
    .slice(0, 4);

  if (viewedProducts.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader 
          title="Nedavno ste gledali" 
          description="Brzi povratak na proizvode koji su vas zanimali."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viewedProducts.map((product) => (
            <ProductCard key={product!.id} product={product!} />
          ))}
        </div>
      </Container>
    </section>
  );
}
