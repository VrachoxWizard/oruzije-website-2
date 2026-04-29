import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Kategorije",
  description: "Pregled glavnih kategorija PointerShop kataloga.",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
            Kategorije
          </p>
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
            Organiziran katalog po namjeni.
          </h1>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="group overflow-hidden rounded-[var(--radius-xl)] border border-stone-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/5"
            >
              <div className="relative aspect-[16/10] bg-stone-100">
                <Image
                  src={category.image ?? "/images/placeholder.png"}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {category.isRegulated && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--color-forest-950)] px-3 py-1 text-[9px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                    <ShieldAlert className="h-3 w-3" />
                    Provjera
                  </span>
                )}
              </div>
              <div className="p-5">
                <h2 className="mb-2 text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">{category.name}</h2>
                <p className="text-sm font-medium leading-relaxed text-stone-500">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
