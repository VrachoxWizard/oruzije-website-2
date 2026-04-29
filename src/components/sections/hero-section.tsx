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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.1]);

  return (
    <section ref={containerRef} className="relative w-full bg-[var(--color-forest-950)] text-white overflow-hidden py-24 lg:py-40 min-h-[90vh] flex items-center bg-texture">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-forest-950)] via-[var(--color-forest-950)]/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-transparent to-transparent z-10" />
      
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center scale-105" 
      />

      <Container className="relative z-20">
        <div className="max-w-4xl flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[var(--color-copper-500)]" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Elite Hunting Experience</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase italic">
              Vrhunska <span className="text-stroke text-transparent">Oprema</span> <br />
              <span className="text-[var(--color-copper-500)]">Za Prave</span> Profesionalce
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-medium">
              Otkrijte selekciju najpouzdanijih brendova za lov, streljaštvo i outdoor. 
              Pružamo vam podršku baziranu na desetljećima iskustva na terenu.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link href="/shop">
              <Button size="lg" className="bg-[var(--color-copper-500)] text-white hover:bg-[var(--color-copper-600)] shadow-2xl shadow-copper-500/20">
                Istraži Trgovinu
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white">
                Stručni Savjeti
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/5"
          >
            {[
              { icon: MapPin, title: "Lokacija", desc: "Trgovina u Drnišu" },
              { icon: Award, title: "Kvaliteta", desc: "Premium Brendovi" },
              { icon: ShieldCheck, title: "Sigurnost", desc: "Provjereni Uvjeti" },
              { icon: Truck, title: "Dostava", desc: "Besplatno > 150 €" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 group cursor-default">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[var(--color-copper-500)] transition-transform group-hover:scale-110" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{item.title}</span>
                </div>
                <p className="text-sm font-bold text-white/80 group-hover:text-white transition-colors">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Aesthetic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-[var(--color-forest-950)] to-transparent pointer-events-none z-10 hidden xl:block" />
      <div className="absolute left-1/2 bottom-12 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-4 opacity-30">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-copper-500)] to-transparent" />
      </div>
    </section>
  );
}

