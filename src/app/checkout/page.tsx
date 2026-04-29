import Link from "next/link";
import { CreditCard, Truck, History, ArrowLeft, ShoppingBag, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="py-20 bg-stone-50 min-h-screen bg-texture">
      <Container>
        <div className="mb-12">
          <Link href="/cart" className="group inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[var(--color-forest-950)] group-hover:text-white transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 group-hover:text-[var(--color-forest-950)] transition-colors">Natrag u košaricu</span>
          </Link>
        </div>

        <div className="flex flex-col gap-4 mb-16">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Sigurno Plaćanje</span>
          </div>
          <h1 className="text-5xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Dovršetak <span className="text-[var(--color-copper-500)]">Narudžbe</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {/* Shipping Info */}
            <div className="bg-white rounded-[var(--radius-3xl)] border border-stone-200 p-10 shadow-sm shadow-forest-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <Truck className="w-32 h-32" />
              </div>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-forest-950)] text-white flex items-center justify-center font-black italic">1</div>
                <h2 className="text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Podaci o dostavi</h2>
              </div>
              
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Ime</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="npr. Ivan" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Prezime</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="npr. Horvat" />
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Email Adresa</label>
                  <input type="email" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="ivan.horvat@email.hr" />
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Adresa Stanovanja</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="Ulica kralja Zvonimira 12" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Grad</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="npr. Drniš" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Poštanski Broj</label>
                  <input type="text" className="w-full bg-stone-50 border border-stone-100 rounded-xl px-5 py-4 text-sm font-bold placeholder:text-stone-300 focus:ring-2 focus:ring-[var(--color-copper-500)]/20 focus:border-[var(--color-copper-500)] outline-none transition-all shadow-inner" placeholder="22320" />
                </div>
              </form>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-[var(--radius-3xl)] border border-stone-200 p-10 shadow-sm shadow-forest-950/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <CreditCard className="w-32 h-32" />
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-forest-950)] text-white flex items-center justify-center font-black italic">2</div>
                <h2 className="text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Način plaćanja</h2>
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                <label className="group flex items-center justify-between p-6 border-2 border-stone-100 rounded-[var(--radius-2xl)] cursor-pointer hover:border-[var(--color-copper-500)]/30 transition-all bg-stone-50/50 hover:bg-white has-[:checked]:border-[var(--color-copper-500)] has-[:checked]:bg-white has-[:checked]:shadow-xl has-[:checked]:shadow-copper-500/5">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-stone-200 flex items-center justify-center group-hover:border-[var(--color-copper-500)] transition-colors peer-checked:border-[var(--color-copper-500)]">
                      <input type="radio" name="payment" defaultChecked className="peer opacity-0 absolute" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper-500)] opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">Kreditna Kartica</span>
                  </div>
                  <div className="flex gap-2 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                    <div className="w-8 h-5 bg-stone-200 rounded" />
                    <div className="w-8 h-5 bg-stone-200 rounded" />
                  </div>
                </label>

                <label className="group flex items-center justify-between p-6 border-2 border-stone-100 rounded-[var(--radius-2xl)] cursor-pointer hover:border-[var(--color-copper-500)]/30 transition-all bg-stone-50/50 hover:bg-white has-[:checked]:border-[var(--color-copper-500)] has-[:checked]:bg-white has-[:checked]:shadow-xl has-[:checked]:shadow-copper-500/5">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-stone-200 flex items-center justify-center group-hover:border-[var(--color-copper-500)] transition-colors">
                      <input type="radio" name="payment" className="peer opacity-0 absolute" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper-500)] opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">Plaćanje po Ponudi</span>
                  </div>
                </label>

                <label className="group flex items-center justify-between p-6 border-2 border-stone-100 rounded-[var(--radius-2xl)] cursor-pointer hover:border-[var(--color-copper-500)]/30 transition-all bg-stone-50/50 hover:bg-white has-[:checked]:border-[var(--color-copper-500)] has-[:checked]:bg-white has-[:checked]:shadow-xl has-[:checked]:shadow-copper-500/5">
                  <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-stone-200 flex items-center justify-center group-hover:border-[var(--color-copper-500)] transition-colors">
                      <input type="radio" name="payment" className="peer opacity-0 absolute" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-copper-500)] opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight text-[var(--color-forest-950)]">Plaćanje Pouzećem</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-[var(--color-forest-950)] rounded-[var(--radius-3xl)] p-10 shadow-2xl shadow-forest-950/20 sticky top-24 text-white overflow-hidden bg-texture">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShoppingBag className="w-24 h-24" />
              </div>

              <div className="relative z-10 flex flex-col gap-8">
                <h3 className="text-xl font-black uppercase italic tracking-tight mb-2">Pregled Narudžbe</h3>
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    <span>Međuzbroj</span>
                    <span className="text-white">€1,240.00</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    <span>Dostava</span>
                    <span className="text-emerald-400">Besplatna</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-copper-500)] mb-1">Ukupno za plaćanje</span>
                    <span className="text-4xl font-black italic tracking-tighter">€1,240.00</span>
                  </div>
                </div>

                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-[var(--color-copper-500)] shrink-0" />
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Sigurna Transakcija</h4>
                    <p className="text-[9px] text-white/40 font-medium leading-relaxed">
                      Vaša sigurnost je prioritet. Svi podaci su kriptirani. Regulirani proizvodi zahtijevaju ručni pregled dokumentacije.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <Button size="lg" className="h-16 rounded-2xl bg-[var(--color-copper-500)] hover:bg-[var(--color-copper-600)] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-copper-500/20 border-none transition-all active:scale-[0.98]">
                    Dovrši Narudžbu
                  </Button>
                  <p className="text-[9px] text-white/20 font-black uppercase tracking-[0.1em] text-center leading-relaxed">
                    Potvrdom narudžbe prihvaćate naše <br />
                    <Link href="/terms" className="text-white/40 hover:text-[var(--color-copper-500)] transition-colors underline decoration-dotted">Uvjete</Link> i <Link href="/privacy" className="text-white/40 hover:text-[var(--color-copper-500)] transition-colors underline decoration-dotted">Pravila Privatnosti</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

