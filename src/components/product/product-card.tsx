"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Scale } from "lucide-react";
import { Product } from "@/types/product";
import { getProductCta } from "@/lib/compliance";
import { formatPrice, cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useComparisonStore } from "@/lib/comparison-store";
import { toast } from "sonner";

import { Star, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { label, action } = getProductCta(product.complianceType);
  const addItem = useCartStore((state) => state.addItem);
  const { addItem: addCompareItem, items: compareItems, removeItem: removeCompareItem } = useComparisonStore();
  
  const isCompared = compareItems.some(i => i.id === product.id);

  const handleActionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (action === "add-to-cart") {
      addItem(product, 1);
      toast.success(`${product.name} dodano u košaricu`, {
        description: "Artikl je uspješno dodan u vašu košaricu.",
        position: "bottom-right",
      });
    } else {
      // In a real app, this would open an inquiry modal
      toast.info(`Upit za ${product.name}`, {
        description: "Kontaktirajte nas za informacije o kupnji reguliranog asortimana.",
      });
    }
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isCompared) {
      removeCompareItem(product.id);
      toast.info(`Uklonjeno iz usporedbe`);
    } else {
      addCompareItem(product);
      toast.success(`Dodano u usporedbu`);
    }
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-[var(--radius-xl)] border border-stone-200 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(28,34,26,0.12)] hover:-translate-y-1 bg-texture">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isBestSeller && <Badge variant="accent" className="shadow-lg shadow-copper-500/20">Best Seller</Badge>}
        {product.badges?.map((badge) => (
          <Badge key={badge} variant={badge === "Novo" ? "default" : "secondary"}>{badge}</Badge>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        <button className="w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-stone-500 hover:text-[var(--color-danger)] hover:scale-110 transition-all">
          <Heart className="w-5 h-5" />
        </button>
        <button 
          onClick={handleCompare}
          className={cn(
            "w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center transition-all hover:scale-110",
            isCompared ? "text-[var(--color-copper-500)]" : "text-stone-500 hover:text-[var(--color-copper-500)]"
          )}
        >
          <Scale className="w-5 h-5" />
        </button>
        <Link 
          href={`/products/${product.slug}`}
          className="w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-stone-500 hover:text-[var(--color-forest-950)] hover:scale-110 transition-all"
        >
          <Eye className="w-5 h-5" />
        </Link>
      </div>

      {/* Image Area */}
      <Link href={`/products/${product.slug}`} className="block aspect-[4/5] bg-stone-50 overflow-hidden relative">
        {product.images?.[0] ? (
          <motion.img 
            layoutId={`product-img-${product.id}`}
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-200">
            <span className="text-xs font-black uppercase tracking-widest opacity-20 rotate-[-45deg] scale-150">PointerShop</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.2em]">
            {product.brand || "PointerShop"}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" />
            <span className="text-[10px] font-bold text-stone-500">{product.rating || "4.8"}</span>
          </div>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-[var(--color-forest-950)] text-lg leading-tight mb-3 line-clamp-2 group-hover:text-[var(--color-copper-500)] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-[8px] font-black text-stone-400 uppercase tracking-widest">{key}</span>
              <span className="text-xs font-bold text-stone-600">{value}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            {product.compareAtPrice && (
              <span className="text-xs text-stone-400 line-through decoration-[var(--color-copper-500)]/30">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="font-black text-xl text-[var(--color-forest-950)] tracking-tight">
              {formatPrice(product.price)}
            </span>
          </div>

          <Button 
            size="sm"
            variant={action === "add-to-cart" ? "default" : "regulated"}
            onClick={handleActionClick}
            className="rounded-full shadow-lg shadow-forest-950/10"
          >
            {label}
          </Button>
        </div>
      </div>
    </div>
  );
}

