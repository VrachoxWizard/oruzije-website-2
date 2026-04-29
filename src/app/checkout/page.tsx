"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, ShieldAlert, ShoppingBag, Truck } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ShippingProgress } from "@/components/cart/shipping-progress";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/lib/cart-store";
import { canAddToCart } from "@/lib/compliance";
import { formatPrice } from "@/lib/utils";

const checkoutSchema = z.object({
  firstName: z.string().min(2, "Unesite ime."),
  lastName: z.string().min(2, "Unesite prezime."),
  email: z.string().email("Unesite ispravnu email adresu."),
  phone: z.string().min(6, "Unesite telefonski broj."),
  deliveryMethod: z.enum(["delivery", "pickup"]),
  address: z.string().min(4, "Unesite adresu."),
  city: z.string().min(2, "Unesite grad."),
  postalCode: z.string().min(4, "Unesite poštanski broj."),
  notes: z.string().optional(),
  consent: z.boolean().refine((value) => value, "Potvrdite uvjete prije slanja."),
});

type CheckoutValues = z.infer<typeof checkoutSchema>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-xs font-bold text-[var(--color-danger)]">{message}</p>;
}

export default function CheckoutPage() {
  const [submitted, setSubmitted] = useState(false);
  const { items, getTotals } = useCartStore();
  const { total, itemCount } = getTotals();
  const delivery = total >= 150 ? 0 : 5;
  const grandTotal = total + delivery;
  const containsRestrictedItem = items.some((item) => !canAddToCart(item.product));

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      deliveryMethod: "delivery",
      consent: false,
    },
  });

  const onSubmit = (values: CheckoutValues) => {
    setSubmitted(true);
    toast.success(containsRestrictedItem ? "Upit je pripremljen za ručnu obradu." : "Narudžba je pripremljena za potvrdu.", {
      description:
        values.deliveryMethod === "pickup"
          ? "Odabrano je osobno preuzimanje u trgovini."
          : "Ovo je MVP tok bez online naplate i bez slanja stvarnog zahtjeva.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 bg-texture py-16">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[var(--radius-xl)] border border-stone-200 bg-white p-8 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-3xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
              Zahtjev je evidentiran u demo toku
            </h1>
            <p className="mb-8 text-sm font-medium leading-relaxed text-stone-500">
              Nije izvršena online naplata i nije poslan stvarni email. U produkciji bi ovaj korak kreirao narudžbu,
              rezervaciju ili upit za ručnu provjeru prema vrsti proizvoda.
            </p>
            <Button asChild className="rounded-2xl">
              <Link href="/shop">Natrag u trgovinu</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 bg-texture py-12 md:py-16">
      <Container>
        <div className="mb-10">
          <Link
            href="/cart"
            className="mb-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-[var(--color-forest-950)]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white">
              <ArrowLeft className="h-4 w-4" />
            </span>
            Natrag u košaricu
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[var(--color-copper-500)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">
              Checkout MVP
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-black uppercase italic leading-none tracking-tight text-[var(--color-forest-950)] sm:text-4xl md:text-5xl">
            Dovršetak narudžbe
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-12 text-center shadow-sm">
            <ShoppingBag className="mx-auto mb-5 h-10 w-10 text-stone-300" />
            <h2 className="mb-3 text-2xl font-black uppercase italic text-[var(--color-forest-950)]">Košarica je prazna</h2>
            <p className="mb-8 text-sm font-medium text-stone-500">Dodajte standardne artikle prije checkouta.</p>
            <Button asChild className="rounded-2xl">
              <Link href="/shop">Pregledaj trgovinu</Link>
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-6">
              <section className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-forest-950)] text-sm font-black text-white">
                    1
                  </div>
                  <h2 className="text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                    Kontakt i dostava
                  </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Ime</span>
                    <Input {...register("firstName")} autoComplete="given-name" />
                    <FieldError message={errors.firstName?.message} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Prezime</span>
                    <Input {...register("lastName")} autoComplete="family-name" />
                    <FieldError message={errors.lastName?.message} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Email</span>
                    <Input type="email" {...register("email")} autoComplete="email" />
                    <FieldError message={errors.email?.message} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Telefon</span>
                    <Input {...register("phone")} autoComplete="tel" />
                    <FieldError message={errors.phone?.message} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Način isporuke</span>
                    <Select {...register("deliveryMethod")}>
                      <option value="delivery">Dostava za standardne artikle</option>
                      <option value="pickup">Osobno preuzimanje u trgovini</option>
                    </Select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Adresa</span>
                    <Input {...register("address")} autoComplete="street-address" />
                    <FieldError message={errors.address?.message} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Grad</span>
                    <Input {...register("city")} autoComplete="address-level2" />
                    <FieldError message={errors.city?.message} />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Poštanski broj</span>
                    <Input {...register("postalCode")} autoComplete="postal-code" />
                    <FieldError message={errors.postalCode?.message} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-stone-400">Napomena</span>
                    <Textarea {...register("notes")} placeholder="Namjena, željeni termin preuzimanja ili dodatne informacije..." />
                  </label>
                </div>
              </section>

              <section className="rounded-[var(--radius-xl)] border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-forest-950)] text-sm font-black text-white">
                    2
                  </div>
                  <h2 className="text-xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
                    Uvjeti i obrada
                  </h2>
                </div>

                <div className="rounded-2xl border border-[var(--color-copper-500)]/20 bg-[var(--color-copper-500)]/10 p-5">
                  <div className="flex gap-4">
                    <ShieldAlert className="h-6 w-6 shrink-0 text-[var(--color-copper-600)]" />
                    <p className="text-sm font-medium leading-relaxed text-stone-700">
                      Nema online kartične naplate u ovom MVP-u. Slanje forme predstavlja zahtjev za potvrdu narudžbe,
                      rezervaciju ili ručnu provjeru, ovisno o asortimanu i uvjetima kupnje.
                    </p>
                  </div>
                </div>

                <Controller
                  control={control}
                  name="consent"
                  render={({ field }) => (
                    <div className="mt-6">
                      <label className="flex items-start gap-3">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          aria-describedby="consent-error"
                        />
                        <span className="text-sm font-medium leading-relaxed text-stone-600">
                          Razumijem da je ovo zahtjev za ručnu potvrdu i da regulirani proizvodi mogu zahtijevati
                          dokumentaciju, dobnu provjeru ili osobno preuzimanje.
                        </span>
                      </label>
                      <div id="consent-error">
                        <FieldError message={errors.consent?.message} />
                      </div>
                    </div>
                  )}
                />
              </section>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <ShippingProgress total={total} />
              <div className="rounded-[var(--radius-xl)] bg-[var(--color-forest-950)] p-6 text-white shadow-2xl shadow-forest-950/15">
                <div className="mb-6 flex items-center gap-3">
                  <Truck className="h-5 w-5 text-[var(--color-copper-500)]" />
                  <h2 className="text-xl font-black uppercase italic tracking-tight">Pregled narudžbe</h2>
                </div>

                <div className="mb-6 space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white/10">
                        <Image src={item.product.images[0]} alt="" fill sizes="56px" className="object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-2 text-xs font-bold text-white">{item.product.name}</p>
                        <p className="text-[10px] font-black text-white/40">
                          {item.quantity} x {formatPrice(item.product.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-5 text-xs font-black uppercase tracking-widest text-white/45">
                  <div className="flex justify-between">
                    <span>Artikli ({itemCount})</span>
                    <span className="text-white">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dostava</span>
                    <span className={delivery === 0 ? "text-emerald-400" : "text-white"}>
                      {delivery === 0 ? "Besplatna" : formatPrice(delivery)}
                    </span>
                  </div>
                  <div className="flex items-end justify-between border-t border-white/10 pt-4">
                    <span className="text-[var(--color-copper-500)]">Ukupno</span>
                    <span className="text-3xl font-black italic tracking-tight text-white">{formatPrice(grandTotal)}</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 h-14 w-full rounded-2xl bg-[var(--color-copper-500)] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--color-copper-600)]"
                >
                  {containsRestrictedItem ? "Pošalji upit" : "Pošalji narudžbu"}
                </Button>
                <p className="mt-4 text-center text-[9px] font-black uppercase tracking-widest text-white/25">
                  Bez online naplate u demo verziji
                </p>
              </div>
            </aside>
          </form>
        )}
      </Container>
    </div>
  );
}
