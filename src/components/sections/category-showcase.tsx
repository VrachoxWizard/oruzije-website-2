import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const featuredCategorySlugs = [
  "oruzje",
  "streljivo",
  "optike",
  "odjeca",
  "obuca",
  "oprema",
  "svjetiljke",
  "ruksaci-torbe",
];

export function CategoryShowcase() {
  const featuredCategories = featuredCategorySlugs
    .map((slug) => categories.find((category) => category.slug === slug))
    .filter(Boolean);

  return (
    <section className="bg-[var(--color-stone-50)] py-20 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
              Kategorije za ozbiljan teren.
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
              Brz ulaz u asortiman, uz jasnu razliku između standardne opreme i proizvoda koji
              zahtijevaju provjeru uvjeta kupnje.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--color-forest-950)] transition-colors hover:text-[var(--color-copper-500)]"
          >
            Svi proizvodi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredCategories.map((category, index) => {
            if (!category) return null;
            const productCount = products.filter((product) => product.categorySlug === category.slug).length;

            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative min-h-[320px] overflow-hidden rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <Image
                  src={category.image ?? "/images/placeholder.png"}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/35 to-transparent" />
                <div className="relative z-10 flex h-full min-h-[272px] flex-col justify-end">
                  <div className="mb-auto flex items-center justify-between">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {category.isRegulated && (
                      <Badge variant="destructive" className="gap-1">
                        <ShieldAlert className="h-3 w-3" />
                        Provjera
                      </Badge>
                    )}
                  </div>
                  <h3 className="mb-3 text-3xl font-black uppercase italic tracking-tight text-white">
                    {category.name}
                  </h3>
                  <p className="mb-5 line-clamp-2 text-sm font-medium leading-relaxed text-white/65">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                    {productCount} proizvoda <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
