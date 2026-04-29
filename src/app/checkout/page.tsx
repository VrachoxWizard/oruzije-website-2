import React from "react";
import { Container } from "@/components/layout/container";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Naplata | Pointershop",
};

export default function CheckoutPage() {
  return (
    <div className="py-8 bg-[var(--color-stone-50)] min-h-screen">
      <Container>
        <div className="mb-8">
          <Link href="/cart" className="text-sm font-medium text-stone-500 hover:text-[var(--color-copper-500)] flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Natrag u košaricu
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-forest-950)] mb-6">Podaci o dostavi</h2>
              
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Ime</label>
                  <input type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="Unesite ime" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Prezime</label>
                  <input type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="Unesite prezime" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700">Email</label>
                  <input type="email" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="vas.email@primjer.com" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700">Adresa</label>
                  <input type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="Ulica i kućni broj" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Poštanski broj</label>
                  <input type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="Npr. 10000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-stone-700">Grad</label>
                  <input type="text" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="Npr. Zagreb" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-stone-700">Telefon</label>
                  <input type="tel" className="w-full border border-stone-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[var(--color-copper-500)] outline-none" placeholder="+385 9x xxx xxxx" />
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--color-forest-950)] mb-6">Način plaćanja</h2>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:border-[var(--color-copper-500)] bg-stone-50">
                  <input type="radio" name="payment" defaultChecked className="accent-[var(--color-copper-500)] w-4 h-4" />
                  <span className="font-semibold text-stone-700">Kreditna ili debitna kartica</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:border-[var(--color-copper-500)]">
                  <input type="radio" name="payment" className="accent-[var(--color-copper-500)] w-4 h-4" />
                  <span className="font-semibold text-stone-700">Plaćanje po ponudi / Bankovna transakcija</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:border-[var(--color-copper-500)]">
                  <input type="radio" name="payment" className="accent-[var(--color-copper-500)] w-4 h-4" />
                  <span className="font-semibold text-stone-700">Pouzećem (prilikom dostave)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-24">
              <h3 className="text-lg font-bold text-[var(--color-forest-950)] mb-4">Vaša narudžba</h3>
              
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6 flex gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-900 text-sm">Sigurna naplata</h4>
                  <p className="text-xs text-amber-800 mt-1">
                    Svi podaci su kriptirani. Ako narudžba sadrži regulirane proizvode, biti će preusmjerena na ručni pregled.
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-6 mt-6">
                <Button size="lg" className="w-full">
                  Naruči
                </Button>
                <p className="text-xs text-stone-500 text-center mt-4 px-2">
                  Klikom na Naruči prihvaćate naše Uvjete korištenja i Pravila privatnosti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
