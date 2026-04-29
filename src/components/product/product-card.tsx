"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Scale } from "lucide-react";
import { Product } from "@/types/product";
import { getProductCta } from "@/lib/compliance";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { useComparisonStore } from "@/lib/comparison-store";
import { toast } from "sonner";

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
      toast.success(`${product.name} dodano u košaricu`);
    } else {
      toast.info(`Akcija: ${label}`);
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
    <div className="group relative flex flex-col bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isBestSeller && <Badge variant="accent">Best Seller</Badge>}
        {product.badges?.map((badge) => (
          <Badge key={badge} variant="secondary">{badge}</Badge>
        ))}
      </div>

      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-500 hover:text-[var(--color-danger)] shadow-sm">
          <Heart className="w-4 h-4" />
        </button>
        <button 
          onClick={handleCompare}
          className={`w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm transition-colors ${isCompared ? "text-[var(--color-copper-500)]" : "text-stone-500 hover:text-[var(--color-copper-500)]"}`}
        >
          <Scale className="w-4 h-4" />
        </button>
      </div>

      {/* Image Area */}
      <Link href={`/products/${product.slug}`} className="block aspect-square bg-stone-100 overflow-hidden">
        {product.images?.[0] ? (
          <motion.img 
            layoutId={`product-img-${product.id}`}
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-300">
            <span className="text-sm font-medium">Slika ({product.categorySlug})</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
          {product.brand || "PointerShop"}
        </div>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-bold text-[var(--color-forest-950)] text-base line-clamp-2 mb-2 group-hover:text-[var(--color-copper-500)] transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
            <span key={key} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md">
              {value}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {product.compareAtPrice && (
              <span className="text-xs text-stone-400 line-through">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
            <span className="font-bold text-lg text-[var(--color-forest-950)]">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>

        <Button 
          className="mt-4 w-full"
          variant={action === "add-to-cart" ? "default" : "regulated"}
          onClick={handleActionClick}
        >
          {label}
        </Button>
      </div>
    </div>
  );
}
