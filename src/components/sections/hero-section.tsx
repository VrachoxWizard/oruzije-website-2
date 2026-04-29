"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, MapPin, Award } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.2]);

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--color-forest-950)] text-white overflow-hidden py-20 lg:py-32 min-h-[80vh] flex items-center">
      {/* Background Graphic/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center" 
      />

      <Container className="relative z-20">
        <div className="max-w-3xl flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Profesionalna oprema za <span className="text-[var(--color-copper-500)]">lov</span>, streljaštvo i boravak na terenu.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Od odjeće i obuće do optike, dodatne opreme i reguliranog asortimana — uz stručnu podršku i jasne uvjete kupnje.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/shop">
              <Button size="lg" className="bg-[var(--color-copper-500)] text-white hover:bg-[var(--color-copper-500)]/90 ring-0 h-14 px-8">
                Pregledaj trgovinu
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white h-14 px-8">
                Pitaj za preporuku
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10"
          >
            {[
              { icon: MapPin, text: "Trgovina u Drnišu" },
              { icon: Award, text: "Stručna podrška" },
              { icon: ShieldCheck, text: "Sigurna kupnja" },
              { icon: Truck, text: "Dostava iznad 150 €" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm font-medium hover:text-[var(--color-copper-500)] transition-colors cursor-default">
                <item.icon className="w-4 h-4 text-[var(--color-copper-500)]" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Decorative side line */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden xl:block" />
    </section>
  );
}
