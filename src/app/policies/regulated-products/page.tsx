import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Regulirani proizvodi",
  description: "Objašnjenje upita, rezervacije i provjere uvjeta kupnje za regulirani asortiman.",
};

export default function RegulatedProductsPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <ShieldAlert className="mb-5 h-8 w-8 text-[var(--color-copper-500)]" />
          <h1 className="mb-5 text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Regulirani proizvodi
          </h1>
          <div className="space-y-5 text-sm font-medium leading-relaxed text-stone-600">
            <p>
              Artikli označeni kao dobno ograničeni, pickup-only ili regulirani upit nisu dostupni kao impulzivna
              online kupnja. Sustav prikazuje upit, rezervaciju ili provjeru uvjeta kupnje.
            </p>
            <p>
              Trgovina može zatražiti dokumentaciju, dokaz punoljetnosti, osobno preuzimanje i ručnu provjeru prije bilo
              kakve prodaje ili predaje proizvoda.
            </p>
            <p>
              Ova stranica ne daje pravni savjet i ne tumači propise. Konačne uvjete mora definirati vlasnik trgovine u
              skladu s važećim propisima i internim procedurama.
            </p>
          </div>
          <Button asChild className="mt-8 rounded-2xl">
            <Link href="/contact">Pošalji upit trgovini</Link>
          </Button>
        </article>
      </Container>
    </div>
  );
}
