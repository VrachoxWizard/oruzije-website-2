import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/shop/product-grid";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { faqJsonLd } from "@/lib/seo";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/product-utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Kategorija nije pronađena" };
  }

  const image = category.image ?? "/images/placeholder.png";

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | PointerShop`,
      description: category.description,
      images: [{ url: image, alt: category.name }],
    },
  };
}

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);
  const categoryImage = category.image ?? "/images/placeholder.png";
  const subcategories = category.subcategories ?? [];

  return (
    <div className="min-h-screen bg-[var(--color-stone-50)] bg-texture">
      {category.faq && category.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd(category.faq) }}
        />
      )}

      <Breadcrumbs items={[{ label: "Kategorije", href: "/categories" }, { label: category.name }]} />

      <section className="relative overflow-hidden bg-[var(--color-forest-950)] text-white">
        <div className="absolute inset-0">
          <Image
            src={categoryImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest-950)] via-[var(--color-forest-950)]/85 to-transparent" />
        </div>

        <Container className="relative z-10 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-10 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.45em] text-[var(--color-copper-500)]">
                Kategorija
              </span>
            </div>
            <h1 className="text-5xl font-black uppercase italic leading-none tracking-tight md:text-7xl">
              {category.name}
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/65">
              {category.longDescription ?? category.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/70">
                {categoryProducts.length} proizvoda
              </span>
              {category.isRegulated && (
                <span className="rounded-full border border-[var(--color-copper-500)]/35 bg-[var(--color-copper-500)]/15 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-400)]">
                  Provjera uvjeta kupnje
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="space-y-12">
          {category.isRegulated && (
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-copper-500)]/25 bg-[var(--color-forest-950)] p-6 text-white shadow-2xl shadow-forest-950/10 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-copper-500)]/15 text-[var(--color-copper-500)]">
                  <ShieldAlert className="h-7 w-7" />
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                    Važna napomena
                  </p>
                  <h2 className="mb-3 text-2xl font-black uppercase italic tracking-tight">Regulirani asortiman</h2>
                  <p className="max-w-4xl text-sm font-medium leading-relaxed text-white/65">
                    {category.complianceNote ??
                      "Dio artikala u ovoj kategoriji može zahtijevati dokumentaciju, dobnu provjeru, osobno preuzimanje ili ručnu provjeru uvjeta kupnje u trgovini."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {subcategories.length > 0 && (
            <div>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                  Podkategorije
                </h2>
                <Button variant="outline" className="hidden rounded-2xl border-stone-200 md:inline-flex" asChild>
                  <Link href="/shop">
                    Cijeli katalog
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {subcategories.map((subcategory) => (
                  <Link
                    key={subcategory.slug}
                    href={`/shop?category=${category.slug}&subcategory=${subcategory.slug}`}
                    className="group rounded-[var(--radius-lg)] border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[var(--color-copper-500)]/35 hover:shadow-xl hover:shadow-forest-950/5"
                  >
                    <p className="mb-2 text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">
                      {subcategory.name}
                    </p>
                    {subcategory.description && (
                      <p className="text-xs font-medium leading-relaxed text-stone-500">{subcategory.description}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <ProductGrid
            initialProducts={categoryProducts}
            title={category.name}
            description={`Pregled proizvoda u kategoriji ${category.name}. Filtriranje ostaje dostupno za brend, namjenu i uvjete kupnje.`}
            initialFilters={{ category: category.slug }}
          />

          {category.faq && category.faq.length > 0 && (
            <div className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="mb-6 text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                Česta pitanja
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {category.faq.map((item) => (
                  <div key={item.question} className="rounded-2xl bg-stone-50 p-5">
                    <h3 className="mb-2 text-sm font-black text-[var(--color-forest-950)]">{item.question}</h3>
                    <p className="text-sm font-medium leading-relaxed text-stone-500">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
