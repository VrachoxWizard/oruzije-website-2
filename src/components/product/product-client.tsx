"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types/product";
import { Container } from "@/components/layout/container";
import { motion, AnimatePresence } from "framer-motion";
import { ProductInfo } from "@/components/product/product-info";
import { StickyMobileCTA } from "@/components/product/sticky-mobile-cta";
import { RecentlyViewed } from "@/components/product/recently-viewed";
import { ProductReviews } from "@/components/product/product-reviews";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useCartStore } from "@/lib/cart-store";
import { useViewHistoryStore } from "@/lib/view-history-store";
import { toast } from "sonner";
import { getProductCta } from "@/lib/compliance";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { Share2, Scale, Heart, Info, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductClientProps {
  product: Product;
}

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
      toast.success(`${product.name} dodano u košaricu`, {
        description: "Artikl je uspješno dodan u vašu košaricu.",
        position: "bottom-right",
      });
    } else {
      toast.info(`Pokrenut zahtjev: ${label}`, {
        description: "Naš tim će vam se javiti s informacijama o kupnji.",
      });
    }
  };

  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="bg-white min-h-screen bg-texture">
      <Breadcrumbs 
        items={[
          { label: "Shop", href: "/shop" },
          { label: category?.name || "Kategorija", href: `/categories/${product.categorySlug}` },
          { label: product.name }
        ]} 
      />
      <div className="py-8 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 mb-32">
            {/* Image Gallery */}
            <div className="flex flex-col gap-6">
              <div className="relative group aspect-[4/5] bg-stone-50 rounded-[var(--radius-3xl)] overflow-hidden border border-stone-200 shadow-2xl shadow-forest-950/5">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    src={product.images[activeImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Overlay Controls */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={prevImage} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center pointer-events-auto hover:bg-[var(--color-copper-500)] hover:text-white transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextImage} className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center pointer-events-auto hover:bg-[var(--color-copper-500)] hover:text-white transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.images.map((_, i) => (
                    <div key={i} className={`h-1 transition-all rounded-full ${activeImage === i ? "w-8 bg-[var(--color-copper-500)]" : "w-2 bg-white/50"}`} />
                  ))}
                </div>

                <div className="absolute top-6 right-6 flex flex-col gap-3">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:text-[var(--color-danger)] transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center hover:text-[var(--color-copper-500)] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-2">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={`relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border-2 transition-all duration-500 ${
                      activeImage === i ? "border-[var(--color-copper-500)] scale-110 shadow-xl shadow-copper-500/20" : "border-transparent opacity-60 hover:opacity-100"
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-12">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-[var(--color-copper-500)]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Opis Proizvoda</span>
                  </div>
                  <h2 className="text-3xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight mb-8">Tehnička <span className="text-[var(--color-copper-500)]">Izvrsnost</span></h2>
                  <div className="prose prose-stone max-w-none text-stone-600 font-medium leading-relaxed space-y-4">
                    <p>{product.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-stone-50 p-10 rounded-[var(--radius-3xl)] border border-stone-200 shadow-inner">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1 py-2 border-b border-stone-200/50">
                      <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest">{key}</span>
                      <span className="font-bold text-[var(--color-forest-950)] text-sm">{value}</span>
                    </div>
                  ))}
                  <div className="flex flex-col gap-1 py-2 border-b border-stone-200/50">
                    <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest">Šifra proizvoda</span>
                    <span className="font-bold text-[var(--color-forest-950)] text-sm">{product.id.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[var(--color-forest-950)] rounded-[var(--radius-3xl)] p-12 text-white relative overflow-hidden bg-texture shadow-2xl shadow-forest-950/20">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Info className="w-40 h-40 text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black uppercase italic tracking-tight mb-6 leading-tight">
                      Trebate <span className="text-[var(--color-copper-500)]">Stručan</span> Savjet?
                    </h3>
                    <p className="text-white/50 mb-10 font-medium leading-relaxed text-sm">
                      Naš tim stručnjaka stoji vam na raspolaganju za sva pitanja o kalibrima, montaži optike ili odabiru prave opreme za vaš sljedeći teren.
                    </p>
                    <Link href="/contact">
                      <Button size="lg" className="w-full bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-stone-100)]">
                        Kontaktirajte nas
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-[var(--radius-3xl)] p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-copper-500)]/10 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-[var(--color-copper-500)]" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-tight">Besplatna Usporedba</h4>
                      <p className="text-xs text-stone-500 font-medium">Usporedite specifikacije s drugim artiklima</p>
                    </div>
                  </div>
                </div>
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

