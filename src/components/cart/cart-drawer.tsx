"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { ShippingProgress } from "@/components/cart/shipping-progress";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            aria-label="Zatvori košaricu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--color-forest-950)]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Košarica"
            className="fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white shadow-2xl bg-texture"
          >
            <div className="flex items-center justify-between border-b border-stone-100 p-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                  Vaša narudžba
                </p>
                <h2 className="text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                  Košarica <span className="text-[var(--color-copper-500)]">({itemCount})</span>
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-stone-100 hover:text-[var(--color-forest-950)]"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Zatvori košaricu</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-7 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-stone-100 bg-stone-50">
                    <ShoppingBag className="h-9 w-9 text-stone-300" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                      Košarica je prazna
                    </h3>
                    <p className="max-w-xs text-sm font-medium leading-relaxed text-stone-500">
                      Standardne artikle možete dodati u košaricu. Regulirani proizvodi vode se kroz upit ili rezervaciju.
                    </p>
                  </div>
                  <Button asChild variant="outline" className="rounded-2xl border-stone-200" onClick={() => setIsOpen(false)}>
                    <Link href="/shop">Pregledaj trgovinu</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 rounded-[var(--radius-lg)] border border-stone-100 bg-stone-50 p-4"
                    >
                      <Link
                        href={`/products/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-white"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="line-clamp-2 text-xs font-black uppercase tracking-tight text-[var(--color-forest-950)] transition-colors hover:text-[var(--color-copper-500)]"
                        >
                          {item.product.name}
                        </Link>
                        <p className="mt-1 text-[10px] font-black text-[var(--color-copper-500)]">
                          {formatPrice(item.product.price)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3">
                          <div className="flex items-center rounded-xl border border-stone-200 bg-white">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="flex h-8 w-8 items-center justify-center text-stone-400 transition-colors hover:text-[var(--color-forest-950)] disabled:opacity-30"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-7 text-center text-[10px] font-black">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="flex h-8 w-8 items-center justify-center text-stone-400 transition-colors hover:text-[var(--color-forest-950)]"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.product.id)}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition-colors hover:bg-red-50 hover:text-[var(--color-danger)]"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Ukloni proizvod</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-stone-100 bg-stone-50 p-6">
                <ShippingProgress total={total} />
                <div className="my-5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">Međuzbroj</span>
                  <span className="text-3xl font-black italic tracking-tight text-[var(--color-forest-950)]">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="mb-4 text-xs font-medium leading-relaxed text-stone-500">
                  Košarica prima samo standardne artikle. Regulirani proizvodi koriste upit ili rezervaciju prije kupnje.
                </p>
                <div className="grid gap-3">
                  <Button asChild className="h-14 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]">
                    <Link href="/checkout" onClick={() => setIsOpen(false)}>
                      Nastavi na checkout
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-2xl border-stone-200 text-[9px] font-black uppercase tracking-widest">
                    <Link href="/cart" onClick={() => setIsOpen(false)}>
                      Pregledaj košaricu
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
