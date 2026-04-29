"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, MapPin, ShieldCheck, Truck } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

const trustChips = [
  { icon: MapPin, title: "Drniš", desc: "Fizička trgovina" },
  { icon: Award, title: "Podrška", desc: "Stručan odabir" },
  { icon: ShieldCheck, title: "Uvjeti", desc: "Provjera reguliranog" },
  { icon: Truck, title: "Dostava", desc: "150 €+" },
];

export function HeroSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.72, 0.2]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[86vh] items-center overflow-hidden bg-[var(--color-forest-950)] py-20 text-white md:py-28 lg:py-32"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(198,126,58,0.22),transparent_34%),linear-gradient(90deg,var(--color-forest-950)_0%,rgba(5,13,10,0.88)_45%,rgba(5,13,10,0.36)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-stone-50)] to-transparent" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-black uppercase italic leading-[0.95] tracking-tight md:text-6xl lg:text-7xl 2xl:text-8xl">
              Profesionalna oprema za lov, streljaštvo i boravak na terenu.
            </h1>
            <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-white/70 md:text-xl">
              Od odjeće i obuće do optike, dodatne opreme i reguliranog asortimana — uz stručnu podršku i jasne uvjete
              kupnje.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-2xl bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)]">
                <Link href="/shop">Pregledaj trgovinu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-[var(--color-forest-950)]">
                <Link href="/contact">Pitaj za preporuku</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute right-0 top-0 h-72 w-72 overflow-hidden rounded-[var(--radius-2xl)] border border-white/10 bg-white/5 shadow-2xl">
              <Image src="/images/prod-jacket.png" alt="Outdoor jakna" fill sizes="288px" className="object-cover" />
            </div>
            <div className="absolute bottom-8 left-4 h-80 w-80 overflow-hidden rounded-[var(--radius-2xl)] border border-white/10 bg-white/5 shadow-2xl">
              <Image src="/images/prod-scope.png" alt="Optika za teren" fill sizes="320px" className="object-cover" />
            </div>
            <div className="absolute bottom-0 right-10 max-w-sm rounded-[var(--radius-xl)] border border-white/10 bg-[var(--color-forest-900)]/88 p-6 shadow-2xl backdrop-blur">
              <p className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Odgovorna kupnja
              </p>
              <p className="text-sm font-medium leading-relaxed text-white/65">
                Regulirani proizvodi ne prolaze kroz impulsni checkout. Upit, dokumentacija i preuzimanje vode se jasno
                i profesionalno.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
          {trustChips.map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-copper-500)]" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/45">{item.title}</p>
                <p className="text-sm font-bold text-white/85">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
