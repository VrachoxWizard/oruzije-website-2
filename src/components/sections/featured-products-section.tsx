"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";

const tabs: Array<{ id: string; label: string; filter: (product: Product) => boolean }> = [
  { id: "novo", label: "Novo", filter: (product) => Boolean(product.isNew) },
  { id: "best", label: "Best selleri", filter: (product) => Boolean(product.isBestSeller) },
  { id: "clothing", label: "Odjeća i obuća", filter: (product) => ["odjeca", "obuca"].includes(product.categorySlug) },
  { id: "optics", label: "Optika", filter: (product) => product.categorySlug === "optike" },
  { id: "field", label: "Oprema za teren", filter: (product) => ["oprema", "svjetiljke", "ruksaci-torbe", "nozevi"].includes(product.categorySlug) },
];

export function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];
  const displayProducts = products.filter(active.filter).slice(0, 4);

  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-4xl font-black uppercase italic leading-none tracking-tight text-[var(--color-forest-950)] md:text-5xl">
            Izdvojeno iz ponude.
          </h2>
          <p className="mt-5 text-sm font-medium leading-relaxed text-stone-500">
            Selekcija standardne opreme, optike i reguliranog kataloga prikazana s odgovornim CTA
            pravilima i jasnim statusom zalihe.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-full border px-5 py-3 text-xs font-black uppercase tracking-widest transition-all",
                activeTab === tab.id
                  ? "border-[var(--color-forest-950)] bg-[var(--color-forest-950)] text-white"
                  : "border-stone-200 bg-white text-stone-500 hover:border-[var(--color-copper-500)] hover:text-[var(--color-forest-950)]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/shop">
            <Button size="lg" variant="outline" className="rounded-2xl">
              Pregledaj cijeli katalog
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
