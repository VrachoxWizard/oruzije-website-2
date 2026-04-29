"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

import { ShoppingCart, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();

  return (
    <div className="py-20 bg-stone-50 min-h-screen bg-texture">
      <Container>
        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Vaša Kupnja</span>
          </div>
          <h1 className="text-5xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Košarica <span className="text-[var(--color-copper-500)]">Proizvoda</span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-24 bg-white rounded-[var(--radius-3xl)] border border-stone-200 text-center shadow-sm">
            <div className="w-24 h-24 rounded-full bg-stone-50 flex items-center justify-center mb-8 border border-stone-100 shadow-inner">
              <ShoppingCart className="w-10 h-10 text-stone-200" />
            </div>
            <h2 className="text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] mb-4">Vaša košarica je prazna</h2>
            <p className="text-stone-400 font-medium mb-10 max-w-xs mx-auto">Vrijeme je da se pripremite za sljedeći izlazak na teren.</p>
            <Link href="/shop">
              <Button size="lg" className="rounded-2xl px-12 h-16 text-[10px] font-black uppercase tracking-[0.2em]">Počni Kupovinu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.product.id} className="group relative grid grid-cols-1 sm:grid-cols-12 gap-6 p-8 bg-white rounded-[var(--radius-3xl)] border border-stone-200 items-center shadow-sm hover:shadow-xl hover:shadow-forest-950/5 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity">
                      <ShoppingCart className="w-32 h-32" />
                    </div>

                    <div className="col-span-1 sm:col-span-6 flex gap-8 items-center">
                      <div className="w-28 h-28 bg-stone-50 rounded-2xl shrink-0 border border-stone-100 p-2 group-hover:scale-105 transition-transform">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Link href={`/products/${item.product.slug}`} className="text-sm font-black uppercase italic tracking-tight text-[var(--color-forest-950)] hover:text-[var(--color-copper-500)] transition-colors leading-tight">
                          {item.product.name}
                        </Link>
                        <span className="text-[10px] font-black text-[var(--color-copper-500)] tracking-widest">{formatPrice(item.product.price)}</span>
                      </div>
                    </div>
                    
                    <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center items-center">
                      <div className="flex items-center gap-4 bg-stone-50 border border-stone-100 rounded-2xl px-4 py-2 shadow-inner">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-stone-300 hover:text-[var(--color-forest-950)] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-stone-300 hover:text-[var(--color-forest-950)] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-end items-center mt-2 sm:mt-0 gap-6">
                      <div className="flex flex-col items-end">
                        <span className="text-[8px] font-black uppercase tracking-widest text-stone-300">Ukupno</span>
                        <span className="text-xl font-black italic tracking-tighter text-[var(--color-forest-950)]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="w-10 h-10 flex items-center justify-center text-stone-200 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                        title="Ukloni"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[var(--color-forest-950)] rounded-[var(--radius-3xl)] p-10 shadow-2xl shadow-forest-950/20 sticky top-24 text-white overflow-hidden bg-texture">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShoppingCart className="w-24 h-24" />
                </div>

                <div className="relative z-10 flex flex-col gap-8">
                  <h3 className="text-xl font-black uppercase italic tracking-tight mb-2">Sažetak Košarice</h3>
                  
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      <span>Artikli ({itemCount})</span>
                      <span className="text-white">{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                      <span>Dostava</span>
                      {total > 150 ? (
                        <span className="text-emerald-400">Besplatna</span>
                      ) : (
                        <span className="text-white">{formatPrice(5)}</span>
                      )}
                    </div>
                    <div className="h-px bg-white/10 my-2" />
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)] mb-1">Sveukupno</span>
                      <span className="text-4xl font-black italic tracking-tighter">
                        {formatPrice(total > 150 ? total : total + 5)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-4">
                    <Link href="/checkout" className="block w-full">
                      <Button size="lg" className="w-full h-16 rounded-2xl bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-copper-500/20 border-none transition-all active:scale-[0.98]">
                        Završi Kupovinu <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                    <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.1em] text-center leading-relaxed">
                      Sve cijene uključuju PDV. Besplatna dostava za <br />narudžbe iznad 150 €.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

