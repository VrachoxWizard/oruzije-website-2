import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Privatnost",
  description: "Informativna politika privatnosti za demo katalog.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <LockKeyhole className="mb-5 h-8 w-8 text-[var(--color-copper-500)]" />
          <h1 className="mb-5 text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Privatnost
          </h1>
          <div className="space-y-5 text-sm font-medium leading-relaxed text-stone-600">
            <p>
              Ovaj MVP nema stvarnu obradu narudžbi, plaćanja ili email slanja. Kontakt i checkout forme prikazuju UI tok
              koji bi u produkciji trebalo povezati s backendom i pravilima obrade osobnih podataka.
            </p>
            <p>
              U produkcijskoj verziji potrebno je jasno navesti voditelja obrade, svrhe obrade, rokove čuvanja,
              kolačiće, prava korisnika i kontakt za privatnost.
            </p>
            <p className="rounded-2xl bg-stone-50 p-4 text-xs">
              Konačnu politiku privatnosti treba pregledati kvalificirana osoba za zaštitu podataka ili pravni savjetnik.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
