import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { faqs } from "@/data/faqs";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Česta pitanja",
  description: "Odgovori na česta pitanja o dostavi, dostupnosti, reguliranim proizvodima i kontaktu.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-14 md:py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd(faqs) }} />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
            FAQ
          </p>
          <h1 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-6xl">
            Česta pitanja
          </h1>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-[var(--radius-lg)] border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                {faq.question}
              </h2>
              <p className="text-sm font-medium leading-relaxed text-stone-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
