"use client";

import React from "react";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--color-forest-950)]/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[101] w-full max-w-md bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col bg-texture"
          >
            <div className="flex items-center justify-between p-8 border-b border-stone-100">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Vaša Narudžba</span>
                <h2 className="text-2xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight flex items-center gap-3">
                  Košarica <span className="text-[var(--color-copper-500)]">({itemCount})</span>
                </h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-full transition-all text-stone-400 hover:text-[var(--color-forest-950)] hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-8 py-20">
                  <div className="w-24 h-24 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 shadow-inner">
                    <ShoppingBag className="w-10 h-10 text-stone-200" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-black uppercase tracking-widest text-stone-400">Vaša košarica je trenutno prazna</p>
                    <p className="text-xs text-stone-300 font-medium">Istražite našu kolekciju i pronađite savršenu opremu.</p>
                  </div>
                  <Button onClick={() => setIsOpen(false)} variant="outline" className="rounded-2xl px-8 h-12 text-[10px] font-black uppercase tracking-widest">
                    Počni kupovinu
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <motion.div 
                      key={item.product.id} 
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-6 p-4 bg-stone-50/50 rounded-[var(--radius-2xl)] border border-stone-100 group transition-all hover:bg-white hover:shadow-xl hover:shadow-forest-950/5"
                    >
                      <div className="w-24 h-24 bg-white rounded-xl overflow-hidden shrink-0 border border-stone-100 shadow-sm group-hover:scale-105 transition-transform p-1">
                        <img 
                          src={item.product.images[0]} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-xs font-black text-[var(--color-forest-950)] uppercase tracking-tight line-clamp-2 leading-snug">
                            {item.product.name}
                          </h3>
                          <p className="text-[10px] font-black text-[var(--color-copper-500)]">{formatPrice(item.product.price)}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 bg-white border border-stone-200 rounded-xl px-3 py-1.5 shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="text-stone-300 hover:text-[var(--color-forest-950)] transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-[10px] font-black w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="text-stone-300 hover:text-[var(--color-forest-950)] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeItem(item.product.id)}
                            className="w-8 h-8 flex items-center justify-center text-stone-300 hover:text-[var(--color-danger)] transition-all hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-stone-100 bg-stone-50/50 backdrop-blur-md">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Ukupni Iznos:</span>
                  <span className="text-3xl font-black text-[var(--color-forest-950)] tracking-tighter italic">{formatPrice(total)}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/checkout" onClick={() => setIsOpen(false)} className="w-full">
                    <Button className="w-full h-16 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-forest-950/20 rounded-2xl">
                      Završi kupovinu
                    </Button>
                  </Link>
                  <Link href="/cart" onClick={() => setIsOpen(false)} className="w-full">
                    <Button variant="outline" className="w-full h-14 text-[9px] font-black uppercase tracking-[0.2em] border-stone-200 rounded-2xl">
                      Pregledaj košaricu
                    </Button>
                  </Link>
                </div>
                <p className="text-center text-[9px] font-black uppercase tracking-widest text-stone-300 mt-6">Besplatna dostava uključena</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

