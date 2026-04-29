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

export function ProductReviews({ productId }: { productId: string }) {
  return (
    <div className="py-20 bg-stone-50 border-y border-stone-200 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-forest-950)] mb-2">Recenzije kupaca</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-[var(--color-copper-500)]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-stone-500 font-medium">4.8 od 5 (12 ocjena)</span>
            </div>
          </div>
          <button className="bg-[var(--color-forest-950)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-copper-500)] transition-all shadow-lg">
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
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-[var(--color-forest-950)]">{review.user}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        <CheckCircle2 className="w-3 h-3" />
                        Potvrđen kupac
                      </span>
                    )}
                  </div>
                  <div className="flex text-[var(--color-copper-500)] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? "fill-current" : "text-stone-200"}`} />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-stone-400 font-medium">{review.date}</span>
              </div>
              
              <p className="text-stone-600 leading-relaxed mb-4">
                {review.comment}
              </p>

              <div className="flex flex-wrap gap-2">
                {review.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-stone-500 bg-stone-100 px-3 py-1 rounded-full uppercase tracking-wider">
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
