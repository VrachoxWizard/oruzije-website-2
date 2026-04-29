import React from "react";
import { Truck, Phone, ShieldCheck } from "lucide-react";

export function TopAnnouncementBar() {
  return (
    <div className="bg-[var(--color-forest-950)] text-white/90 text-xs py-2 w-full">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8 flex flex-row items-center justify-between gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        <div className="flex items-center gap-2">
          <Truck className="w-3.5 h-3.5 text-[var(--color-copper-500)]" />
          <span>Besplatna dostava iznad 150 €</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-copper-500)]" />
          <span>Sigurna kupnja & Provjera uvjeta za regulirani asortiman</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[var(--color-copper-500)]" />
          <span>Stručna podrška: +385 1 234 5678</span>
        </div>
      </div>
    </div>
  );
}
