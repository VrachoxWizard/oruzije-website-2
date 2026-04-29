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
        result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, sortOrder, brandFilter]);

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Sidebar Filters */}
      {!hideFilters && (
        <aside className={`w-full md:w-72 shrink-0 flex flex-col gap-8 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white rounded-[var(--radius-3xl)] p-8 border border-stone-200 shadow-sm bg-texture">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-[var(--color-copper-500)]" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-forest-950)]">Proizvođači</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              <label className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest cursor-pointer text-stone-400 hover:text-[var(--color-forest-950)] transition-colors">
                <div className="relative w-5 h-5 rounded-full border-2 border-stone-100 flex items-center justify-center group-hover:border-[var(--color-copper-500)]/30 transition-all">
                  <input 
                    type="radio" 
                    name="brand" 
                    checked={brandFilter === null} 
                    onChange={() => setBrandFilter(null)} 
                    className="peer opacity-0 absolute w-full h-full cursor-pointer z-10"
                  />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper-500)] opacity-0 peer-checked:opacity-100 transition-opacity" />
                </div>
                Svi Brendovi
              </label>
              
              {brands.map(brand => (
                <label key={brand} className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest cursor-pointer text-stone-400 hover:text-[var(--color-forest-950)] transition-colors">
                  <div className="relative w-5 h-5 rounded-full border-2 border-stone-100 flex items-center justify-center group-hover:border-[var(--color-copper-500)]/30 transition-all">
                    <input 
                      type="radio" 
                      name="brand" 
                      checked={brandFilter === brand} 
                      onChange={() => setBrandFilter(brand)} 
                      className="peer opacity-0 absolute w-full h-full cursor-pointer z-10"
                    />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper-500)] opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  {brand}
                </label>
              ))}
            </div>
          </div>
          
          <div className="bg-[var(--color-forest-950)] rounded-[var(--radius-3xl)] p-8 text-white relative overflow-hidden bg-texture shadow-2xl shadow-forest-950/10">
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)] mb-2 block">Premium Podrška</span>
              <h4 className="text-lg font-black uppercase italic tracking-tight mb-4 leading-tight">Trebate pomoć pri odabiru?</h4>
              <p className="text-[10px] text-white/40 font-medium mb-6 leading-relaxed">Naši stručnjaci su vam na raspolaganju za sve upite o balistici i opremi.</p>
              <Button size="sm" className="w-full bg-white text-[var(--color-forest-950)] text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-[var(--color-copper-500)] hover:text-white border-none h-12">Kontaktirajte Nas</Button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--color-copper-500)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Katalog</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] leading-[0.9]">
                {title}
              </h1>
              {description && (
                <p className="text-sm text-stone-500 font-medium leading-relaxed max-w-2xl mt-2">
                  {description}
                </p>
              )}
            </div>

            <div className="hidden md:flex items-center gap-4 bg-white border border-stone-100 p-2 rounded-2xl shadow-sm">
              <div className="flex flex-col gap-0.5 px-4">
                <span className="text-[8px] font-black uppercase tracking-widest text-stone-300">Poredaj Po</span>
                <div className="relative flex items-center">
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="appearance-none bg-transparent text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)] pr-6 focus:outline-none cursor-pointer"
                  >
                    <option value="featured">Istaknuto</option>
                    <option value="newest">Najnovije</option>
                    <option value="price-asc">Cijena: Uzlazno</option>
                    <option value="price-desc">Cijena: Silazno</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-0 text-stone-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-stone-100 pb-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-300">Prikazano: <span className="text-[var(--color-forest-950)]">{filteredAndSortedProducts.length}</span> proizvoda</p>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden flex items-center gap-2 h-10 rounded-xl px-6 text-[10px] font-black uppercase tracking-widest border-stone-200"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-3.5 h-3.5" />
              Filteri
            </Button>
          </div>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-stone-50 rounded-[var(--radius-3xl)] border border-dashed border-stone-200 text-center">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-6">
              <Filter className="w-6 h-6 text-stone-300" />
            </div>
            <h3 className="text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] mb-2">Nema rezultata</h3>
            <p className="text-stone-400 text-sm font-medium mb-8">Pokušajte prilagoditi filtere ili očistite pretragu.</p>
            <Button 
              variant="outline" 
              className="h-12 px-10 rounded-2xl text-[10px] font-black uppercase tracking-widest border-stone-200" 
              onClick={() => setBrandFilter(null)}
            >
              Poništi Sve Filteri
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

