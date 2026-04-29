"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ComplianceCta } from "@/lib/compliance";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

type StickyMobileCTAProps = {
  product: Product;
  cta: ComplianceCta;
  onAction: (quantity: number) => void;
};

export function StickyMobileCTA({ product, cta, onAction }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 760);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-x-3 bottom-3 z-50 rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-forest-950)]/95 p-3 text-white shadow-2xl backdrop-blur md:hidden"
        >
          <div className="mx-auto flex max-w-lg items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                {product.brand ?? "PointerShop"}
              </p>
              <p className="truncate text-sm font-black uppercase italic tracking-tight">{product.name}</p>
              <p className="text-xs font-bold text-[var(--color-copper-500)]">{formatPrice(product.price)}</p>
            </div>
            <Button
              size="sm"
              variant={cta.action === "add-to-cart" ? "accent" : "regulated"}
              className="h-11 rounded-2xl px-4 text-[9px] font-black uppercase tracking-widest"
              onClick={() => onAction(1)}
            >
              {cta.label}
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
