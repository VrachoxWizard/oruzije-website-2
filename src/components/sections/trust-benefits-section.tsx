import { CheckCircle, MapPin, PackageCheck, ShieldCheck, Truck, Users } from "lucide-react";
import { Container } from "@/components/layout/container";

const benefits = [
  {
    icon: MapPin,
    title: "Fizička trgovina u Drnišu",
    description: "Kupci mogu provjeriti opremu, dogovoriti preuzimanje i dobiti osobni savjet.",
  },
  {
    icon: Users,
    title: "Stručna podrška",
    description: "Pomoć pri odabiru obuće, optike, dodatne opreme i odgovarajućeg pribora.",
  },
  {
    icon: Truck,
    title: "Dostava iznad 150 €",
    description: "Standardni proizvodi imaju jasno prikazan prag za besplatnu dostavu.",
  },
  {
    icon: ShieldCheck,
    title: "Sigurna kupnja",
    description: "Bez lažnog plaćanja u MVP-u: narudžbe su ručne i transparentno objašnjene.",
  },
  {
    icon: PackageCheck,
    title: "Jasni uvjeti za regulirani asortiman",
    description: "Regulirani artikli vode kroz upit, dokumentaciju, provjeru i dogovoreno preuzimanje.",
  },
  {
    icon: CheckCircle,
    title: "Provjereni brendovi",
    description: "Mock katalog koristi zamjenjive proizvode i neutralan opis bez kopiranja tuđeg sadržaja.",
  },
];

export function TrustBenefitsSection() {
  return (
    <section className="bg-[var(--color-forest-950)] py-20 text-white md:py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-black uppercase italic tracking-tight md:text-5xl">
            Povjerenje prije kupnje.
          </h2>
          <p className="mt-5 text-sm font-medium leading-relaxed text-white/55">
            Premium ecommerce za ovu kategoriju ne znači pritisak na brzu kupnju. Znači dobar izbor,
            čitljive uvjete i sigurnu komunikaciju.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.045] p-7 transition-all hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-copper-500)]/15 text-[var(--color-copper-500)]">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-lg font-black uppercase tracking-tight">{benefit.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-white/50">{benefit.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
