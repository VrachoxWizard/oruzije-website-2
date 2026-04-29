"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    user: "Ivan M.",
    rating: 5,
    date: "12.03.2024.",
    comment: "Vrhunska optika. Jasnoća slike je nevjerojatna čak i u sumrak. Montaža je bila jednostavna i drži nulu bez problema.",
    verified: true,
    tags: ["Kvalitetna izrada", "Preporučujem"],
  },
  {
    id: 2,
    user: "Marko P.",
    rating: 4,
    date: "05.02.2024.",
    comment: "Jako dobar proizvod za ovu cijenu. Malo je teži nego što sam očekivao, ali performanse su odlične.",
    verified: true,
    tags: ["Dobar omjer cijene i kvalitete"],
  },
];

export function ProductReviews({ productId: _productId }: { productId: string }) {
  return (
    <div className="py-24 bg-white border-y border-stone-200 mt-24 bg-texture">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)]">Povratne Informacije</span>
            </div>
            <h2 className="text-4xl font-black text-[var(--color-forest-950)] uppercase italic tracking-tight mb-4">Recenzije <span className="text-[var(--color-copper-500)]">Kupaca</span></h2>
            <div className="flex items-center gap-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className={`w-5 h-5 ${s <= 4 ? "fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" : "text-stone-200"}`} />
                ))}
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-stone-400">4.8 od 5 (12 ocjena)</span>
            </div>
          </div>
          <button className="bg-[var(--color-forest-950)] text-white px-10 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-copper-500)] transition-all shadow-2xl shadow-forest-950/20 active:scale-[0.98]">
            Napiši recenziju
          </button>
        </div>

        <div className="space-y-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-stone-50/50 p-10 rounded-[var(--radius-3xl)] border border-stone-200 shadow-inner group hover:bg-white transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span className="font-black text-sm uppercase tracking-tight text-[var(--color-forest-950)]">{review.user}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1.5 text-[8px] font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-[0.15em] border border-emerald-100">
                        <CheckCircle2 className="w-3 h-3" />
                        Potvrđen kupac
                      </span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-[var(--color-amber-400)] text-[var(--color-amber-400)]" : "text-stone-200"}`} />
                    ))}
                  </div>
                </div>
                <span className="text-[9px] text-stone-400 font-black uppercase tracking-widest">{review.date}</span>
              </div>
              
              <p className="text-stone-600 font-medium leading-relaxed mb-8 italic">
                &quot;{review.comment}&quot;
              </p>

              <div className="flex flex-wrap gap-3">
                {review.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black text-stone-500 bg-white border border-stone-100 px-4 py-1.5 rounded-full uppercase tracking-[0.1em] group-hover:border-[var(--color-copper-500)]/30 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

