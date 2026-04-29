import { Star } from "lucide-react";
import { Container } from "@/components/layout/container";
import { reviews } from "@/data/reviews";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)] md:text-5xl">
            Iskustva kupaca.
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-stone-500">
            Ovi prikazi su mock podaci za dizajn i testiranje. Nisu verificirane stvarne recenzije.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-[var(--radius-xl)] border border-stone-200 bg-[var(--color-stone-50)] p-6">
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={index < review.rating ? "h-4 w-4 fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" : "h-4 w-4 text-stone-300"}
                  />
                ))}
              </div>
              <p className="mb-5 text-sm font-medium leading-relaxed text-stone-600">{review.text}</p>
              <p className="text-sm font-black text-[var(--color-forest-950)]">{review.author}</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-stone-400">{review.context}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
