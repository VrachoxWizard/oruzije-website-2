import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Vodiči",
  description: "Kratki vodiči za odabir opreme, optike i razumijevanje reguliranih kupovnih tokova.",
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
            Vodiči
          </p>
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
            Brze smjernice za bolji odabir.
          </h1>
          <p className="mt-5 text-base font-medium leading-relaxed text-stone-600">
            Ovi vodiči su informativni demo sadržaj i ne zamjenjuju stručni, pravni ili sigurnosni savjet vlasnika
            trgovine i nadležnih propisa.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Compass, title: "Odabir outdoor opreme", text: "Uskladite slojeve odjeće, obuću i ruksak s vremenskim uvjetima.", href: "/shop?useCase=teren" },
            { icon: SlidersHorizontal, title: "Usporedba optike", text: "Provjerite povećanje, objektiv, montažu i uvjete korištenja prije kupnje.", href: "/categories/optike" },
            { icon: ShieldAlert, title: "Regulirani asortiman", text: "Saznajte kako funkcioniraju upit, rezervacija i ručna provjera uvjeta.", href: "/policies/regulated-products" },
          ].map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-950/5"
            >
              <guide.icon className="mb-5 h-7 w-7 text-[var(--color-copper-500)]" />
              <h2 className="mb-3 text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">{guide.title}</h2>
              <p className="mb-6 text-sm font-medium leading-relaxed text-stone-500">{guide.text}</p>
              <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-600)]">
                Otvori
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
