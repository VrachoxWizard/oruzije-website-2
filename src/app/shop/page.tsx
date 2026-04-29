import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/shop/product-grid";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import type { ProductFilters, ProductSort } from "@/lib/product-utils";

export const metadata: Metadata = {
  title: "Trgovina",
  description:
    "Pregledajte kompletnu ponudu opreme za lov, streljaštvo, optiku, odjeću, obuću i boravak na terenu.",
};

type ShopPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getInitialFilters(params: Record<string, string | string[] | undefined>): ProductFilters {
  return {
    query: firstParam(params.q),
    category: firstParam(params.category),
    subcategory: firstParam(params.subcategory),
    brand: firstParam(params.brand),
    complianceType: firstParam(params.compliance) as ProductFilters["complianceType"],
    useCase: firstParam(params.useCase),
  };
}

function getInitialSort(value: string | string[] | undefined): ProductSort {
  const sort = firstParam(value);
  const allowed: ProductSort[] = ["featured", "newest", "best-sellers", "price-asc", "price-desc", "name"];
  return allowed.includes(sort as ProductSort) ? (sort as ProductSort) : "featured";
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const initialFilters = getInitialFilters(params);
  const initialSort = getInitialSort(params.sort);

  return (
    <div className="min-h-screen bg-[var(--color-stone-50)] bg-texture">
      <Breadcrumbs items={[{ label: "Trgovina" }]} />

      <section className="relative overflow-hidden bg-[var(--color-forest-950)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/cat-rifles.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest-950)] via-[var(--color-forest-950)]/90 to-[var(--color-forest-950)]/45" />
        </div>

        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--color-copper-500)]">
                Katalog opreme
              </span>
            </div>
            <h1 className="text-4xl font-black uppercase italic leading-none tracking-tight md:text-6xl">
              Premium izbor za teren, lov i streljaštvo.
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/65">
              Pregledajte originalni mock katalog s jasnim oznakama dostupnosti, uvjeta kupnje i stručnim preporukama za
              odabir opreme.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.slice(0, 6).map((category) => (
                <a
                  key={category.slug}
                  href={`/shop?category=${category.slug}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/75 transition-colors hover:border-[var(--color-copper-500)] hover:text-white"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <ProductGrid
            initialProducts={products}
            title="Svi proizvodi"
            description="Filtrirajte po kategoriji, brendu, namjeni i uvjetima kupnje. Regulirani artikli koriste upit, rezervaciju ili ručnu provjeru, ne impulzivnu online kupnju."
            initialFilters={initialFilters}
            initialSort={initialSort}
          />
        </Container>
      </section>
    </div>
  );
}
