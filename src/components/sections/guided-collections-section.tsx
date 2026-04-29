import Link from "next/link";
import { ArrowRight, CloudRain, Crosshair, Moon, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/layout/container";

const collections = [
  {
    title: "Za hladno i mokro vrijeme",
    description: "Jakne, čizme i slojevi za duži boravak na terenu.",
    href: "/shop?useCase=hladno-mokro-vrijeme",
    icon: CloudRain,
  },
  {
    title: "Za noćni izlazak na teren",
    description: "Svjetiljke, termalni uređaji i organizacija opreme.",
    href: "/shop?useCase=nocni-teren",
    icon: Moon,
  },
  {
    title: "Za precizno ciljanje",
    description: "Optike, dvogledi i katalog reguliranih artikala za upit.",
    href: "/shop?useCase=precizno-ciljanje",
    icon: Crosshair,
  },
  {
    title: "Za održavanje opreme",
    description: "Sredstva, pribor i dodaci za redovitu brigu o opremi.",
    href: "/shop?useCase=odrzavanje-opreme",
    icon: Wrench,
  },
  {
    title: "Za početak outdoor opreme",
    description: "Pametan početni komplet: obuća, slojevi, svjetlo, torba.",
    href: "/shop?useCase=pocetak-outdoor-opreme",
    icon: ShieldCheck,
  },
];

export function GuidedCollectionsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
            Kupujte prema namjeni.
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
            Vodič kroz opremu za realne situacije: vrijeme, vidljivost, održavanje i osnovni
            terenski komplet.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {collections.map((collection) => (
            <Link
              key={collection.title}
              href={collection.href}
              className="group flex min-h-64 flex-col rounded-[var(--radius-xl)] border border-stone-200 bg-[var(--color-stone-50)] p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-forest-950)] text-[var(--color-copper-500)]">
                <collection.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-black uppercase italic leading-tight text-[var(--color-forest-950)]">
                {collection.title}
              </h3>
              <p className="mb-6 text-sm font-medium leading-relaxed text-stone-500">{collection.description}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">
                Otvori kolekciju <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
