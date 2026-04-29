import type { Metadata } from "next";
import Link from "next/link";
import { User } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Korisnički račun",
  description: "Placeholder za budući korisnički račun i povijest narudžbi.",
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-16">
      <Container>
        <div className="mx-auto max-w-xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-10 text-center shadow-sm">
          <User className="mx-auto mb-5 h-10 w-10 text-[var(--color-copper-500)]" />
          <h1 className="mb-3 text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Korisnički račun</h1>
          <p className="mb-8 text-sm font-medium leading-relaxed text-stone-500">
            Prijava, narudžbe i korisnički profili nisu uključeni u ovaj statični MVP. Integracija autentikacije može se
            dodati naknadno.
          </p>
          <Button asChild className="rounded-2xl">
            <Link href="/contact">Kontaktirajte trgovinu</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
