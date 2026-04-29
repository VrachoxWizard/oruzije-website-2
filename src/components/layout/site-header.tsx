"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Scale, Menu } from "lucide-react";
import { Container } from "./container";
import { TopAnnouncementBar } from "./top-announcement-bar";
import { MegaMenu } from "./mega-menu";
import { SearchOverlay } from "./search-overlay";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="w-full bg-[var(--color-stone-50)]/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
      <TopAnnouncementBar />
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-[var(--color-forest-950)] uppercase">
              Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <MegaMenu />

          {/* Icons & Actions */}
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="group flex items-center gap-2 bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded-full transition-all border border-stone-200"
            >
              <Search className="w-4 h-4 text-stone-500 group-hover:text-[var(--color-forest-950)]" />
              <span className="hidden xl:block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Pretraži <kbd className="ml-1 text-[8px] bg-stone-300 px-1 rounded">⌘K</kbd></span>
            </button>
            <div className="hidden md:flex items-center gap-5">
              <Link href="/account" className="text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] transition-colors">
                <User className="w-5 h-5" />
                <span className="sr-only">Korisnički račun</span>
              </Link>
              <Link href="/wishlist" className="text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] transition-colors relative">
                <Heart className="w-5 h-5" />
                <span className="sr-only">Lista želja</span>
              </Link>
            </div>
            
            <button className="text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] transition-colors relative flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-[var(--color-copper-500)] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="hidden md:block text-sm font-bold">0,00 €</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] transition-colors">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Izbornik</span>
            </button>
          </div>
        </div>
      </Container>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
