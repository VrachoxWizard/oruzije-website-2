import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { categories } from "@/data/categories";

export function CategoryShowcase() {
  return (
    <section className="py-20 bg-[var(--color-stone-50)]">
      <Container>
        <SectionHeader 
          title="Istražite po kategorijama" 
          description="Pronađite točno ono što trebate kroz naš strukturirani asortiman vrhunske opreme."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/categories/${category.slug}`}
              className="group relative overflow-hidden rounded-[var(--radius-xl)] aspect-[4/3] flex flex-col justify-end p-6 border border-stone-200"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                    Slika
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                  {category.name}
                </h3>
                {category.isRegulated && (
                  <span className="text-xs font-semibold text-[var(--color-amber-400)]">
                    Regulirani asortiman
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
