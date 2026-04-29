import React from "react";
import Link from "next/link";
import { Container } from "./container";
import { Phone, Mail, MapPin, Globe, Share2, ShieldCheck, Truck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-forest-950)] text-white pt-16 pb-8 border-t-4 border-[var(--color-copper-500)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Story */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Pointer<span className="text-[var(--color-copper-500)]">Shop</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Profesionalna oprema za lov, streljaštvo i boravak na terenu. Vaš pouzdani partner s fizičkom trgovinom u Drnišu i dugogodišnjim iskustvom.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-copper-500)] transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Website</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[var(--color-copper-500)] transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="sr-only">Social</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Trgovina</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/categories/oruzje" className="hover:text-[var(--color-copper-500)] transition-colors">Oružje (Regulirano)</Link></li>
              <li><Link href="/categories/streljivo" className="hover:text-[var(--color-copper-500)] transition-colors">Streljivo (Regulirano)</Link></li>
              <li><Link href="/categories/odjeca" className="hover:text-[var(--color-copper-500)] transition-colors">Odjeća</Link></li>
              <li><Link href="/categories/obuca" className="hover:text-[var(--color-copper-500)] transition-colors">Obuća</Link></li>
              <li><Link href="/categories/oprema" className="hover:text-[var(--color-copper-500)] transition-colors">Oprema i optika</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Podrška</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/faq" className="hover:text-[var(--color-copper-500)] transition-colors">Česta pitanja</Link></li>
              <li><Link href="/policies/delivery" className="hover:text-[var(--color-copper-500)] transition-colors">Dostava</Link></li>
              <li><Link href="/policies/returns" className="hover:text-[var(--color-copper-500)] transition-colors">Povrati i zamjene</Link></li>
              <li><Link href="/policies/regulated-products" className="hover:text-[var(--color-copper-500)] transition-colors flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5" /> Uvjeti za oružje</Link></li>
              <li><Link href="/guides" className="hover:text-[var(--color-copper-500)] transition-colors">Vodiči za kupnju</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-white mb-2">Kontakt</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-copper-500)] shrink-0" />
                <span>Trg Kralja Tomislava 1<br />22320 Drniš, Hrvatska</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--color-copper-500)] shrink-0" />
                <span>+385 1 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--color-copper-500)] shrink-0" />
                <span>info@pointershop.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Pointer Trgovina d.o.o. Sva prava pridržana.</p>
          <div className="flex items-center gap-4">
            <Link href="/policies/terms" className="hover:text-white transition-colors">Uvjeti korištenja</Link>
            <Link href="/policies/privacy" className="hover:text-white transition-colors">Pravila privatnosti</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
