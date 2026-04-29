import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Povrati i zamjene",
  description: "Informativna stranica o povratima i zamjenama.",
};

export default function ReturnsPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-8 shadow-sm md:p-10">
          <RotateCcw className="mb-5 h-8 w-8 text-[var(--color-copper-500)]" />
          <h1 className="mb-5 text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
            Povrati i zamjene
          </h1>
          <div className="space-y-5 text-sm font-medium leading-relaxed text-stone-600">
            <p>
              Za standardne artikle povrati i zamjene ovise o stanju proizvoda, roku prijave i važećim pravilima
              trgovine. Kupac treba kontaktirati trgovinu prije slanja proizvoda.
            </p>
            <p>
              Regulirani proizvodi, artikli s dokumentacijom ili proizvodi koji zahtijevaju osobno preuzimanje mogu imati
              posebna ograničenja i ručnu obradu zahtjeva.
            </p>
            <p className="rounded-2xl bg-stone-50 p-4 text-xs">
              Ovaj tekst je placeholder i nije pravni savjet. Konačne uvjete mora potvrditi vlasnik trgovine.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
