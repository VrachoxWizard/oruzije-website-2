import Link from "next/link";
import { MapPin, MessageCircle, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/seo";

export function BrandStorySection() {
  return (
    <section className="bg-[var(--color-stone-50)] py-20 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
              Lokalna trgovina, profesionalan katalog.
            </h2>
            <p className="mt-6 text-base font-medium leading-relaxed text-stone-600">
              PointerShop je zamišljen kao specijalistički ecommerce/catalog frontend za kupce koji
              traže jasnu kategorizaciju, dobar pregled proizvoda i odgovoran pristup reguliranom
              asortimanu.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
              Točni poslovni podaci, pravni tekst i kontakt detalji u ovom MVP-u označeni su kao
              placeholders i trebaju potvrdu vlasnika trgovine prije produkcije.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about">
                <Button className="rounded-2xl">Saznaj više</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="rounded-2xl border-stone-200">
                  Kontaktiraj trgovinu
                </Button>
              </Link>
            </div>
          </div>

          <aside className="rounded-[var(--radius-2xl)] border border-stone-200 bg-white p-8 shadow-[var(--shadow-card)]">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-forest-950)] text-[var(--color-copper-500)]">
              <Store className="h-7 w-7" />
            </div>
            <h3 className="mb-5 text-2xl font-black uppercase italic text-[var(--color-forest-950)]">
              Drniš kontakt
            </h3>
            <div className="space-y-4 text-sm font-bold text-stone-600">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-[var(--color-copper-500)]" />
                {siteConfig.address}
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-[var(--color-copper-500)]" />
                {siteConfig.email}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
