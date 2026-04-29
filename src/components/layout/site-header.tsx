"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Heart, Menu, Search, ShoppingCart, Scale, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/categories";
import { useCartStore } from "@/lib/cart-store";
import { useComparisonStore } from "@/lib/comparison-store";
import { cn, formatPrice } from "@/lib/utils";
import { Container } from "./container";
import { MegaMenu } from "./mega-menu";
import { SearchOverlay } from "./search-overlay";
import { TopAnnouncementBar } from "./top-announcement-bar";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setIsOpen: setCartOpen, getTotals } = useCartStore();
  const compareCount = useComparisonStore((state) => state.items.length);
  const { total, itemCount } = getTotals();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "border-b border-stone-200 bg-white/95 shadow-header backdrop-blur-md"
          : "border-b border-stone-200 bg-[var(--color-stone-50)]/90 backdrop-blur-md",
      )}
    >
      <TopAnnouncementBar />
      <Container>
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-forest-950)] text-xl font-black text-white">
              P
            </div>
            <span className="hidden text-xl font-black uppercase tracking-tighter text-[var(--color-forest-950)] sm:inline md:text-2xl">
              Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
            </span>
          </Link>

          <MegaMenu />

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="group hidden h-11 w-11 items-center justify-center gap-3 rounded-full border border-stone-200 bg-stone-100 px-0 transition-all hover:bg-stone-200 sm:flex xl:w-auto xl:px-4"
            >
              <Search className="h-4 w-4 text-stone-500 group-hover:text-[var(--color-forest-950)]" />
              <span className="hidden text-[10px] font-black uppercase tracking-widest text-stone-500 xl:block">
                Pretraži
              </span>
              <kbd className="hidden rounded bg-white px-1.5 py-0.5 text-[9px] font-black text-stone-400 xl:block">
                Ctrl K
              </kbd>
            </button>

            <div className="hidden items-center gap-1 sm:flex">
              <Link
                href="/wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-forest-900)] transition-all hover:bg-stone-100 hover:text-[var(--color-copper-500)]"
              >
                <Heart className="h-5 w-5" />
                <span className="sr-only">Lista želja</span>
              </Link>
              <Link
                href="/compare"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-forest-900)] transition-all hover:bg-stone-100 hover:text-[var(--color-copper-500)]"
              >
                <Scale className="h-5 w-5" />
                {compareCount > 0 && (
                  <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-copper-500)] text-[9px] font-black text-white">
                    {compareCount}
                  </span>
                )}
                <span className="sr-only">Usporedba</span>
              </Link>
              <Link
                href="/account"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-forest-900)] transition-all hover:bg-stone-100 hover:text-[var(--color-copper-500)]"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Korisnički račun</span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="group hidden h-11 w-11 items-center justify-center gap-3 rounded-full bg-[var(--color-forest-950)] px-0 text-white shadow-md transition-all hover:bg-[var(--color-forest-900)] hover:shadow-lg sm:flex lg:w-auto lg:px-4"
            >
              <span className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -right-1 -top-3 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-copper-500)] text-[9px] font-black text-white ring-2 ring-[var(--color-forest-950)]">
                  {itemCount}
                </span>
              </span>
              <span className="hidden text-xs font-black uppercase tracking-widest lg:block">{formatPrice(total)}</span>
            </button>

            <Dialog.Root open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  style={{ position: "fixed", left: "min(330px, calc(100vw - 60px))", top: 80 }}
                  className="z-[95] flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-forest-900)] shadow-md transition-colors hover:bg-stone-100 hover:text-[var(--color-copper-500)] lg:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Otvori izbornik</span>
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-[90] bg-[var(--color-forest-950)]/65 backdrop-blur-sm" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-[91] flex w-full max-w-sm flex-col bg-white shadow-2xl focus:outline-none">
                  <div className="flex items-center justify-between border-b border-stone-100 p-5">
                    <Dialog.Title className="text-lg font-black uppercase text-[var(--color-forest-950)]">
                      Izbornik
                    </Dialog.Title>
                    <Dialog.Close className="flex h-10 w-10 items-center justify-center rounded-full text-stone-400 hover:bg-stone-100 hover:text-[var(--color-forest-950)]">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Zatvori izbornik</span>
                    </Dialog.Close>
                  </div>
                  <div className="flex-1 overflow-y-auto p-5">
                    <Button
                      variant="outline"
                      className="mb-6 w-full justify-start rounded-2xl border-stone-200 text-left"
                      onClick={() => {
                        setIsMobileOpen(false);
                        setIsSearchOpen(true);
                      }}
                    >
                      <Search className="h-4 w-4" />
                      Pretraži katalog
                    </Button>

                    <div className="space-y-5">
                      {categories.map((category) => (
                        <div key={category.slug} className="rounded-2xl border border-stone-200 p-4">
                          <Link
                            href={`/categories/${category.slug}`}
                            onClick={() => setIsMobileOpen(false)}
                            className="flex items-center justify-between text-sm font-black uppercase tracking-widest text-[var(--color-forest-950)]"
                          >
                            {category.name}
                            {category.isRegulated && (
                              <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] text-red-700">
                                Provjera
                              </span>
                            )}
                          </Link>
                          <div className="mt-3 grid gap-2">
                            {category.subcategories?.slice(0, 4).map((sub) => (
                              <Link
                                key={sub.slug}
                                href={`/shop?category=${category.slug}&subcategory=${sub.slug}`}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-sm font-medium text-stone-500"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-stone-100 p-5">
                    <div className="mb-4 grid grid-cols-2 gap-3">
                      <Link
                        href="/compare"
                        onClick={() => setIsMobileOpen(false)}
                        className="rounded-2xl border border-stone-200 p-4 text-center text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]"
                      >
                        Usporedba ({compareCount})
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setIsMobileOpen(false);
                          setCartOpen(true);
                        }}
                        className="rounded-2xl border border-stone-200 p-4 text-center text-[10px] font-black uppercase tracking-widest text-[var(--color-forest-950)]"
                      >
                        Košarica ({itemCount})
                      </button>
                    </div>
                    <Button asChild className="w-full rounded-2xl">
                      <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                        Pitaj za preporuku
                      </Link>
                    </Button>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </Container>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}
