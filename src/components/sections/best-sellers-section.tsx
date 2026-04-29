import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ProductCard } from "@/components/product/product-card";
import { getBestSellers } from "@/lib/product-utils";

export function BestSellersSection() {
  const bestSellers = getBestSellers().slice(0, 4);

  return (
    <section className="bg-[var(--color-stone-50)] py-20 md:py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
              Najtraženije ovaj tjedan.
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
              Popularni artikli iz standardnog i reguliranog kataloga, s CTA-ovima koji poštuju
              uvjete kupnje.
            </p>
          </div>
          <Link href="/shop?sort=best-sellers">
            <Button variant="outline" className="rounded-2xl border-stone-200">
              Vidi sve
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-forest-950)] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h3 className="text-3xl font-black uppercase italic tracking-tight">
                Tražite specifičnu opremu?
              </h3>
              <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white/55">
                Pošaljite upit s namjenom i okvirnim budžetom. Za regulirani asortiman trgovina će
                vas uputiti u dokumentaciju, dostupnost i preuzimanje.
              </p>
            </div>
            <Link href="/contact">
              <Button className="rounded-2xl bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-copper-500)] hover:text-white">
                Pošalji upit
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
