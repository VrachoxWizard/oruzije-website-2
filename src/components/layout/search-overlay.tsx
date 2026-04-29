"use client";

import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Package, Search, Tag, X } from "lucide-react";
import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const popularSearches = ["Optike", "Čizme", "Jakne", "Termalni uređaji", "Održavanje"];

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return products
      .filter((product) =>
        [product.name, product.brand, product.shortDescription, ...(product.tags ?? [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(normalized),
      )
      .slice(0, 5);
  }, [query]);

  const filteredCategories = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return categories.filter((category) => category.name.toLowerCase().includes(normalized)).slice(0, 4);
  }, [query]);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setQuery("");
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-[var(--color-forest-950)]/80 backdrop-blur-xl" />
        <Dialog.Content className="fixed left-1/2 top-[8vh] z-[101] max-h-[84vh] w-[calc(100%-1.5rem)] max-w-2xl -translate-x-1/2 overflow-hidden rounded-[var(--radius-2xl)] border border-white/20 bg-white shadow-[0_50px_100px_-20px_rgba(5,13,10,0.35)] focus:outline-none">
          <Dialog.Title className="sr-only">Pretraga proizvoda i kategorija</Dialog.Title>
          <Dialog.Description className="sr-only">
            Upišite pojam za prikaz prijedloga proizvoda, kategorija i popularnih pretraga.
          </Dialog.Description>

          <div className="flex items-center border-b border-stone-100 p-5 md:p-7">
            <Search className="mr-4 h-5 w-5 text-[var(--color-copper-500)]" />
            <input
              autoFocus
              type="search"
              placeholder="Pretraži katalog..."
              className="min-w-0 flex-1 bg-transparent text-lg font-black uppercase tracking-tight text-[var(--color-forest-950)] outline-none placeholder:text-stone-300 md:text-2xl"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Dialog.Close className="ml-3 flex h-10 w-10 items-center justify-center rounded-full text-stone-400 transition-all hover:bg-stone-100 hover:text-[var(--color-forest-950)]">
              <X className="h-5 w-5" />
              <span className="sr-only">Zatvori pretragu</span>
            </Dialog.Close>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-5 md:p-7">
            {!query.trim() ? (
              <div className="py-10 text-center">
                <p className="mb-7 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                  Popularne pretrage
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {popularSearches.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="rounded-full border border-stone-200 bg-stone-50 px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all hover:border-[var(--color-forest-950)] hover:bg-[var(--color-forest-950)] hover:text-white"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCategories.length > 0 && (
                  <section>
                    <h3 className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                      <Tag className="h-3.5 w-3.5 text-[var(--color-copper-500)]" />
                      Kategorije
                    </h3>
                    <div className="grid gap-2">
                      {filteredCategories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/categories/${category.slug}`}
                          onClick={() => handleOpenChange(false)}
                          className="group flex items-center justify-between rounded-2xl border border-transparent p-4 transition-all hover:border-stone-100 hover:bg-stone-50"
                        >
                          <span className="text-sm font-black uppercase text-[var(--color-forest-950)] transition-colors group-hover:text-[var(--color-copper-500)]">
                            {category.name}
                          </span>
                          <ArrowRight className="h-4 w-4 text-stone-300 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-copper-500)]" />
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {filteredProducts.length > 0 && (
                  <section>
                    <h3 className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                      <Package className="h-3.5 w-3.5 text-[var(--color-copper-500)]" />
                      Proizvodi
                    </h3>
                    <div className="grid gap-2">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={() => handleOpenChange(false)}
                          className="group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:border-stone-100 hover:bg-stone-50"
                        >
                          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                            <Image
                              src={product.images[0] ?? "/images/placeholder.png"}
                              alt={product.name}
                              fill
                              sizes="64px"
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="line-clamp-2 text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)] group-hover:text-[var(--color-copper-500)]">
                              {product.name}
                            </p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                              {product.brand}
                            </p>
                          </div>
                          <span className="text-sm font-black text-[var(--color-forest-950)]">
                            {formatPrice(product.price)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {filteredProducts.length === 0 && filteredCategories.length === 0 && (
                  <div className="py-12 text-center">
                    <p className="text-sm font-black uppercase tracking-widest text-stone-400">
                      Nema rezultata za &quot;{query}&quot;
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
