"use client";

import React from "react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, ShieldAlert, Info, ChevronRight, Minus, Plus, Truck } from "lucide-react";

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

interface ProductInfoProps {
  product: Product;
  label: string;
  action: string;
  onAction: () => void;
}

export function ProductInfo({ product, label, action, onAction }: ProductInfoProps) {
  const [quantity, setQuantity] = React.useState(1);
  const isRegulated = product.complianceType !== 'standard';

  return (
    <TooltipProvider>
      <div className="flex flex-col">
        {/* Brand & Meta */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.3em]">
              {product.brand || "PointerShop"}
            </span>
            <div className="h-4 w-px bg-stone-200" />
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-3 h-3 ${s <= 4 ? "fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" : "text-stone-200"}`} />
                ))}
              </div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{product.reviewCount || 12} Recenzija</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-[var(--color-forest-950)] mb-6 uppercase italic tracking-tighter leading-[0.9]">
          {product.name}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Badge variant={product.stockStatus === 'in-stock' ? 'success' : 'outline'} className="rounded-full">
            {product.stockStatus === 'in-stock' ? 'Na zalihi' : 'Ograničena zaliha'}
          </Badge>
          {product.badges?.map(badge => (
            <Badge key={badge} variant={badge === 'Novo' ? 'default' : 'accent'} className="rounded-full">{badge}</Badge>
          ))}
          {isRegulated && (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="cursor-help">
                  <Badge variant="destructive" className="rounded-full flex items-center gap-1.5">
                    <ShieldAlert className="w-3 h-3" />
                    Regulirano
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                Ovaj proizvod zahtijeva nabavnu dozvolu
              </TooltipContent>
            </Tooltip>
          )}
        </div>

        <div className="p-8 rounded-[var(--radius-3xl)] bg-stone-50 border border-stone-200 mb-10 shadow-inner relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-5xl font-black text-[var(--color-forest-950)] tracking-tighter">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-xl text-stone-400 line-through decoration-[var(--color-copper-500)]/30 font-medium">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-400">
              <Truck className="w-3.5 h-3.5" />
              Besplatna dostava za narudžbe iznad 150 €
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-copper-500)]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Compliance Warning */}
        {isRegulated && (
          <div className="mb-10 p-8 rounded-[var(--radius-2xl)] bg-[var(--color-forest-950)] text-white border border-white/5 shadow-2xl shadow-forest-950/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldAlert className="w-16 h-16" />
            </div>
            <div className="relative z-10 flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-copper-500)]/20 flex items-center justify-center shrink-0 border border-[var(--color-copper-500)]/30">
                <ShieldAlert className="w-6 h-6 text-[var(--color-copper-500)]" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-tight mb-2">Regulirani Asortiman</h4>
                <p className="text-xs text-white/50 leading-relaxed font-medium">
                  Ovaj proizvod podliježe zakonskim regulativama RH. Prodaja je moguća isključivo uz predočenje važeće <strong>nabavne dozvole</strong> ili <strong>oružnog lista</strong> u našoj poslovnici.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          {action === 'add-to-cart' && (
            <div className="flex items-center bg-stone-50 border border-stone-200 rounded-2xl px-4 h-16 shadow-inner">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-[var(--color-forest-950)] transition-colors rounded-xl hover:bg-stone-200"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-black text-lg">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-stone-400 hover:text-[var(--color-forest-950)] transition-colors rounded-xl hover:bg-stone-200"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
          <Button 
            size="lg" 
            className="flex-1 h-16 text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-forest-950/10 hover:shadow-forest-950/20 active:scale-[0.98] transition-all rounded-2xl" 
            variant={action === 'add-to-cart' ? 'default' : 'regulated'}
            onClick={onAction}
          >
            {label}
          </Button>
        </div>

        {/* Quick Benefits */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: ShieldCheck, title: "Originalni Proizvod", desc: "100% Autentično" },
            { icon: Info, title: "Stručna Podrška", desc: "Pitaj nas bilo što" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm group hover:bg-white transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-stone-100 group-hover:scale-110 transition-transform">
                <item.icon className="w-5 h-5 text-[var(--color-copper-500)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-tight">{item.title}</span>
                <span className="text-[9px] text-stone-400 font-bold uppercase tracking-widest">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

