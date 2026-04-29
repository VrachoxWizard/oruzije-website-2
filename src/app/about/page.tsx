import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "O trgovini",
  description: "PointerShop je premium hrvatski katalog za opremu za lov, streljaštvo i teren.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
            O trgovini
          </p>
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
            Specijalistički katalog s odgovornim kupovnim tokovima.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-stone-600">
            Ova web stranica je premium demo ecommerce iskustvo za hrvatsku trgovinu opremom za lov, streljaštvo i
            boravak na terenu. Podaci o poslovanju su placeholderi dok ih vlasnik trgovine ne potvrdi.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            { icon: MapPin, title: "Drniš", text: "Fizička trgovina i lokalni kontakt kao oslonac povjerenja." },
            { icon: Users, title: "Stručna podrška", text: "Preporuke prema namjeni, uvjetima korištenja i iskustvu." },
            { icon: ShieldCheck, title: "Jasni uvjeti", text: "Regulirani proizvodi nisu tretirani kao impulzivna kupnja." },
            { icon: Sparkles, title: "Premium UX", text: "Čitljiv katalog, usporedba, filteri i jasne CTA akcije." },
          ].map((item) => (
            <div key={item.title} className="rounded-[var(--radius-lg)] border border-stone-200 bg-white p-5 shadow-sm">
              <item.icon className="mb-4 h-6 w-6 text-[var(--color-copper-500)]" />
              <h2 className="mb-2 text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">{item.title}</h2>
              <p className="text-sm font-medium leading-relaxed text-stone-500">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[var(--radius-xl)] bg-[var(--color-forest-950)] p-8 text-white md:p-10">
          <h2 className="mb-3 text-3xl font-black uppercase italic tracking-tight">Trebate pomoć pri odabiru?</h2>
          <p className="mb-6 max-w-2xl text-sm font-medium leading-relaxed text-white/60">
            Pošaljite nam namjenu, budžet i uvjete korištenja. Za regulirane artikle objasnit ćemo potrebne korake bez
            pravnog savjetovanja.
          </p>
          <Button asChild className="rounded-2xl bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-copper-500)] hover:text-white">
            <Link href="/contact">Kontaktirajte trgovinu</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
