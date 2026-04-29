"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Scale, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useComparisonStore } from "@/lib/comparison-store";

export function ComparisonBar() {
  const { items, removeItem, clear, isOpen, setIsOpen } = useComparisonStore();

  if (items.length === 0 || !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ y: 160, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 160, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="fixed inset-x-0 bottom-0 z-[60] p-3 pointer-events-none md:p-4"
        aria-label="Traka za usporedbu proizvoda"
      >
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-forest-950)] text-white shadow-2xl pointer-events-auto">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-6">
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-[var(--color-copper-500)]" />
              <span className="text-sm font-bold">Usporedba artikala ({items.length}/4)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={clear}
                className="hidden items-center gap-1 text-xs text-white/55 transition-colors hover:text-white sm:flex"
              >
                <Trash2 className="h-3 w-3" />
                Očisti
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1 text-white/55 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Sakrij traku usporedbe</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-x-auto p-4 scrollbar-hide md:p-5">
            <div className="flex flex-1 gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5"
                >
                  <Image src={item.images[0]} alt={item.name} fill sizes="80px" className="object-cover" />
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="absolute right-1 top-1 rounded-full bg-black/60 p-1 text-white transition-colors hover:bg-[var(--color-danger)]"
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Ukloni iz usporedbe</span>
                  </button>
                </div>
              ))}
              {items.length < 4 && (
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border border-dashed border-white/15 text-center text-[9px] font-black uppercase tracking-widest text-white/25">
                  Dodaj još
                </div>
              )}
            </div>

            <Button asChild className="h-12 shrink-0 rounded-2xl bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)]">
              <Link href="/compare">
                Usporedi
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
