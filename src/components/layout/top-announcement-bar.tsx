import { MapPin, ShieldCheck, Store, Truck, Users } from "lucide-react";

const messages = [
  { icon: Truck, text: "Besplatna dostava iznad 150 €" },
  { icon: Store, text: "Fizička trgovina u Drnišu" },
  { icon: Users, text: "Stručna podrška pri odabiru" },
  { icon: ShieldCheck, text: "Regulirani proizvodi: provjera uvjeta kupnje" },
  { icon: MapPin, text: "Sigurna kupnja" },
];

export function TopAnnouncementBar() {
  return (
    <div className="w-full overflow-hidden border-b border-white/10 bg-[var(--color-forest-950)] py-2.5 text-white/65">
      <div className="mx-auto flex w-full max-w-[1400px] items-center gap-6 overflow-x-auto px-4 text-[10px] font-black uppercase tracking-[0.18em] scrollbar-hide md:px-8">
        {messages.map((message) => (
          <div key={message.text} className="flex shrink-0 items-center gap-2">
            <message.icon className="h-3.5 w-3.5 text-[var(--color-copper-500)]" />
            <span>{message.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
