"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, Box } from "lucide-react";

import { Product } from "@/types/product";

const tabs = [
  { id: 'novo', label: 'Novo u Ponudi', filter: (p: Product) => p.badges?.includes('Novo') || p.id === 'p4' },
  { id: 'premium', label: 'Premium Oprema', filter: (p: Product) => p.price > 500 },
  { id: 'outdoor', label: 'Odjeća & Obuća', filter: (p: Product) => ['odjeca', 'obuca'].includes(p.categorySlug) },
];

export function FeaturedProductsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeFilter = tabs.find(t => t.id === activeTab)?.filter || (() => true);
  const displayProducts = products.filter(activeFilter).slice(0, 4);

  return (
    <section className="py-24 bg-[var(--color-stone-50)] relative bg-texture overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Preporuka Stručnjaka</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight mb-6 leading-none">
            Izdvojeno Iz <span className="text-[var(--color-copper-500)]">Ponude</span>
          </h2>
          <p className="text-stone-500 font-medium leading-relaxed">
            Naša selekcija najtraženijih artikala koji definiraju standarde kvalitete u industriji. 
            Pažljivo testirano, provjereno i spremno za teren.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all relative overflow-hidden group",
                activeTab === tab.id 
                  ? "bg-[var(--color-forest-950)] text-white shadow-xl shadow-forest-950/20"
                  : "bg-white text-stone-500 hover:text-[var(--color-forest-950)] border border-stone-200 hover:border-stone-300"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--color-copper-500)] opacity-10"
                />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[500px]">
          {displayProducts.length > 0 ? (
            displayProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-stone-400 h-60 gap-4">
              <Box className="w-12 h-12 opacity-20" />
              <p className="font-bold text-sm uppercase tracking-widest">Trenutno nema dostupnih artikala</p>
            </div>
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <Link href="/shop">
            <Button size="lg" variant="outline" className="group">
              Posjeti cijelu trgovinu
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

