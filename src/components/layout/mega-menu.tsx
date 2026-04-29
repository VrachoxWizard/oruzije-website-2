"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mainNavigation, utilityNavigation } from "@/data/navigation";
import { categories } from "@/data/categories";
import { ChevronDown, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex items-center gap-6">
      <ul className="flex items-center gap-6 h-full">
        {mainNavigation.map((item) => (
          <li
            key={item.name}
            className="relative h-16 flex items-center"
            onMouseEnter={() => setActiveMenu(item.name)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[var(--color-copper-500)]",
                activeMenu === item.name ? "text-[var(--color-copper-500)]" : "text-[var(--color-forest-950)]"
              )}
            >
              {item.name}
              <ChevronDown className="w-3.5 h-3.5" />
            </Link>

            {/* Mega Menu Dropdown */}
            {activeMenu === item.name && (
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[800px] bg-white shadow-[var(--shadow-card-hover)] rounded-b-2xl border border-stone-200 overflow-hidden z-50 flex">
                {(() => {
                  const catData = categories.find((c) => c.slug === item.href.split('/').pop());
                  if (!catData) return null;

                  return (
                    <>
                      {/* Immersive Image Column */}
                      <div className="w-1/3 relative overflow-hidden">
                        <img 
                          src={catData.image} 
                          alt={catData.name} 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <p className="text-[10px] font-bold text-[var(--color-copper-500)] uppercase tracking-widest mb-1">Preporuka</p>
                          <p className="text-sm font-bold text-white leading-tight">Vrhunska {catData.name.toLowerCase()} za profesionalce</p>
                        </div>
                      </div>

                      <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-[var(--color-forest-950)] flex items-center gap-2">
                            {catData.name}
                            {catData.isRegulated && (
                              <ShieldAlert className="w-4 h-4 text-[var(--color-danger)]" />
                            )}
                          </h3>
                          <p className="text-sm text-[var(--color-forest-800)]/70 mb-6 line-clamp-2">
                            {catData.description}
                          </p>
                          {catData.isRegulated && (
                            <div className="text-[10px] font-bold text-[var(--color-danger)] bg-red-50 p-2 rounded-lg mb-6 border border-red-100 uppercase tracking-wider">
                              Regulirani asortiman
                            </div>
                          )}
                          <Link
                            href={`/categories/${catData.slug}`}
                            className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-copper-500)] hover:text-[var(--color-forest-950)] transition-colors group/link"
                          >
                            Prikaži sve 
                            <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
                          </Link>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Podkategorije</p>
                          {catData.subcategories?.map((sub) => (
                            <Link
                              key={sub.slug}
                              href={`/categories/${catData.slug}/${sub.slug}`}
                              className="text-sm font-medium text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] hover:bg-[var(--color-stone-50)] px-3 py-2 rounded-lg transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="h-6 w-px bg-stone-300 mx-2" />
      <ul className="flex items-center gap-4">
        {utilityNavigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm font-medium text-[var(--color-forest-800)] hover:text-[var(--color-copper-500)] transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
