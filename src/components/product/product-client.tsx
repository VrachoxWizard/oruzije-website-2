"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { Container } from "@/components/layout/container";
import { motion, AnimatePresence } from "framer-motion";
import { ProductInfo } from "@/components/product/product-info";
import { StickyMobileCTA } from "@/components/product/sticky-mobile-cta";
import { RecentlyViewed } from "@/components/product/recently-viewed";
import { ProductReviews } from "@/components/product/product-reviews";
import { useCartStore } from "@/lib/cart-store";
import { useViewHistoryStore } from "@/lib/view-history-store";
import { toast } from "sonner";
import { getProductCta } from "@/lib/compliance";

interface ProductClientProps {
  product: Product;
}

import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { categories } from "@/data/categories";

export function ProductClient({ product }: ProductClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);
  const addViewedProduct = useViewHistoryStore((state) => state.addProduct);

  React.useEffect(() => {
    addViewedProduct(product.id);
  }, [product.id, addViewedProduct]);
  
  const { label, action } = getProductCta(product.complianceType);
  const category = categories.find(c => c.slug === product.categorySlug);

  const handleAction = () => {
    if (action === "add-to-cart") {
      addItem(product, 1);
      toast.success(`${product.name} dodano u košaricu`);
    } else {
      toast.info(`Pokrenut zahtjev: ${label}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumbs 
        items={[
          { label: "Shop", href: "/shop" },
          { label: category?.name || "Kategorija", href: `/categories/${product.categorySlug}` },
          { label: product.name }
        ]} 
      />
      <div className="py-12">
        <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="flex flex-col gap-6">
            <motion.div 
              layoutId={`product-img-${product.id}`}
              className="aspect-square bg-stone-100 rounded-[var(--radius-2xl)] overflow-hidden border border-stone-200 relative group cursor-zoom-in"
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-stone-600 shadow-sm">
                  Povećaj prikaz
                </span>
              </div>
            </motion.div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImage === i ? "border-[var(--color-copper-500)] scale-105" : "border-stone-100 hover:border-stone-200"
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <ProductInfo 
            product={product} 
            label={label} 
            action={action} 
            onAction={handleAction} 
          />
        </div>

        <div className="mt-24 pt-24 border-t border-stone-100">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--color-forest-950)] mb-12">Detaljne specifikacije</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between py-4 border-b border-stone-100 text-sm">
                  <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">{key}</span>
                  <span className="font-bold text-[var(--color-forest-950)]">{value}</span>
                </div>
              ))}
              <div className="flex justify-between py-4 border-b border-stone-100 text-sm">
                <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px]">Šifra proizvoda</span>
                <span className="font-bold text-[var(--color-forest-950)]">{product.id.toUpperCase()}</span>
              </div>
            </div>

            <div className="mt-16 bg-[var(--color-forest-950)] rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[var(--color-copper-500)]">Trebate stručan savjet?</h3>
                <p className="text-white/70 max-w-xl mb-8 leading-relaxed">
                  Naši stručnjaci su vam na raspolaganju za sva pitanja o kalibrima, montaži optike ili odabiru prave opreme za vaš sljedeći teren.
                </p>
                <button className="bg-white text-[var(--color-forest-950)] px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-copper-500)] hover:text-white transition-all shadow-xl">
                  Kontaktirajte nas
                </button>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            </div>
          </div>
        </div>

        <ProductReviews productId={product.id} />
      </Container>
      
      <StickyMobileCTA 
        product={product} 
        label={label} 
        action={action} 
        onAction={handleAction} 
      />
      <RecentlyViewed excludeId={product.id} />
      </div>
    </div>
  );
}
