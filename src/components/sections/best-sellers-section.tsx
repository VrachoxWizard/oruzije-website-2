import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { TrendingUp, ArrowRight } from "lucide-react";

export function BestSellersSection() {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-24 bg-white relative bg-texture overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Trendovi</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight">
              Najtraženije <span className="text-[var(--color-copper-500)]">Ovaj</span> Tjedan
            </h2>
            <p className="mt-4 text-stone-500 font-medium leading-relaxed">
              Proizvodi koji su se dokazali na terenu i stekli povjerenje naše zajednice lovaca i entuzijasta.
            </p>
          </div>
          <Link href="/shop?sort=best-selling" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[var(--color-forest-950)] hover:text-[var(--color-copper-500)] transition-colors">
            Vidi sve najprodavanije
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-24 relative overflow-hidden rounded-[var(--radius-3xl)] bg-[var(--color-forest-950)] p-12 lg:p-20 text-center bg-texture">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-copper-500)]/20 via-transparent to-[var(--color-copper-500)]/20 opacity-30" />
          <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
              Tražite neku <span className="text-[var(--color-copper-500)]">Specifičnu</span> stavku?
            </h3>
            <p className="text-white/60 mb-10 font-medium leading-relaxed">
              Naš tim stručnjaka stoji vam na raspolaganju za sve upite o specijaliziranoj opremi i reguliranom asortimanu koji nije dostupan za direktnu online kupnju.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-stone-100)] rounded-full px-12">
                Pošaljite Upit
              </Button>
            </Link>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--color-copper-500)]/10 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}

