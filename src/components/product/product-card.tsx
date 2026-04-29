"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, Scale, ShieldAlert, Star } from "lucide-react";
import { toast } from "sonner";
import { PriceDisplay } from "@/components/product/price-display";
import { StockBadge } from "@/components/product/stock-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { canAddToCart, getProductCta } from "@/lib/compliance";
import { useComparisonStore } from "@/lib/comparison-store";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { label, action } = getProductCta(product.complianceType);
  const addCartItem = useCartStore((state) => state.addItem);
  const { addItem: addCompareItem, items: compareItems, removeItem: removeCompareItem } = useComparisonStore();
  const isCompared = compareItems.some((item) => item.id === product.id);

  const handleActionClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (canAddToCart(product) && action === "add-to-cart") {
      addCartItem(product, 1);
      toast.success(`${product.name} dodano u košaricu`, {
        description: "Artikl je dodan u košaricu.",
      });
      return;
    }

    toast.info(label, {
      description:
        product.complianceType === "age-restricted"
          ? "Prije kupnje potrebno je potvrditi uvjete i punoljetnost."
          : "Pošaljite upit kako bi trgovina provjerila dostupnost i uvjete kupnje.",
    });
  };

  const handleCompare = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (isCompared) {
      removeCompareItem(product.id);
      toast.info("Uklonjeno iz usporedbe.");
      return;
    }

    addCompareItem(product);
    toast.success("Dodano u usporedbu.");
  };

  const specEntries = Object.entries(product.specs).slice(0, 2);

  return (
    <article className="group relative flex min-h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(5,13,10,0.24)]">
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        {product.isBestSeller && <Badge variant="accent">Best seller</Badge>}
        {product.isNew && <Badge>Novo</Badge>}
        {product.badges?.map((badge) => (
          <Badge key={badge} variant={badge.toLowerCase().includes("akcija") ? "warning" : "secondary"}>
            {badge}
          </Badge>
        ))}
      </div>

      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 opacity-100 md:translate-x-3 md:opacity-0 md:transition-all md:group-hover:translate-x-0 md:group-hover:opacity-100">
        <Link
          href="/wishlist"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-500 shadow-xl transition-all hover:scale-105 hover:text-[var(--color-danger)]"
          aria-label={`Dodaj ${product.name} na listu želja`}
        >
          <Heart className="h-5 w-5" />
        </Link>
        <button
          type="button"
          onClick={handleCompare}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl transition-all hover:scale-105",
            isCompared ? "text-[var(--color-copper-500)]" : "text-stone-500 hover:text-[var(--color-copper-500)]",
          )}
          aria-label={isCompared ? `Ukloni ${product.name} iz usporedbe` : `Dodaj ${product.name} u usporedbu`}
        >
          <Scale className="h-5 w-5" />
        </button>
        <Link
          href={`/products/${product.slug}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-500 shadow-xl transition-all hover:scale-105 hover:text-[var(--color-forest-950)]"
          aria-label={`Otvori ${product.name}`}
        >
          <Eye className="h-5 w-5" />
        </Link>
      </div>

      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-stone-50">
        <Image
          src={product.images[0] ?? "/images/placeholder.png"}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-copper-500)]">
              {product.brand ?? "PointerShop"}
            </p>
            {product.complianceType !== "standard" && (
              <p className="mt-1 inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-700">
                <ShieldAlert className="h-3 w-3" />
                Provjera uvjeta
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1 text-[10px] font-bold text-stone-500">
            <Star className="h-3 w-3 fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" />
            {product.rating ?? "4.8"}
          </div>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="mb-3 line-clamp-2 text-lg font-black leading-tight text-[var(--color-forest-950)] transition-colors group-hover:text-[var(--color-copper-500)]">
            {product.name}
          </h3>
        </Link>

        <p className="mb-4 line-clamp-2 text-sm font-medium leading-relaxed text-stone-500">{product.shortDescription}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {specEntries.map(([key, value]) => (
            <span
              key={key}
              className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-stone-500"
            >
              {key}: <span className="text-[var(--color-forest-950)]">{value}</span>
            </span>
          ))}
        </div>

        <div className="mb-5">
          <StockBadge status={product.stockStatus} />
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-stone-100 pt-5">
          <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} currency={product.currency} />
          <Button
            size="sm"
            variant={action === "add-to-cart" ? "default" : "regulated"}
            onClick={handleActionClick}
            className="min-h-10 max-w-[170px] rounded-full px-4 text-[10px] leading-tight"
          >
            {label}
          </Button>
        </div>
      </div>
    </article>
  );
}
