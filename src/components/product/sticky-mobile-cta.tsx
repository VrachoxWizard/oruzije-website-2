"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

interface StickyMobileCTAProps {
  product: Product;
  label: string;
  action: string;
  onAction: () => void;
}

export function StickyMobileCTA({ product, label, action, onAction }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 inset-x-4 z-50 p-4 bg-[var(--color-forest-950)]/90 backdrop-blur-xl border border-white/10 md:hidden rounded-[var(--radius-3xl)] shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-texture"
        >
          <div className="flex items-center gap-4 max-w-lg mx-auto">
            <div className="flex-1 min-w-0">
              <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] truncate mb-0.5">
                {product.brand}
              </h4>
              <p className="text-sm font-black text-white italic uppercase tracking-tight truncate">
                {product.name}
              </p>
              <p className="text-xs font-bold text-[var(--color-copper-500)]">
                {formatPrice(product.price)}
              </p>
            </div>
            <Button 
              size="sm" 
              className="h-12 px-6 rounded-2xl bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)] text-white text-[10px] font-black uppercase tracking-[0.1em] border-none"
              onClick={onAction}
            >
              {label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

