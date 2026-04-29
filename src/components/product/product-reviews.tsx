"use client";

import { CheckCircle2, Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { cn } from "@/lib/utils";

type ProductReviewsProps = {
  productId: string;
  compact?: boolean;
};

export function ProductReviews({ productId, compact = false }: ProductReviewsProps) {
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section
      className={cn(
        "bg-white bg-texture",
        compact ? "py-0" : "mt-20 border-y border-stone-200 py-20",
      )}
      aria-labelledby={`reviews-${productId}`}
    >
      <div className={compact ? "" : "mx-auto max-w-4xl px-6"}>
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">
                Mock recenzije
              </span>
            </div>
            <h2
              id={`reviews-${productId}`}
              className="text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]"
            >
              Povratne informacije
            </h2>
            <p className="mt-2 text-xs font-medium leading-relaxed text-stone-500">
              Recenzije su prikazne mock stavke za dizajn i nisu stvarne verificirane recenzije kupaca.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "h-4 w-4",
                    star <= Math.round(average)
                      ? "fill-[var(--color-amber-400)] text-[var(--color-amber-400)]"
                      : "text-stone-200",
                  )}
                />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
              {average.toFixed(1)} / 5
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {reviews.slice(0, compact ? 2 : 4).map((review) => (
            <article
              key={review.id}
              className="rounded-[var(--radius-lg)] border border-stone-200 bg-stone-50 p-5 shadow-sm"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">
                    {review.author}
                  </h3>
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          "h-3.5 w-3.5",
                          star <= review.rating
                            ? "fill-[var(--color-amber-400)] text-[var(--color-amber-400)]"
                            : "text-stone-200",
                        )}
                      />
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-[8px] font-black uppercase tracking-widest text-stone-500">
                  <CheckCircle2 className="h-3 w-3 text-[var(--color-copper-500)]" />
                  Mock
                </span>
              </div>
              <p className="mb-4 text-sm font-medium leading-relaxed text-stone-600">&quot;{review.text}&quot;</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-stone-400">{review.context}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
