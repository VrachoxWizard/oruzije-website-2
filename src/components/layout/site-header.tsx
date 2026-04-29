"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Heart, Scale, Menu } from "lucide-react";
import { Container } from "./container";
import { TopAnnouncementBar } from "./top-announcement-bar";
import { MegaMenu } from "./mega-menu";
import { SearchOverlay } from "./search-overlay";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={cn(
      "w-full sticky top-0 z-40 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-header" 
        : "bg-[var(--color-stone-50)]/80 backdrop-blur-md border-b border-stone-200"
    )}>
      <TopAnnouncementBar />
      <Container>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[var(--color-forest-950)] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-[var(--color-forest-950)] uppercase">
              Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <MegaMenu />

          {/* Icons & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="group flex items-center gap-3 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-full transition-all border border-stone-200"
            >
              <Search className="w-4 h-4 text-stone-500 group-hover:text-[var(--color-forest-950)]" />
              <span className="hidden xl:block text-[10px] font-bold text-stone-400 uppercase tracking-widest">Pretraži <kbd className="ml-2 text-[8px] bg-stone-300 text-stone-600 px-1.5 py-0.5 rounded opacity-50 group-hover:opacity-100 transition-opacity">⌘K</kbd></span>
            </button>
            
            <div className="hidden sm:flex items-center gap-1 md:gap-2">
              <Link href="/wishlist" className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] hover:bg-stone-100 transition-all relative">
                <Heart className="w-5 h-5" />
                <span className="sr-only">Lista želja</span>
              </Link>
              <Link href="/compare" className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] hover:bg-stone-100 transition-all relative">
                <Scale className="w-5 h-5" />
                <span className="sr-only">Usporedba</span>
              </Link>
              <Link href="/account" className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] hover:bg-stone-100 transition-all">
                <User className="w-5 h-5" />
                <span className="sr-only">Korisnički račun</span>
              </Link>
            </div>
            
            <div className="h-8 w-px bg-stone-200 mx-1 hidden sm:block" />

            <button className="flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--color-forest-950)] text-white hover:bg-[var(--color-forest-900)] transition-all shadow-md hover:shadow-lg hover:shadow-forest-950/20 group">
              <div className="relative">
                <ShoppingCart className="w-4 h-4 transition-transform group-hover:-rotate-12" />
                <span className="absolute -top-3 -right-3 bg-[var(--color-copper-500)] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-[var(--color-forest-950)]">
                  0
                </span>
              </div>
              <span className="hidden lg:block text-xs font-bold uppercase tracking-widest">0,00 €</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--color-forest-900)] hover:text-[var(--color-copper-500)] transition-colors">
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

