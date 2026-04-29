import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { categories } from "@/data/categories";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Box } from "lucide-react";

export function CategoryShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden bg-texture">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Kolekcije</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight">
              Istražite <span className="text-[var(--color-copper-500)]">Svijet</span> Lova
            </h2>
            <p className="mt-4 text-stone-500 font-medium leading-relaxed">
              Od vrhunskog oružja i precizne optike do izdržljive odjeće i obuće. 
              Naš asortiman je pažljivo biran za najzahtjevnije korisnike.
            </p>
          </div>
          <Link href="/shop" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[var(--color-forest-950)] hover:text-[var(--color-copper-500)] transition-colors">
            Prikaži sve kategorije
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
          {/* Big Card - Oružje */}
          {categories.find(c => c.slug === 'oruzje') && (
            <Link 
              href="/categories/oruzje"
              className="md:col-span-8 group relative overflow-hidden rounded-[var(--radius-2xl)] flex flex-col justify-end p-10 shadow-2xl shadow-forest-950/10"
            >
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1">
                <img 
                  src={categories.find(c => c.slug === 'oruzje')?.image} 
                  alt="Oružje"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/20 to-transparent" />
              
              <div className="relative z-10">
                <Badge variant="destructive" className="mb-4">Regulirani asortiman</Badge>
                <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                  Oružje & <span className="text-[var(--color-copper-500)]">Sustavi</span>
                </h3>
                <p className="text-white/60 max-w-md text-sm font-medium mb-6">
                  Vrhunski karabini, sačmarice i zračno oružje od renomiranih svjetskih proizvođača.
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:text-[var(--color-copper-500)] transition-colors">
                  Istraži kategoriju <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Side Card 1 - Odjeća */}
          {categories.find(c => c.slug === 'odjeca') && (
            <Link 
              href="/categories/odjeca"
              className="md:col-span-4 group relative overflow-hidden rounded-[var(--radius-2xl)] flex flex-col justify-end p-8 shadow-2xl shadow-forest-950/5"
            >
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                <img 
                  src={categories.find(c => c.slug === 'odjeca')?.image} 
                  alt="Odjeća"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/40 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4">
                  Lovačka <span className="text-[var(--color-copper-500)]">Odjeća</span>
                </h3>
                <span className="inline-flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:text-[var(--color-copper-500)] transition-colors">
                  Kupi odmah <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Bottom Card 1 - Obuća */}
          {categories.find(c => c.slug === 'obuca') && (
            <Link 
              href="/categories/obuca"
              className="md:col-span-4 group relative overflow-hidden rounded-[var(--radius-2xl)] flex flex-col justify-end p-8 shadow-2xl shadow-forest-950/5 h-[300px] md:h-full"
            >
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-1">
                <img 
                  src={categories.find(c => c.slug === 'obuca')?.image} 
                  alt="Obuća"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/40 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4">
                  Terenska <span className="text-[var(--color-copper-500)]">Obuća</span>
                </h3>
                <span className="inline-flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:text-[var(--color-copper-500)] transition-colors">
                  Kupi odmah <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          )}

          {/* Bottom Card 2 - Oprema */}
          {categories.find(c => c.slug === 'oprema') && (
            <Link 
              href="/categories/oprema"
              className="md:col-span-8 group relative overflow-hidden rounded-[var(--radius-2xl)] flex flex-col justify-end p-8 shadow-2xl shadow-forest-950/5 h-[300px] md:h-full"
            >
              <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-105">
                <img 
                  src={categories.find(c => c.slug === 'oprema')?.image} 
                  alt="Oprema"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/30 to-transparent" />
              
              <div className="relative z-10 flex items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-black text-white uppercase italic tracking-tight mb-2">
                    Profesionalna <span className="text-[var(--color-copper-500)]">Oprema</span>
                  </h3>
                  <p className="text-white/60 text-xs font-medium max-w-xs">
                    Optika, termovizija, noževi i sve što je potrebno za uspješan boravak na terenu.
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[var(--color-copper-500)] group-hover:border-[var(--color-copper-500)] transition-all group-hover:scale-110">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}

