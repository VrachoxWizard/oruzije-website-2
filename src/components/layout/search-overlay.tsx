"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Package, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const filteredProducts = query
    ? products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  const filteredCategories = query
    ? categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--color-forest-950)]/80 backdrop-blur-xl z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-[var(--radius-3xl)] shadow-[0_50px_100px_-20px_rgba(5,13,10,0.3)] z-[101] overflow-hidden border border-white/20 bg-texture"
          >
            <div className="flex items-center p-8 border-b border-stone-100 relative">
              <Search className="w-6 h-6 text-[var(--color-copper-500)] mr-4" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Pretraži kolekciju..."
                className="flex-1 bg-transparent border-none outline-none text-2xl font-black italic uppercase tracking-tighter text-[var(--color-forest-950)] placeholder:text-stone-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center hover:bg-stone-100 rounded-full transition-all text-stone-400 hover:text-[var(--color-forest-950)] hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-8">
              {!query ? (
                <div className="py-12 text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-8">Popularne Pretrage</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Karabini', 'Optike', 'Termovizija', 'Noževi', 'Lovačka Odjeća'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-6 py-2 bg-stone-50 hover:bg-[var(--color-forest-950)] hover:text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-all border border-stone-100 hover:border-[var(--color-forest-950)] hover:shadow-lg hover:shadow-forest-950/20"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-10">
                  {filteredCategories.length > 0 && (
                    <div>
                      <h3 className="text-[9px] font-black text-stone-300 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                        <Tag className="w-3 h-3 text-[var(--color-copper-500)]" /> Kategorije
                      </h3>
                      <div className="flex flex-col gap-2">
                        {filteredCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/categories/${cat.slug}`}
                            onClick={onClose}
                            className="flex items-center justify-between p-4 hover:bg-stone-50 rounded-2xl group transition-all border border-transparent hover:border-stone-100"
                          >
                            <span className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)] group-hover:text-[var(--color-copper-500)] transition-colors">{cat.name}</span>
                            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[var(--color-copper-500)] group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProducts.length > 0 && (
                    <div>
                      <h3 className="text-[9px] font-black text-stone-300 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                        <Package className="w-3 h-3 text-[var(--color-copper-500)]" /> Proizvodi
                      </h3>
                      <div className="flex flex-col gap-2">
                        {filteredProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-4 p-4 hover:bg-stone-50 rounded-2xl group transition-all border border-transparent hover:border-stone-100"
                          >
                            <div className="w-16 h-16 bg-white rounded-xl overflow-hidden shrink-0 border border-stone-100 shadow-sm group-hover:scale-105 transition-transform">
                              <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col gap-1">
                              <span className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)] group-hover:text-[var(--color-copper-500)] transition-colors leading-tight">
                                {prod.name}
                              </span>
                              <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">{prod.brand}</span>
                            </div>
                            <span className="text-sm font-black text-[var(--color-forest-950)]">{formatPrice(prod.price)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProducts.length === 0 && filteredCategories.length === 0 && (
                    <div className="py-12 text-center">
                      <p className="text-sm font-black uppercase tracking-widest text-stone-300">Nema rezultata za "{query}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-6 bg-stone-50/50 backdrop-blur-md border-t border-stone-100 flex items-center justify-between text-[8px] font-black uppercase tracking-[0.3em] text-stone-400">
              <div className="flex gap-6">
                <span className="flex items-center gap-2"><kbd className="bg-white border border-stone-200 px-1.5 py-0.5 rounded shadow-sm">ESC</kbd> zatvori</span>
                <span className="flex items-center gap-2"><kbd className="bg-white border border-stone-200 px-1.5 py-0.5 rounded shadow-sm">↵</kbd> odaberi</span>
              </div>
              <span className="text-[var(--color-copper-500)]">PointerShop Discovery</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

