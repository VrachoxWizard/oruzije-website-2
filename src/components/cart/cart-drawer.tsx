"use client";

import React from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();

  // Close drawer when pressing Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-4 border-b border-stone-200">
          <h2 className="text-lg font-bold text-[var(--color-forest-950)] flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Košarica ({itemCount})
          </h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors text-[var(--color-forest-900)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-stone-500 gap-4">
              <ShoppingBag className="w-16 h-16 text-stone-300" />
              <p>Vaša košarica je prazna.</p>
              <Button onClick={() => setIsOpen(false)} variant="outline">
                Nastavi kupovinu
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-2 bg-stone-50 rounded-lg border border-stone-100">
                <div className="w-20 h-20 bg-stone-200 rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                  <span className="text-xs text-stone-400">Slika</span>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-sm font-semibold text-[var(--color-forest-950)] line-clamp-2">
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">{formatPrice(item.product.price)}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-white border border-stone-200 rounded-md px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-stone-500 hover:text-[var(--color-forest-950)]"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-stone-500 hover:text-[var(--color-forest-950)]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs text-red-500 hover:underline"
                    >
                      Ukloni
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-stone-200 bg-stone-50">
            <div className="flex items-center justify-between mb-4 font-bold text-lg text-[var(--color-forest-950)]">
              <span>Ukupno:</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/cart" onClick={() => setIsOpen(false)} className="w-full">
                <Button variant="outline" className="w-full">
                  Pregledaj košaricu
                </Button>
              </Link>
              <Link href="/checkout" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full">
                  Završi kupovinu
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
