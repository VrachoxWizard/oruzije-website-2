import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { faqs } from "@/data/faqs";

export function FaqPreviewSection() {
  return (
    <section className="bg-[var(--color-stone-50)] py-20 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
              Česta pitanja.
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
              Brzi odgovori o dostavi, reguliranim proizvodima, dostupnosti i ručnim narudžbama.
            </p>
            <Link
              href="/faq"
              className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[var(--color-copper-500)]"
            >
              Sva pitanja <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.slice(0, 6).map((faq) => (
              <article key={faq.id} className="rounded-[var(--radius-lg)] border border-stone-200 bg-white p-5">
                <h3 className="mb-2 text-sm font-black uppercase text-[var(--color-forest-950)]">{faq.question}</h3>
                <p className="line-clamp-4 text-sm font-medium leading-relaxed text-stone-500">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
