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
      // Show when user scrolls down 400px
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center gap-4 max-w-lg mx-auto">
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider truncate">
                {product.name}
              </h4>
              <p className="text-lg font-bold text-[var(--color-forest-950)]">
                {formatPrice(product.price)}
              </p>
            </div>
            <Button 
              size="default" 
              className="px-6 h-12 whitespace-nowrap shadow-md"
              variant={action === "add-to-cart" ? "default" : "regulated"}
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
