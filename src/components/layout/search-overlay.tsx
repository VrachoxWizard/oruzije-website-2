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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-[101] overflow-hidden border border-stone-200"
          >
            <div className="flex items-center p-4 border-b border-stone-100">
              <Search className="w-5 h-5 text-stone-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Pretraži proizvode, brendove, kategorije..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-[var(--color-forest-950)] placeholder:text-stone-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4">
              {!query ? (
                <div className="py-8 text-center text-stone-500">
                  <p className="text-sm">Upišite pojam za pretragu...</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['Karabini', 'Optike', 'Odjeća', 'Noževi'].map(tag => (
                      <button 
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1 bg-stone-100 hover:bg-stone-200 rounded-full text-xs font-medium transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {filteredCategories.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                        <Tag className="w-3 h-3" /> Kategorije
                      </h3>
                      <div className="flex flex-col gap-1">
                        {filteredCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/categories/${cat.slug}`}
                            onClick={onClose}
                            className="flex items-center justify-between p-2 hover:bg-[var(--color-sand-100)] rounded-lg group transition-colors"
                          >
                            <span className="text-sm font-semibold text-[var(--color-forest-950)]">{cat.name}</span>
                            <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-[var(--color-copper-500)] group-hover:translate-x-1 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProducts.length > 0 && (
                    <div>
                      <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                        <Package className="w-3 h-3" /> Proizvodi
                      </h3>
                      <div className="flex flex-col gap-1">
                        {filteredProducts.map((prod) => (
                          <Link
                            key={prod.id}
                            href={`/products/${prod.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-4 p-2 hover:bg-[var(--color-sand-100)] rounded-lg group transition-colors"
                          >
                            <div className="w-12 h-12 bg-stone-100 rounded-md overflow-hidden shrink-0">
                              <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col">
                              <span className="text-sm font-semibold text-[var(--color-forest-950)] group-hover:text-[var(--color-copper-500)] transition-colors">
                                {prod.name}
                              </span>
                              <span className="text-xs text-stone-500">{prod.brand}</span>
                            </div>
                            <span className="text-sm font-bold text-[var(--color-forest-950)]">{formatPrice(prod.price)}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {filteredProducts.length === 0 && filteredCategories.length === 0 && (
                    <div className="py-8 text-center text-stone-500">
                      Nema pronađenih rezultata za "{query}"
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400 uppercase font-bold tracking-widest">
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><kbd className="bg-stone-200 px-1 rounded">ESC</kbd> zatvori</span>
                <span className="flex items-center gap-1"><kbd className="bg-stone-200 px-1 rounded">↵</kbd> odaberi</span>
              </div>
              <span>PointerShop Discovery</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
