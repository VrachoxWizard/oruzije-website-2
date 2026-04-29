"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";
import { mainNavigation, utilityNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden items-center gap-8 lg:flex" aria-label="Glavna navigacija">
      <ul className="flex h-full items-center gap-7">
        {mainNavigation.map((item) => {
          const catData = categories.find((category) => category.slug === item.href.split("/").pop());

          return (
            <li
              key={item.name}
              className="relative flex h-20 items-center md:h-24"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                aria-expanded={activeMenu === item.name}
                className={cn(
                  "flex items-center gap-2 text-sm font-black uppercase tracking-wider transition-all hover:text-[var(--color-copper-500)]",
                  activeMenu === item.name
                    ? "text-[var(--color-copper-500)]"
                    : "text-[var(--color-forest-950)]",
                )}
              >
                {item.name}
                <ChevronDown
                  className={cn("h-3.5 w-3.5 transition-transform", activeMenu === item.name && "rotate-180")}
                />
              </Link>

              <AnimatePresence>
                {activeMenu === item.name && catData && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full z-50 flex w-[920px] -translate-x-1/2 overflow-hidden rounded-b-[var(--radius-xl)] border border-stone-200 bg-white shadow-[var(--shadow-card-hover)]"
                  >
                    <div className="relative w-[300px] overflow-hidden bg-[var(--color-forest-950)]">
                      <Image
                        src={catData.image ?? "/images/placeholder.png"}
                        alt={catData.name}
                        fill
                        sizes="300px"
                        className="object-cover opacity-55 transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/45 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8">
                        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[var(--color-copper-500)]">
                          Specijalistički izbor
                        </p>
                        <p className="mb-5 text-xl font-black leading-tight text-white">{catData.name}</p>
                        <Link
                          href={`/categories/${catData.slug}`}
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/80 transition-colors hover:text-white"
                        >
                          Otvori kategoriju <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid flex-1 grid-cols-[1fr_260px] gap-10 p-9">
                      <div className="flex flex-col">
                        <div className="mb-4 flex items-center gap-3">
                          <h3 className="text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                            {catData.name}
                          </h3>
                          {catData.isRegulated && <Badge variant="destructive">Regulirano</Badge>}
                        </div>
                        <p className="mb-6 text-sm font-medium leading-relaxed text-stone-500">
                          {catData.description}
                        </p>

                        {catData.isRegulated && (
                          <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                            <ShieldAlert className="h-5 w-5 shrink-0 text-[var(--color-amber-600)]" />
                            <p className="text-[11px] font-bold uppercase leading-relaxed tracking-wider text-stone-600">
                              Potrebna je provjera uvjeta kupnje i dokumentacije prije preuzimanja.
                            </p>
                          </div>
                        )}

                        <Link
                          href={`/categories/${catData.slug}`}
                          className="mt-auto inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--color-copper-500)] transition-colors hover:text-[var(--color-forest-950)]"
                        >
                          Pregled cijele kategorije <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>

                      <div>
                        <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-stone-400">
                          Podkategorije
                        </p>
                        <div className="grid gap-1.5">
                          {catData.subcategories?.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/shop?category=${catData.slug}&subcategory=${sub.slug}`}
                              className="group flex items-center justify-between rounded-xl p-3 text-sm font-bold text-stone-600 transition-all hover:bg-stone-50 hover:text-[var(--color-forest-950)]"
                            >
                              {sub.name}
                              <ChevronRight className="h-4 w-4 text-stone-300 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-copper-500)]" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <div className="hidden h-8 w-px bg-stone-200 2xl:block" />
      <ul className="hidden items-center gap-5 2xl:flex">
        {utilityNavigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-xs font-black uppercase tracking-widest text-stone-500 transition-colors hover:text-[var(--color-copper-500)]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
