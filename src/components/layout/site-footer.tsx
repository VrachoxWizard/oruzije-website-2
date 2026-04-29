import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";
import { categories } from "@/data/categories";
import { siteConfig } from "@/lib/seo";
import { Container } from "./container";

const policyLinks = [
  { label: "Dostava", href: "/policies/delivery" },
  { label: "Povrati i zamjene", href: "/policies/returns" },
  { label: "Privatnost", href: "/policies/privacy" },
  { label: "Regulirani proizvodi", href: "/policies/regulated-products" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-forest-950)] py-16 text-white md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.6fr] lg:gap-20">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl font-black text-[var(--color-forest-950)]">
                P
              </div>
              <span className="text-3xl font-black uppercase italic tracking-tighter">
                Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
              </span>
            </Link>
            <div className="max-w-md space-y-4">
              <h2 className="text-3xl font-black uppercase italic tracking-tight">
                Stručna oprema za teren, uz jasne uvjete kupnje.
              </h2>
              <p className="text-sm font-medium leading-relaxed text-white/55">
                Hrvatski katalog za lov, streljaštvo i outdoor opremu. Standardni proizvodi vode se kroz narudžbu, a
                regulirani asortiman kroz upit, provjeru i dogovor s trgovinom.
              </p>
            </div>
            <div className="grid gap-3 text-sm font-bold text-white/65">
              <span className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--color-copper-500)]" />
                {siteConfig.address}
              </span>
              <span className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--color-copper-500)]" />
                {siteConfig.phone}
              </span>
              <span className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--color-copper-500)]" />
                {siteConfig.email}
              </span>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h3 className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Kategorije
              </h3>
              <ul className="space-y-3 text-sm font-bold text-white/55">
                {categories.slice(0, 8).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/categories/${category.slug}`} className="transition-colors hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Podrška
              </h3>
              <ul className="space-y-3 text-sm font-bold text-white/55">
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    O trgovini
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="transition-colors hover:text-white">
                    Česta pitanja
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="transition-colors hover:text-white">
                    Vodiči
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Pravila
              </h3>
              <ul className="space-y-3 text-sm font-bold text-white/55">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t border-white/10 pt-8 text-xs font-bold text-white/45 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-wrap gap-5">
            <span className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-[var(--color-copper-500)]" />
              Dostava iznad 150 €
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[var(--color-copper-500)]" />
              Jasni uvjeti za regulirani asortiman
            </span>
          </div>
          <p>© 2026 PointerShop. Sadržaj i pravila treba potvrditi vlasnik trgovine.</p>
        </div>
      </Container>
    </footer>
  );
}
