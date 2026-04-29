"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Minus, Plus, ShieldAlert, ShoppingCart, Trash2 } from "lucide-react";
import { ShippingProgress } from "@/components/cart/shipping-progress";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCartStore } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();
  const delivery = total >= 150 ? 0 : 5;
  const recommendations = products
    .filter((product) => product.complianceType === "standard" && product.isBestSeller)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-12 md:py-16">
      <Container>
        <div className="mb-10 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
              Vaša kupnja
            </span>
          </div>
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
            Košarica proizvoda
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-[var(--radius-xl)] border border-stone-200 bg-white p-12 text-center shadow-sm md:p-20">
            <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-stone-100 bg-stone-50">
              <ShoppingCart className="h-9 w-9 text-stone-300" />
            </div>
            <h2 className="mb-3 text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
              Košarica je prazna
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm font-medium leading-relaxed text-stone-500">
              Standardne artikle možete dodati u košaricu. Regulirani proizvodi vode se kroz upit, rezervaciju ili ručnu
              provjeru uvjeta kupnje.
            </p>
            <Button asChild size="lg" className="rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]">
              <Link href="/shop">Pregledaj trgovinu</Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.product.id}
                  className="grid gap-5 rounded-[var(--radius-xl)] border border-stone-200 bg-white p-5 shadow-sm md:grid-cols-[112px_1fr_auto] md:items-center"
                >
                  <Link href={`/products/${item.product.slug}`} className="relative h-32 overflow-hidden rounded-2xl bg-stone-100 md:h-28">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="(min-width: 768px) 112px, 100vw"
                      className="object-cover"
                    />
                  </Link>
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                      {item.product.brand ?? "PointerShop"}
                    </p>
                    <Link
                      href={`/products/${item.product.slug}`}
                      className="text-base font-black uppercase italic tracking-tight text-[var(--color-forest-950)] transition-colors hover:text-[var(--color-copper-500)]"
                    >
                      {item.product.name}
                    </Link>
                    <p className="mt-2 text-sm font-bold text-stone-500">{formatPrice(item.product.price)}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <div className="flex items-center rounded-2xl border border-stone-200 bg-stone-50">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="flex h-10 w-10 items-center justify-center text-stone-400 transition-colors hover:text-[var(--color-forest-950)] disabled:opacity-30"
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Smanji količinu</span>
                      </button>
                      <span className="w-10 text-center text-sm font-black">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="flex h-10 w-10 items-center justify-center text-stone-400 transition-colors hover:text-[var(--color-forest-950)]"
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Povećaj količinu</span>
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">Ukupno</p>
                      <p className="text-xl font-black italic tracking-tight text-[var(--color-forest-950)]">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full text-stone-300 transition-colors hover:bg-red-50 hover:text-[var(--color-danger)]"
                    >
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Ukloni proizvod</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <ShippingProgress total={total} />

              <div className="rounded-[var(--radius-xl)] bg-[var(--color-forest-950)] p-6 text-white shadow-2xl shadow-forest-950/15">
                <h2 className="mb-6 text-xl font-black uppercase italic tracking-tight">Sažetak košarice</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/45">
                    <span>Artikli ({itemCount})</span>
                    <span className="text-white">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white/45">
                    <span>Dostava</span>
                    <span className={delivery === 0 ? "text-emerald-400" : "text-white"}>
                      {delivery === 0 ? "Besplatna" : formatPrice(delivery)}
                    </span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-end justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                      Ukupno
                    </span>
                    <span className="text-4xl font-black italic tracking-tight">{formatPrice(total + delivery)}</span>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex gap-3">
                    <ShieldAlert className="h-5 w-5 shrink-0 text-[var(--color-copper-500)]" />
                    <p className="text-xs font-medium leading-relaxed text-white/55">
                      Regulirani artikli ne prolaze kroz standardni checkout. Za njih se koristi upit, rezervacija ili
                      provjera u trgovini.
                    </p>
                  </div>
                </div>

                <Button asChild className="mt-6 h-14 w-full rounded-2xl bg-[var(--color-copper-500)] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-copper-600)]">
                  <Link href="/checkout">
                    Nastavi na checkout
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        )}

        {recommendations.length > 0 && (
          <section className="mt-16">
            <div className="mb-8">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Dodatna oprema
              </p>
              <h2 className="text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                Preporučeni standardni artikli
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </div>
  );
}
