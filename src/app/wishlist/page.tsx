import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lista želja",
  description: "Lista želja je placeholder stranica za buduću funkcionalnost korisničkog računa.",
};

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-16">
      <Container>
        <div className="mx-auto max-w-xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-10 text-center shadow-sm">
          <Heart className="mx-auto mb-5 h-10 w-10 text-[var(--color-copper-500)]" />
          <h1 className="mb-3 text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Lista želja</h1>
          <p className="mb-8 text-sm font-medium leading-relaxed text-stone-500">
            Ova funkcionalnost je spremna kao UI ulaz, ali zahtijeva korisnički račun ili lokalnu pohranu u idućoj fazi.
          </p>
          <Button asChild className="rounded-2xl">
            <Link href="/shop">Nastavi pregled kataloga</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
