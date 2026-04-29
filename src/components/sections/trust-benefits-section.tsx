import React from "react";
import { Container } from "@/components/layout/container";
import { ShieldCheck, Truck, MapPin, Award, CheckCircle, Package } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Award,
    title: "Stručna podrška",
    description: "Savjetujemo vas na temelju desetljeća iskustva na terenu i dubokog poznavanja balistike i optike."
  },
  {
    icon: MapPin,
    title: "Fizička poslovnica",
    description: "Naša vrata u Drnišu su vam uvijek otvorena za osobne konzultacije i preuzimanje regulirane opreme."
  },
  {
    icon: ShieldCheck,
    title: "Sigurna kupnja",
    description: "Svi procesi su usklađeni s najvišim sigurnosnim standardima i zakonskim regulativama RH."
  },
  {
    icon: Truck,
    title: "Besplatna dostava",
    description: "Za sve narudžbe iznad 150 € osiguravamo brzu i sigurnu dostavu direktno na vašu adresu."
  },
  {
    icon: CheckCircle,
    title: "Originalni Proizvodi",
    description: "Surađujemo isključivo s ovlaštenim dobavljačima, jamčeći autentičnost svakog artikla u ponudi."
  },
  {
    icon: Package,
    title: "Diskretna Dostava",
    description: "Vaša privatnost nam je prioritet. Svi paketi se dostavljaju u neutralnoj ambalaži bez vanjskih oznaka."
  }
];

export function TrustBenefitsSection() {
  return (
    <section className="py-24 bg-[var(--color-forest-950)] text-white relative overflow-hidden bg-texture">
      {/* Aesthetic Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-copper-500)] to-transparent opacity-50" />
      
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-5 h-5 text-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Standardi Povjerenja</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-6">
            Zašto Odabrati <span className="text-[var(--color-copper-500)]">PointerShop</span>?
          </h2>
          <p className="text-white/50 font-medium leading-relaxed">
            Više od trgovine — mi smo vaš partner u svakoj avanturi. Naša predanost kvaliteti i 
            profesionalizmu osigurava vam bezbrižno iskustvo kupnje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-10 rounded-[var(--radius-2xl)] bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <benefit.icon className="w-24 h-24 text-white" />
              </div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-copper-500)]/10 flex items-center justify-center border border-[var(--color-copper-500)]/20 group-hover:bg-[var(--color-copper-500)] transition-all duration-500 shadow-lg shadow-copper-500/0 group-hover:shadow-copper-500/20 group-hover:scale-110 group-hover:rotate-3">
                  <benefit.icon className="w-6 h-6 text-[var(--color-copper-500)] group-hover:text-white transition-colors" />
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-black text-xl uppercase tracking-tight group-hover:text-[var(--color-copper-500)] transition-colors">{benefit.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-white/5 rounded-br-[var(--radius-2xl)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

