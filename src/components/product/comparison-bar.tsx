"use client";

import React from "react";
import { useComparisonStore } from "@/lib/comparison-store";
import { motion, AnimatePresence } from "framer-motion";
import { X, Scale, ArrowRight, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ComparisonBar() {
  const { items, removeItem, clear, isOpen, setIsOpen } = useComparisonStore();

  if (items.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
        className="fixed bottom-0 left-0 right-0 z-[60] p-4 pointer-events-none"
      >
        <div className="max-w-4xl mx-auto bg-[var(--color-forest-950)] text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 pointer-events-auto">
          <div className="px-6 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[var(--color-copper-500)]" />
              <span className="font-bold">Usporedba artikala ({items.length}/4)</span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={clear}
                className="text-xs text-white/50 hover:text-white transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Očisti sve
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 flex items-center gap-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 flex-1">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className="relative w-24 h-24 shrink-0 bg-white/5 rounded-xl border border-white/10 group overflow-hidden"
                >
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="absolute top-1 right-1 p-1 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                  >
                    <X className="w-3 h-3 text-white" />
                  </button>
                </div>
              ))}
              {items.length < 4 && (
                <div className="w-24 h-24 rounded-xl border-2 border-dashed border-white/10 flex items-center justify-center text-white/20">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center px-2">Dodaj još</span>
                </div>
              )}
            </div>

            <Link href="/compare" className="shrink-0">
              <Button className="h-12 px-6 gap-2 bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)] border-none">
                Usporedi specifikacije
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
