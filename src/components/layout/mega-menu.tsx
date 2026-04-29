"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mainNavigation, utilityNavigation } from "@/data/navigation";
import { categories } from "@/data/categories";
import { ChevronDown, ShieldAlert, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function MegaMenu() {

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      <ul className="flex items-center gap-8 h-full">
        {mainNavigation.map((item) => (
          <li
            key={item.name}
            className="relative h-20 md:h-24 flex items-center"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:text-[var(--color-copper-500)]",
                activeMenu === item.name ? "text-[var(--color-copper-500)] translate-y-[-1px]" : "text-[var(--color-forest-950)]"
              )}
            >
              {item.name}
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeMenu === item.name && "rotate-180")} />
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === item.name && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[900px] bg-white shadow-[var(--shadow-card-hover)] rounded-b-[var(--radius-xl)] border border-stone-200 overflow-hidden z-50 flex bg-texture"
                >
                  {(() => {
                    const catData = categories.find((c) => c.slug === item.href.split('/').pop());
                    if (!catData) return null;

                    return (
                      <>
                        {/* Immersive Image Column */}
                        <div className="w-[300px] relative overflow-hidden group/image">
                          <img 
                            src={catData.image} 
                            alt={catData.name} 
                            className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover/image:scale-100 group-hover/image:rotate-1" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/40 to-transparent opacity-80" />
                          <div className="absolute inset-0 bg-[var(--color-copper-500)]/10 opacity-0 group-hover/image:opacity-100 transition-opacity" />
                          
                          <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.2em] mb-2">Preporuka stručnjaka</p>
                            <p className="text-xl font-bold text-white leading-tight mb-4">Vrhunska {catData.name.toLowerCase()} za profesionalce</p>
                            <Link 
                              href={`/categories/${catData.slug}`}
                              className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-white transition-colors"
                            >
                              Istraži kolekciju <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>

                        <div className="flex-1 p-10 grid grid-cols-2 gap-12">
                          <div className="flex flex-col">
                            <h3 className="font-black text-2xl mb-3 text-[var(--color-forest-950)] flex items-center gap-3">
                              {catData.name}
                              {catData.isRegulated && (
                                <Badge variant="destructive" className="h-5">Regulirano</Badge>
                              )}
                            </h3>
                            <p className="text-sm text-stone-500 mb-8 leading-relaxed">
                              {catData.description}
                            </p>
                            
                            {catData.isRegulated && (
                              <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl mb-8 flex gap-3">
                                <ShieldAlert className="w-5 h-5 text-[var(--color-amber-500)] shrink-0" />
                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-wider leading-normal">
                                  Za ovaj asortiman potrebna je važeća dozvola. Kupnja se obavlja isključivo u trgovini.
                                </p>
                              </div>
                            )}

                            <Link
                              href={`/categories/${catData.slug}`}
                              className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--color-copper-500)] hover:text-[var(--color-forest-950)] transition-colors group/link"
                            >
                              Prikaži cijelu kategoriju
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>

                          <div className="flex flex-col">
                            <p className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Podkategorije</p>
                            <div className="grid gap-2">
                              {catData.subcategories?.map((sub) => (
                                <Link
                                  key={sub.slug}
                                  href={`/categories/${catData.slug}/${sub.slug}`}
                                  className="group/sub text-sm font-bold text-stone-600 hover:text-[var(--color-forest-950)] flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 transition-all"
                                >
                                  {sub.name}
                                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all text-[var(--color-copper-500)]" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <div className="h-8 w-px bg-stone-200 mx-2" />
      <ul className="flex items-center gap-6">
        {utilityNavigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-[var(--color-copper-500)] transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

