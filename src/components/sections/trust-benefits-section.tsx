import React from "react";
import { Container } from "@/components/layout/container";
import { ShieldCheck, Truck, MapPin, Award, CheckCircle, Package } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Stručna podrška",
    description: "Pomažemo vam pri odabiru opreme svojim dugogodišnjim iskustvom."
  },
  {
    icon: MapPin,
    title: "Fizička trgovina",
    description: "Posjetite nas u Drnišu i osobno pregledajte asortiman."
  },
  {
    icon: ShieldCheck,
    title: "Sigurna kupnja",
    description: "Zajamčena sigurnost pri online plaćanju i zaštita podataka."
  },
  {
    icon: Truck,
    title: "Besplatna dostava",
    description: "Za sve narudžbe iznad 150 € osiguravamo besplatnu dostavu u RH."
  },
  {
    icon: CheckCircle,
    title: "Provjereni brendovi",
    description: "Nudimo samo certificiranu i pouzdanu opremu."
  },
  {
    icon: Package,
    title: "Jasni uvjeti",
    description: "Transparentna pravila za kupnju reguliranog asortimana."
  }
];

export function TrustBenefitsSection() {
  return (
    <section className="py-20 bg-[var(--color-forest-950)] text-white border-t-4 border-[var(--color-copper-500)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-[var(--radius-lg)] bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
              <div className="shrink-0">
                <benefit.icon className="w-8 h-8 text-[var(--color-copper-500)]" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-lg">{benefit.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
