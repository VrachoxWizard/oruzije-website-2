import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte PointerShop za dostupnost, preporuku opreme ili upit za regulirani asortiman.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
              Kontakt
            </p>
            <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
              Pitajte za preporuku ili dostupnost.
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-stone-600">
              Pošaljite upit s namjenom, budžetom i uvjetima korištenja. Za regulirani asortiman trgovina potvrđuje
              dokumentaciju, dobne uvjete i način preuzimanja prije kupnje.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                { icon: MapPin, label: "Lokacija", value: siteConfig.address },
                { icon: Phone, label: "Telefon", value: siteConfig.phone },
                { icon: Mail, label: "Email", value: siteConfig.email },
              ].map((item) => (
                <div key={item.label} className="rounded-[var(--radius-lg)] border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-[var(--color-copper-500)]" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">{item.label}</p>
                      <p className="text-sm font-black text-[var(--color-forest-950)]">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex gap-4 rounded-2xl bg-[var(--color-forest-950)] p-5 text-white">
              <ShieldCheck className="h-6 w-6 shrink-0 text-[var(--color-copper-500)]" />
              <p className="text-sm font-medium leading-relaxed text-white/65">
                Kontakt forma je statična u MVP-u. U produkciji je treba povezati s emailom, CRM-om ili backendom.
              </p>
            </div>
            <form className="grid gap-5">
              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Ime i prezime</span>
                <Input placeholder="Vaše ime" />
              </label>
              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Email</span>
                <Input type="email" placeholder="ime@email.hr" />
              </label>
              <label>
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Poruka</span>
                <Textarea placeholder="Napišite nam što tražite..." />
              </label>
              <Button asChild className="rounded-2xl">
                <Link href={`mailto:${siteConfig.email}`}>Pošalji email</Link>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
