"use client";

import { Filter, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { categories } from "@/data/categories";
import {
  filterProducts,
  getUniqueBrands,
  getUniqueUseCases,
  ProductFilters,
  ProductSort,
  sortProducts,
} from "@/lib/product-utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductGridProps = {
  initialProducts: Product[];
  title: string;
  description?: string;
  hideFilters?: boolean;
  initialFilters?: ProductFilters;
  initialSort?: ProductSort;
};

const complianceOptions = [
  { value: "", label: "Svi uvjeti" },
  { value: "standard", label: "Standardno" },
  { value: "age-restricted", label: "Potvrda uvjeta" },
  { value: "pickup-only", label: "Preuzimanje" },
  { value: "regulated-inquiry", label: "Upit / provjera" },
];

function categoryLabel(slug?: string) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export function ProductGrid({
  initialProducts,
  title,
  description,
  hideFilters = false,
  initialFilters = {},
  initialSort = "featured",
}: ProductGridProps) {
  const [sortOrder, setSortOrder] = useState<ProductSort>(initialSort);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<ProductFilters>(initialFilters);

  const brands = useMemo(() => getUniqueBrands(initialProducts), [initialProducts]);
  const useCases = useMemo(() => getUniqueUseCases(initialProducts), [initialProducts]);

  const filteredAndSortedProducts = useMemo(
    () => sortProducts(filterProducts(initialProducts, filters), sortOrder),
    [filters, initialProducts, sortOrder],
  );

  const activeFilters = [
    filters.query && `Pretraga: ${filters.query}`,
    filters.category && `Kategorija: ${categoryLabel(filters.category)}`,
    filters.subcategory && `Podkategorija: ${filters.subcategory}`,
    filters.brand && `Brend: ${filters.brand}`,
    filters.complianceType &&
      `Uvjeti: ${complianceOptions.find((option) => option.value === filters.complianceType)?.label}`,
    filters.useCase && `Namjena: ${filters.useCase}`,
  ].filter(Boolean) as string[];

  const updateFilter = <Key extends keyof ProductFilters>(key: Key, value: ProductFilters[Key] | "") => {
    setFilters((current) => {
      if (value === "" || value === undefined) {
        const next = { ...current };
        delete next[key];
        return next;
      }

      return { ...current, [key]: value };
    });
  };

  const resetFilters = () => setFilters({});

  const filtersPanel = (
    <div className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-[var(--color-forest-950)]">
          <SlidersHorizontal className="h-4 w-4 text-[var(--color-copper-500)]" />
          Filteri
        </h2>
        <button
          type="button"
          onClick={() => setShowFilters(false)}
          className="rounded-full p-2 text-stone-400 transition-colors hover:bg-stone-100 hover:text-[var(--color-forest-950)] lg:hidden"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Zatvori filtere</span>
        </button>
      </div>

      <div className="space-y-5">
        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Pretraga</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <Input
              value={filters.query ?? ""}
              onChange={(event) => updateFilter("query", event.target.value)}
              className="pl-10"
              placeholder="Naziv, brend, namjena..."
            />
          </div>
        </label>

        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Kategorija</span>
          <Select value={filters.category ?? ""} onChange={(event) => updateFilter("category", event.target.value)}>
            <option value="">Sve kategorije</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </Select>
        </label>

        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Brend</span>
          <Select value={filters.brand ?? ""} onChange={(event) => updateFilter("brand", event.target.value)}>
            <option value="">Svi brendovi</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </label>

        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Uvjeti kupnje</span>
          <Select
            value={filters.complianceType ?? ""}
            onChange={(event) => updateFilter("complianceType", event.target.value as ProductFilters["complianceType"] | "")}
          >
            {complianceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </label>

        <label className="block space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Namjena</span>
          <Select value={filters.useCase ?? ""} onChange={(event) => updateFilter("useCase", event.target.value)}>
            <option value="">Sve namjene</option>
            {useCases.map((useCase) => (
              <option key={useCase} value={useCase}>
                {useCase}
              </option>
            ))}
          </Select>
        </label>

        {activeFilters.length > 0 && (
          <Button variant="outline" className="w-full rounded-2xl border-stone-200" onClick={resetFilters}>
            Poništi filtere
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      {!hideFilters && (
        <>
          <aside className="hidden space-y-6 lg:block">
            {filtersPanel}
            <div className="rounded-[var(--radius-xl)] bg-[var(--color-forest-950)] p-6 text-white shadow-2xl shadow-forest-950/10">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-copper-500)]">
                Stručna podrška
              </p>
              <h3 className="mb-3 text-xl font-black uppercase italic tracking-tight">Niste sigurni što odabrati?</h3>
              <p className="mb-5 text-sm font-medium leading-relaxed text-white/55">
                Pošaljite upit s namjenom i uvjetima korištenja. Trgovina može preporučiti prikladan proizvod.
              </p>
              <Button
                size="sm"
                className="w-full rounded-xl bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-copper-500)] hover:text-white"
                asChild
              >
                <a href="/contact">Kontaktirajte nas</a>
              </Button>
            </div>
          </aside>

          {showFilters && (
            <div className="fixed inset-0 z-[90] bg-[var(--color-forest-950)]/60 p-4 backdrop-blur-sm lg:hidden">
              <div className="mx-auto mt-10 max-h-[85vh] max-w-md overflow-y-auto rounded-[var(--radius-xl)] bg-white shadow-2xl">
                {filtersPanel}
              </div>
            </div>
          )}
        </>
      )}

      <div className={cn("min-w-0 space-y-8", hideFilters && "lg:col-span-2")}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--color-copper-500)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[var(--color-copper-500)]">
                  Katalog
                </span>
              </div>
              <h1 className="text-4xl font-black uppercase italic leading-none tracking-tight text-[var(--color-forest-950)] md:text-5xl">
                {title}
              </h1>
              {description && <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-stone-500">{description}</p>}
            </div>

            <div className="flex items-center gap-3">
              {!hideFilters && (
                <Button variant="outline" className="rounded-2xl border-stone-200 lg:hidden" onClick={() => setShowFilters(true)}>
                  <Filter className="h-4 w-4" />
                  Filteri
                </Button>
              )}
              <Select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as ProductSort)} className="min-w-44">
                <option value="featured">Istaknuto</option>
                <option value="newest">Najnovije</option>
                <option value="best-sellers">Best selleri</option>
                <option value="price-asc">Cijena: niža</option>
                <option value="price-desc">Cijena: viša</option>
                <option value="name">Naziv</option>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-5">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
              Prikazano: <span className="text-[var(--color-forest-950)]">{filteredAndSortedProducts.length}</span>{" "}
              proizvoda
            </p>
            {activeFilters.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider text-stone-500"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-stone-300 bg-white py-24 text-center">
            <Filter className="mb-5 h-10 w-10 text-stone-300" />
            <h3 className="mb-2 text-xl font-black uppercase italic text-[var(--color-forest-950)]">Nema rezultata</h3>
            <p className="mb-8 max-w-sm text-sm font-medium text-stone-500">
              Pokušajte ukloniti dio filtera ili pretražiti širi pojam.
            </p>
            <Button variant="outline" className="rounded-2xl border-stone-200" onClick={resetFilters}>
              Poništi filtere
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
