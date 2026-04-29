"use client";

import React from "react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Truck, Store, Heart, Scale, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductInfoProps {
  product: Product;
  label: string;
  action: string;
  onAction: () => void;
}

export function ProductInfo({ product, label, action, onAction }: ProductInfoProps) {
  const isRegulated = product.complianceType !== 'standard';

  return (
    <div className="flex flex-col">
      {/* Brand & Socials */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-stone-500 uppercase tracking-widest font-bold">
          {product.brand || "PointerShop"}
        </span>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-forest-950)] mb-4 tracking-tight">
        {product.name}
      </h1>

      <div className="flex flex-wrap items-center gap-3 mb-8">
        <Badge variant={product.stockStatus === 'in-stock' ? 'success' : 'outline'}>
          {product.stockStatus === 'in-stock' ? 'Na zalihi' : 'Ograničena zaliha'}
        </Badge>
        {product.badges?.map(badge => (
          <Badge key={badge} variant="accent">{badge}</Badge>
        ))}
        {product.rating && (
          <div className="flex items-center gap-1 text-sm font-bold text-amber-500 ml-2">
            ★ {product.rating} <span className="text-stone-400 font-normal">({product.reviewCount})</span>
          </div>
        )}
      </div>

      <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
        <div className="text-4xl font-bold text-[var(--color-forest-950)] mb-2 flex items-baseline gap-3">
          {formatPrice(product.price)}
          {product.compareAtPrice && (
            <span className="text-xl text-stone-400 line-through font-normal">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>
        <p className="text-sm text-stone-500">
          Cijena s uključenim PDV-om. Besplatna dostava iznad 150 €.
        </p>
      </div>

      {/* Compliance Warning */}
      {isRegulated && (
        <div className="mb-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl flex gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-900 text-sm">Važna obavijest o kupnji</h4>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              Za ovaj proizvod potrebna je <strong>nabavna dozvola</strong> ili <strong>oružni list</strong>. 
              Zakonski nije dozvoljena direktna online prodaja i dostava. Proizvod možete rezervirati i preuzeti u našoj poslovnici uz predočenje potrebnih dokumenata.
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {action === 'add-to-cart' && (
          <div className="flex items-center border border-stone-200 rounded-xl px-4 h-14 bg-white shrink-0 shadow-sm">
            <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-black transition-colors">-</button>
            <span className="w-10 text-center font-bold">1</span>
            <button className="w-8 h-8 flex items-center justify-center text-stone-500 hover:text-black transition-colors">+</button>
          </div>
        )}
        <Button 
          size="lg" 
          className="flex-1 h-14 text-lg shadow-lg hover:shadow-xl transition-all" 
          variant={action === 'add-to-cart' ? 'default' : 'regulated'}
          onClick={onAction}
        >
          {label}
        </Button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-6 py-8 border-y border-stone-100 mb-10">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-[var(--color-copper-500)] shrink-0" />
          <div>
            <div className="text-sm font-bold text-[var(--color-forest-950)]">Dostava</div>
            <div className="text-xs text-stone-500 mt-0.5">
              {isRegulated ? 'Osobno preuzimanje' : '2-3 radna dana'}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Store className="w-5 h-5 text-[var(--color-copper-500)] shrink-0" />
          <div>
            <div className="text-sm font-bold text-[var(--color-forest-950)]">Preuzimanje</div>
            <div className="text-xs text-stone-500 mt-0.5">Dostupno u Drnišu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
