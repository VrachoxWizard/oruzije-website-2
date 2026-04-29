import type { Metadata } from "next";
import { Truck } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Dostava",
  description: "Informativni uvjeti dostave za PointerShop katalog.",
};

export default function DeliveryPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <Truck className="mb-5 h-8 w-8 text-[var(--color-copper-500)]" />
          <h1 className="mb-5 text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Dostava</h1>
          <div className="space-y-5 text-sm font-medium leading-relaxed text-stone-600">
            <p>
              Standardni artikli mogu biti dostupni za dostavu na adresu kupca. Besplatna dostava iznad 150 € prikazana
              je kao demo pravilo i treba je potvrditi vlasnik trgovine.
            </p>
            <p>
              Regulirani, pickup-only ili drugi posebno označeni proizvodi mogu zahtijevati osobno preuzimanje,
              dokumentaciju ili prethodnu provjeru uvjeta kupnje.
            </p>
            <p className="rounded-2xl bg-stone-50 p-4 text-xs">
              Ovaj tekst nije pravni dokument. Konačne uvjete dostave treba pregledati i odobriti poslovni ili pravni
              vlasnik trgovine.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
