"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Scale, Share2 } from "lucide-react";
import { toast } from "sonner";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { ProductInfo } from "@/components/product/product-info";
import { ProductCard } from "@/components/product/product-card";
import { ProductReviews } from "@/components/product/product-reviews";
import { RecentlyViewed } from "@/components/product/recently-viewed";
import { StickyMobileCTA } from "@/components/product/sticky-mobile-cta";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories } from "@/data/categories";
import { getProductCta } from "@/lib/compliance";
import { getRelatedProducts } from "@/lib/product-utils";
import { useCartStore } from "@/lib/cart-store";
import { useComparisonStore } from "@/lib/comparison-store";
import { useViewHistoryStore } from "@/lib/view-history-store";
import type { Product } from "@/types/product";

type ProductClientProps = {
  product: Product;
};

export function ProductClient({ product }: ProductClientProps) {
  const [activeImage, setActiveImage] = useState(0);
  const addCartItem = useCartStore((state) => state.addItem);
  const addCompareItem = useComparisonStore((state) => state.addItem);
  const addViewedProduct = useViewHistoryStore((state) => state.addProduct);
  const cta = getProductCta(product.complianceType);
  const category = categories.find((item) => item.slug === product.categorySlug);
  const gallery = useMemo(() => product.gallery?.length ? product.gallery : product.images, [product.gallery, product.images]);
  const relatedProducts = getRelatedProducts(product, 4);

  useEffect(() => {
    addViewedProduct(product.id);
  }, [addViewedProduct, product.id]);

  const handleAction = (quantity: number) => {
    if (cta.action === "add-to-cart") {
      addCartItem(product, quantity);
      toast.success(`${product.name} dodano u košaricu`, {
        description: `Količina: ${quantity}. Košarica je spremna za pregled.`,
      });
      return;
    }

    toast.info(cta.label, {
      description:
        "Za ovaj proizvod nastavak ide kroz upit, rezervaciju ili provjeru uvjeta kupnje u trgovini. Nema brze online naplate.",
    });
  };

  const handleCompare = () => {
    addCompareItem(product);
    toast.success("Proizvod je dodan u usporedbu.");
  };

  const handleShare = async () => {
    if (typeof navigator === "undefined") return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Poveznica proizvoda je kopirana.");
    } catch {
      toast.info("Poveznicu možete kopirati iz adresne trake preglednika.");
    }
  };

  return (
    <div className="min-h-screen bg-white bg-texture">
      <Breadcrumbs
        items={[
          { label: "Trgovina", href: "/shop" },
          { label: category?.name ?? "Kategorija", href: category ? `/categories/${category.slug}` : "/shop" },
          { label: product.name },
        ]}
      />

      <section className="py-10 md:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-16 xl:gap-20">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] border border-stone-200 bg-stone-100 shadow-2xl shadow-forest-950/5">
                <Image
                  src={gallery[activeImage] ?? product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute right-4 top-4 flex gap-2">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--color-forest-950)] shadow-lg backdrop-blur transition-colors hover:text-[var(--color-copper-500)]"
                    aria-label="Kopiraj poveznicu proizvoda"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <Link
                    href="/wishlist"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[var(--color-forest-950)] shadow-lg backdrop-blur transition-colors hover:text-[var(--color-copper-500)]"
                    aria-label="Dodaj na listu želja"
                  >
                    <Heart className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {gallery.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 bg-stone-100 transition-all ${
                        activeImage === index
                          ? "border-[var(--color-copper-500)] shadow-lg shadow-copper-500/20"
                          : "border-transparent opacity-65 hover:opacity-100"
                      }`}
                      aria-label={`Prikaži sliku ${index + 1}`}
                    >
                      <Image src={image} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <ProductInfo product={product} cta={cta} onAction={handleAction} />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Dostava", product.deliveryInfo?.estimate ?? "1-3 radna dana", product.deliveryInfo?.method ?? "Dostava ili preuzimanje"],
              ["Plaćanje", "Po ponudi / pouzećem", "Online kartična naplata nije aktivna u MVP-u."],
              ["Povrati", "Prema pravilima trgovine", "Regulirani proizvodi mogu imati posebne uvjete."],
            ].map(([title, value, note]) => (
              <div key={title} className="rounded-[var(--radius-lg)] border border-stone-200 bg-stone-50 p-5">
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">{title}</p>
                <h2 className="mb-1 text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">
                  {value}
                </h2>
                <p className="text-xs font-medium leading-relaxed text-stone-500">{note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-stone-50/60 py-12">
        <Container>
          <Tabs defaultValue="opis" className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-4 shadow-sm md:p-6">
            <TabsList className="mb-6 flex flex-wrap gap-2">
              {["opis", "specifikacije", "dostava", "uvjeti", "recenzije"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-full border border-stone-200 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-stone-500 data-[state=active]:border-[var(--color-forest-950)] data-[state=active]:bg-[var(--color-forest-950)] data-[state=active]:text-white"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="opis" className="max-w-3xl text-sm font-medium leading-relaxed text-stone-600">
              <p>{product.description}</p>
            </TabsContent>

            <TabsContent value="specifikacije">
              <div className="grid gap-4 md:grid-cols-2">
                {(product.groupedSpecifications?.length
                  ? product.groupedSpecifications.flatMap((group) =>
                      Object.entries(group.items).map(([key, value]) => [`${group.title}: ${key}`, value] as const),
                    )
                  : Object.entries(product.specs)
                ).map(([key, value]) => (
                  <div key={key} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">{key}</p>
                    <p className="mt-1 text-sm font-black text-[var(--color-forest-950)]">{value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dostava" className="max-w-3xl text-sm font-medium leading-relaxed text-stone-600">
              <p>
                {product.deliveryInfo?.note ??
                  "Standardni artikli šalju se dostavnom službom, a dio asortimana može se dogovoriti za osobno preuzimanje. Dostava iznad 150 € je besplatna za prikladne artikle."}
              </p>
            </TabsContent>

            <TabsContent value="uvjeti" className="max-w-3xl text-sm font-medium leading-relaxed text-stone-600">
              <p>
                {product.complianceNote ??
                  "Za standardne artikle dostupna je normalna narudžba. Za regulirane, dobno ograničene ili pickup-only proizvode potrebno je poslati upit ili dogovoriti provjeru u trgovini."}
              </p>
            </TabsContent>

            <TabsContent value="recenzije">
              <ProductReviews productId={product.id} compact />
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius-xl)] bg-[var(--color-forest-950)] p-6 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-copper-500)]">
                Usporedba
              </p>
              <h2 className="text-2xl font-black uppercase italic tracking-tight">Provjerite razlike prije odluke</h2>
              <p className="mt-2 max-w-2xl text-sm font-medium text-white/55">
                Usporedite cijenu, dostupnost, uvjete kupnje i specifikacije s drugim artiklima.
              </p>
            </div>
            <Button className="rounded-2xl bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-copper-500)] hover:text-white" onClick={handleCompare}>
              <Scale className="h-4 w-4" />
              Dodaj u usporedbu
            </Button>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                  Povezano
                </p>
                <h2 className="text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                  Slični proizvodi
                </h2>
              </div>
              <Button variant="outline" className="hidden rounded-2xl border-stone-200 md:inline-flex" asChild>
                <Link href="/shop">
                  Pregledaj katalog
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <RecentlyViewed excludeId={product.id} />
      <StickyMobileCTA product={product} cta={cta} onAction={handleAction} />
    </div>
  );
}
