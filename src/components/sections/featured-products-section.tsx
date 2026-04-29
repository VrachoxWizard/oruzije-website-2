"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const tabs = [
  { id: 'novo', label: 'Novo', filter: (p: any) => p.badges?.includes('Novo') },
  { id: 'odjeca', label: 'Odjeća i obuća', filter: (p: any) => ['odjeca', 'obuca'].includes(p.categorySlug) },
  { id: 'optika', label: 'Optika', filter: (p: any) => p.subcategorySlug === 'optike' },
  { id: 'oprema', label: 'Oprema', filter: (p: any) => p.categorySlug === 'oprema' && p.subcategorySlug !== 'optike' },
];

export function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeFilter = tabs.find(t => t.id === activeTab)?.filter || (() => true);
  const displayProducts = products.filter(activeFilter).slice(0, 4);

  return (
    <section className="py-20 bg-[var(--color-stone-50)]">
      <Container>
        <SectionHeader 
          title="Izdvojeno iz ponude" 
          description="Otkrijte najnovije proizvode i stručne preporuke iz naše trgovine."
          align="center"
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                activeTab === tab.id 
                  ? "bg-[var(--color-forest-950)] text-white shadow-md"
                  : "bg-white text-[var(--color-forest-900)] hover:bg-[var(--color-sand-100)] border border-stone-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {displayProducts.length > 0 ? (
            displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center text-stone-500 h-40">
              Nema proizvoda u ovoj kategoriji.
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
