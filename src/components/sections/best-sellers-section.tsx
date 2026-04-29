import React from "react";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductCard } from "@/components/product/product-card";
import { products } from "@/data/products";

export function BestSellersSection() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeader 
          title="Najtraženije ovaj tjedan" 
          description="Pregledajte proizvode kojima naši kupci najviše vjeruju."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
