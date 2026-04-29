import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function ContactCtaSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-forest-950)] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-copper-500)]/15 text-[var(--color-copper-500)]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black uppercase italic tracking-tight md:text-5xl">
                Trebate preporuku prije kupnje?
              </h2>
              <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/55">
                Budući da backend ne postoji, ovaj MVP koristi kontakt/upit kao pošteniji završetak
                od lažnog newslettera ili plaćanja.
              </p>
            </div>
            <Link href="/contact">
              <Button className="rounded-2xl bg-white text-[var(--color-forest-950)] hover:bg-[var(--color-copper-500)] hover:text-white">
                Pošalji upit
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
