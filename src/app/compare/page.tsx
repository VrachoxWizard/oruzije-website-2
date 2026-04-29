"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldAlert, ShoppingCart, X } from "lucide-react";
import { toast } from "sonner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { canAddToCart, getComplianceCta, getComplianceMessage } from "@/lib/compliance";
import { useComparisonStore } from "@/lib/comparison-store";
import { formatPrice, getStockLabel } from "@/lib/utils";
import type { Product } from "@/types/product";

function handleProductAction(product: Product, addItem: (product: Product, quantity?: number) => void) {
  if (canAddToCart(product)) {
    addItem(product, 1);
    toast.success(`${product.name} dodano u košaricu.`);
    return;
  }

  toast.info(getComplianceCta(product.complianceType).label, {
    description: "Ovaj proizvod koristi upit, rezervaciju ili ručnu provjeru uvjeta kupnje.",
  });
}

export default function ComparePage() {
  const { items, removeItem, clear } = useComparisonStore();
  const addItem = useCartStore((state) => state.addItem);
  const allSpecs = Array.from(new Set(items.flatMap((item) => Object.keys(item.specs))));

  return (
    <div className="min-h-screen bg-stone-50 bg-texture pb-20">
      <Breadcrumbs items={[{ label: "Usporedba" }]} />

      <Container>
        <div className="py-12 md:py-16">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--color-copper-500)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
                  Tehnička analiza
                </span>
              </div>
              <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
                Usporedba opreme
              </h1>
            </div>
            {items.length > 0 && (
              <Button variant="outline" onClick={clear} className="rounded-2xl border-stone-200">
                <X className="h-4 w-4" />
                Očisti sve
              </Button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-6 rounded-[var(--radius-xl)] border border-stone-200 bg-white p-12 text-center shadow-sm md:p-20">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-stone-100 bg-stone-50">
                <X className="h-8 w-8 text-stone-300" />
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                  Nema proizvoda za usporedbu
                </h2>
                <p className="mx-auto max-w-sm text-sm font-medium leading-relaxed text-stone-500">
                  Dodajte do četiri proizvoda iz kataloga kako biste usporedili cijene, uvjete kupnje i specifikacije.
                </p>
              </div>
              <Button asChild className="rounded-2xl">
                <Link href="/shop">Vrati se u trgovinu</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="grid gap-5 lg:hidden">
                {items.map((item) => {
                  const cta = getComplianceCta(item.complianceType);

                  return (
                    <article key={item.id} className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-5 shadow-sm">
                      <div className="flex gap-4">
                        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl bg-stone-100">
                          <Image src={item.images[0]} alt={item.name} fill sizes="96px" className="object-cover" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="float-right flex h-8 w-8 items-center justify-center rounded-full text-stone-400 hover:bg-red-50 hover:text-[var(--color-danger)]"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Ukloni iz usporedbe</span>
                          </button>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                            {item.brand}
                          </p>
                          <h2 className="mt-1 text-sm font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                            {item.name}
                          </h2>
                          <p className="mt-2 text-xl font-black italic tracking-tight">{formatPrice(item.price)}</p>
                        </div>
                      </div>
                      <div className="mt-5 grid gap-2 text-xs">
                        <p>
                          <strong>Zaliha:</strong> {getStockLabel(item.stockStatus)}
                        </p>
                        <p>
                          <strong>Uvjeti:</strong> {getComplianceMessage(item)}
                        </p>
                      </div>
                      <Button
                        className="mt-5 w-full rounded-2xl text-[10px] font-black uppercase tracking-widest"
                        variant={canAddToCart(item) ? "default" : "regulated"}
                        onClick={() => handleProductAction(item, addItem)}
                      >
                        {canAddToCart(item) && <ShoppingCart className="h-4 w-4" />}
                        {cta.label}
                      </Button>
                    </article>
                  );
                })}
              </div>

              <div className="hidden overflow-hidden rounded-[var(--radius-xl)] border border-stone-200 bg-white shadow-sm lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-stone-50">
                        <th className="w-56 border-b border-r border-stone-200 p-6 text-left text-[10px] font-black uppercase tracking-[0.3em] text-stone-400">
                          Stavka
                        </th>
                        {items.map((item) => {
                          const cta = getComplianceCta(item.complianceType);

                          return (
                            <th key={item.id} className="min-w-72 border-b border-r border-stone-200 p-6 text-left last:border-r-0">
                              <div className="relative">
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-stone-400 transition-colors hover:bg-red-50 hover:text-[var(--color-danger)]"
                                >
                                  <X className="h-4 w-4" />
                                  <span className="sr-only">Ukloni iz usporedbe</span>
                                </button>
                                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100">
                                  <Image src={item.images[0]} alt={item.name} fill sizes="288px" className="object-cover" />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                                  {item.brand}
                                </p>
                                <h2 className="mt-1 line-clamp-2 text-sm font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                                  {item.name}
                                </h2>
                                <p className="mt-3 text-2xl font-black italic tracking-tight text-[var(--color-forest-950)]">
                                  {formatPrice(item.price)}
                                </p>
                                <Button
                                  className="mt-5 w-full rounded-2xl text-[9px] font-black uppercase tracking-widest"
                                  variant={canAddToCart(item) ? "default" : "regulated"}
                                  onClick={() => handleProductAction(item, addItem)}
                                >
                                  {canAddToCart(item) && <ShoppingCart className="h-4 w-4" />}
                                  {cta.label}
                                </Button>
                              </div>
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-r border-stone-200 p-6 text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]">
                          Dostupnost
                        </td>
                        {items.map((item) => (
                          <td key={item.id} className="border-b border-r border-stone-200 p-6 text-sm font-bold text-stone-600 last:border-r-0">
                            {getStockLabel(item.stockStatus)}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="border-b border-r border-stone-200 p-6 text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]">
                          Uvjeti kupnje
                        </td>
                        {items.map((item) => (
                          <td key={item.id} className="border-b border-r border-stone-200 p-6 last:border-r-0">
                            {item.complianceType !== "standard" ? (
                              <div className="flex gap-2 text-amber-700">
                                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
                                <span className="text-xs font-bold leading-relaxed">{getComplianceMessage(item)}</span>
                              </div>
                            ) : (
                              <span className="text-xs font-bold text-stone-500">Standardna online narudžba.</span>
                            )}
                          </td>
                        ))}
                      </tr>
                      {allSpecs.map((spec) => (
                        <tr key={spec} className="even:bg-stone-50/45">
                          <td className="border-b border-r border-stone-200 p-6 text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]">
                            {spec}
                          </td>
                          {items.map((item) => (
                            <td key={item.id} className="border-b border-r border-stone-200 p-6 text-sm font-medium text-stone-600 last:border-r-0">
                              {item.specs[spec] ?? "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
