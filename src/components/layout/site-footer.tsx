import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Globe, Share2, ShieldCheck, Truck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-forest-950)] text-white pt-24 pb-12 border-t border-white/5 bg-texture relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-copper-500)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-[var(--color-forest-950)] font-black text-2xl">P</span>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
                Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
              </span>
            </Link>
            
            <h3 className="text-3xl font-black uppercase italic tracking-tight leading-[1.1] max-w-md">
              Vrhunska Oprema za <span className="text-[var(--color-copper-500)]">Profesionalne</span> Lovce.
            </h3>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-medium">
              Od 1994. godine, Pointer Shop pruža beskompromisnu kvalitetu i stručnost u svijetu lovačke opreme. Naša misija je osigurati pouzdanost u svakom trenutku na terenu.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Sjedište</span>
                <span className="text-xs font-bold">Drniš, Hrvatska</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">Telefon</span>
                <span className="text-xs font-bold">+385 1 234 5678</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.3em]">Trgovina</h4>
              <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
                <li><Link href="/categories/oruzje" className="hover:text-white transition-colors">Oružje</Link></li>
                <li><Link href="/categories/streljivo" className="hover:text-white transition-colors">Streljivo</Link></li>
                <li><Link href="/categories/optika" className="hover:text-white transition-colors">Optika</Link></li>
                <li><Link href="/categories/odjeca" className="hover:text-white transition-colors">Odjeća</Link></li>
                <li><Link href="/categories/oprema" className="hover:text-white transition-colors">Oprema</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h4 className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.3em]">Informacije</h4>
              <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
                <li><Link href="/about" className="hover:text-white transition-colors">O Nama</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Lovački Blog</Link></li>
                <li><Link href="/guides" className="hover:text-white transition-colors">Vodiči</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Podrška</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-black text-[var(--color-copper-500)] uppercase tracking-[0.3em]">Pravila</h4>
              <ul className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
                <li><Link href="/policies/regulated" className="hover:text-white transition-colors">Zakon o oružju</Link></li>
                <li><Link href="/policies/delivery" className="hover:text-white transition-colors">Dostava</Link></li>
                <li><Link href="/policies/returns" className="hover:text-white transition-colors">Povrati</Link></li>
                <li><Link href="/policies/privacy" className="hover:text-white transition-colors">Privatnost</Link></li>
                <li><Link href="/policies/terms" className="hover:text-white transition-colors">Uvjeti</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Trust Badges/Payment Methods */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-tight">Sigurna Kupnja</span>
                <span className="text-[8px] font-bold uppercase tracking-widest">SSL Certificirano</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8" />
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-tight">Pouzdana Dostava</span>
                <span className="text-[8px] font-bold uppercase tracking-widest">Hrvatska Pošta / GLS</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
              &copy; {new Date().getFullYear()} Pointer Trgovina d.o.o. Sva prava pridržana.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-[var(--color-copper-500)] transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-white/30 hover:text-[var(--color-copper-500)] transition-colors"><Share2 className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

