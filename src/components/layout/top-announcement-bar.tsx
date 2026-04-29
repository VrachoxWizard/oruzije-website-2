import React from "react";
import { Truck, Phone, ShieldCheck } from "lucide-react";

export function TopAnnouncementBar() {
  return (
    <div className="bg-[var(--color-forest-950)] text-white/50 text-[9px] font-black uppercase tracking-[0.2em] py-3 w-full border-b border-white/5 bg-texture">
      <div className="mx-auto w-full max-w-[1400px] px-6 flex flex-row items-center justify-center gap-12 overflow-x-auto no-scrollbar whitespace-nowrap">
        <div className="flex items-center gap-2 group cursor-default">
          <Truck className="w-3.5 h-3.5 text-[var(--color-copper-500)] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-white transition-colors">Besplatna dostava iznad 150 €</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
        <div className="flex items-center gap-2 group cursor-default">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-copper-500)] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-white transition-colors">Ovlašteni distributer lovačke opreme</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
        <div className="flex items-center gap-2 group cursor-default">
          <Phone className="w-3.5 h-3.5 text-[var(--color-copper-500)] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-white transition-colors">Podrška: +385 1 234 5678</span>
        </div>
      </div>
    </div>
  );
}


