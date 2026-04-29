"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "@/components/product/product-card";
import { Product } from "@/types/product";
import { Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  initialProducts: Product[];
  title: string;
  description?: string;
  hideFilters?: boolean;
}

export function ProductGrid({ initialProducts, title, description, hideFilters = false }: ProductGridProps) {
  const [sortOrder, setSortOrder] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  const brands = useMemo(() => {
    const uniqueBrands = new Set(initialProducts.map(p => p.brand).filter(Boolean));
    return Array.from(uniqueBrands) as string[];
  }, [initialProducts]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...initialProducts];

    if (brandFilter) {
      result = result.filter(p => p.brand === brandFilter);
    }

    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => (b.badges?.includes("Novo") ? 1 : 0) - (a.badges?.includes("Novo") ? 1 : 0));
        break;
      default:
        // featured
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, sortOrder, brandFilter]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters (Desktop) / Toggleable (Mobile) */}
      {!hideFilters && (
        <aside className={`w-full md:w-64 shrink-0 flex flex-col gap-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="border border-stone-200 rounded-xl p-5 bg-white">
            <h3 className="font-bold text-[var(--color-forest-950)] mb-4">Filtriraj po brendu</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 text-sm cursor-pointer hover:text-[var(--color-copper-500)]">
                <input 
                  type="radio" 
                  name="brand" 
                  checked={brandFilter === null} 
                  onChange={() => setBrandFilter(null)} 
                  className="accent-[var(--color-copper-500)]"
                />
                Svi brendovi
              </label>
              {brands.map(brand => (
                <label key={brand} className="flex items-center gap-2 text-sm cursor-pointer hover:text-[var(--color-copper-500)]">
                  <input 
                    type="radio" 
                    name="brand" 
                    checked={brandFilter === brand} 
                    onChange={() => setBrandFilter(brand)} 
                    className="accent-[var(--color-copper-500)]"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200">
          <div>
            <h1 className="text-2xl font-bold text-[var(--color-forest-950)]">{title}</h1>
            {description && <p className="text-sm text-stone-500 mt-1">{description}</p>}
            <p className="text-sm text-stone-500 mt-1">Prikazano: {filteredAndSortedProducts.length} proizvoda</p>
          </div>

          <div className="flex items-center gap-3">
            {!hideFilters && (
              <Button 
                variant="outline" 
                size="sm" 
                className="md:hidden flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4" />
                Filteri
              </Button>
            )}
            
            <div className="relative">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none bg-stone-50 border border-stone-200 rounded-lg text-sm px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--color-copper-500)] cursor-pointer"
              >
                <option value="featured">Istaknuto</option>
                <option value="newest">Najnovije</option>
                <option value="price-asc">Cijena: Uzlazno</option>
                <option value="price-desc">Cijena: Silazno</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500" />
            </div>
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl border border-stone-200 text-center">
            <h3 className="text-lg font-bold text-[var(--color-forest-950)] mb-2">Nema rezultata</h3>
            <p className="text-stone-500">Pokušajte prilagoditi filtere pretrage.</p>
            <Button variant="outline" className="mt-4" onClick={() => setBrandFilter(null)}>
              Poništi filtere
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
