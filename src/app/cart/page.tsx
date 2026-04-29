"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();

  return (
    <div className="py-12 bg-[var(--color-stone-50)] min-h-screen">
      <Container>
        <h1 className="text-3xl font-bold text-[var(--color-forest-950)] mb-8">Vaša Košarica</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl border border-stone-200 text-center">
            <ShoppingBag className="w-16 h-16 text-stone-300 mb-4" />
            <h2 className="text-xl font-bold text-[var(--color-forest-950)] mb-2">Košarica je prazna</h2>
            <p className="text-stone-500 mb-6">Trenutno nemate nijedan proizvod u košarici.</p>
            <Link href="/shop">
              <Button size="lg">Nastavi kupovinu</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-stone-50 border-b border-stone-200 text-sm font-semibold text-stone-600">
                  <div className="col-span-6">Proizvod</div>
                  <div className="col-span-3 text-center">Količina</div>
                  <div className="col-span-3 text-right">Ukupno</div>
                </div>
                
                {items.map((item) => (
                  <div key={item.product.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-4 border-b border-stone-100 items-center">
                    <div className="col-span-1 sm:col-span-6 flex gap-4">
                      <div className="w-20 h-20 bg-stone-100 rounded-lg shrink-0" />
                      <div className="flex flex-col justify-center">
                        <Link href={`/products/${item.product.slug}`} className="font-semibold text-[var(--color-forest-950)] hover:text-[var(--color-copper-500)] transition-colors">
                          {item.product.name}
                        </Link>
                        <span className="text-sm text-stone-500 mt-1">{formatPrice(item.product.price)}</span>
                      </div>
                    </div>
                    
                    <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center items-center">
                      <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-lg px-3 py-1">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-stone-500 hover:text-black p-1"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-stone-500 hover:text-black p-1"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-end items-center mt-2 sm:mt-0">
                      <span className="font-bold text-[var(--color-forest-950)] sm:mr-4">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <button 
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-400 hover:text-red-600 p-2"
                        title="Ukloni"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-[var(--color-forest-950)] mb-4">Sažetak narudžbe</h3>
                
                <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-stone-200">
                  <div className="flex justify-between text-stone-600">
                    <span>Međuzbroj ({itemCount} artikala)</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Dostava</span>
                    {total > 150 ? (
                      <span className="text-[var(--color-success)] font-medium">Besplatno</span>
                    ) : (
                      <span>{formatPrice(5)}</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold text-[var(--color-forest-950)] mb-8">
                  <span>Ukupno</span>
                  <span>{formatPrice(total > 150 ? total : total + 5)}</span>
                </div>

                <Link href="/checkout" className="block w-full">
                  <Button size="lg" className="w-full">
                    Nastavi na naplatu
                  </Button>
                </Link>
                
                <p className="text-xs text-stone-500 mt-4 text-center">
                  PDV je uključen u cijenu.
                </p>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
