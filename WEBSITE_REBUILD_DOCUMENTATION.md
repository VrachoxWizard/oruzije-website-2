# WEBSITE_REBUILD_DOCUMENTATION.md

# Pointershop.net Ecommerce Rebuild Documentation

**Project:** Rebuild the same type of ecommerce website as Pointershop, but with a significantly more modern, premium, trustworthy, mobile-first and conversion-focused user experience.

**Recommended stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion / Motion, modern UI primitives, accessible forms, SEO metadata, optimized product data architecture.

**Important compliance note:** Pointershop sells regulated hunting, sport shooting, ammunition and outdoor equipment. The rebuild must never treat regulated products like normal consumer goods without legal checks. The UI should clearly separate normal ecommerce products from legally restricted products and include age/licence verification, pickup-only messaging, compliance notices, and manual order review where required by Croatian/EU law.

---

## Source Basis

This document is based on publicly indexed pages and snippets from Pointershop and related public listings. The site blocks some direct automated fetching, but indexed pages expose enough structure for a UX/UI and architecture audit.

Key observations used:

- Pointershop is an online shop for hunting, sport shooting, ammunition, clothing, footwear, optics and outdoor equipment.
- Public listings describe Pointer Trgovina as specialized in hunting and modern weapons, ammunition, hunting equipment, clothing and outdoor equipment.
- The website includes categories such as ORUŽJE, STRELJIVO, ODJEĆA, OBUĆA, OPREMA, OPTIKE, NOŽEVI, SVJETILJKE, RUKSACI I TORBE, etc.
- Product listing pages show WooCommerce-style product grids with stock badges, wishlist, compare, quick view, price, add-to-cart, sorting, filters by price/brand/size, breadcrumbs and repeated category copy.
- The current site includes contact/business information: Drniš location, phone and email.
- External partner pages mention discounts and state that weapons and ammunition may require physical-store purchase / verification.

Reference URLs:

- https://pointershop.net/
- https://pointershop.net/trgovina/
- https://pointershop.net/product-category/oruzje/
- https://pointershop.net/product-category/streljivo/
- https://pointershop.net/product-category/odjeca/jakne/
- https://pointershop.net/product-category/obuca/cizme/
- https://pointershop.net/product-category/oruzje/dugo-oruzje/zracno/
- https://pointershop.net/contact-us/
- https://pointershop.net/about-us/
- https://www.njuskalo.hr/trgovina/PointerTrgovina
- https://www.vatrogasac.org/clanske-pogodnosti-589/
- https://tailwindcss.com/docs/guides/nextjs
- https://nextjs.org/docs/app
- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- https://motion.dev/docs

---

# 1. Project Overview

Pointershop is a Croatian ecommerce website focused on hunting, sport shooting and outdoor equipment. Its current catalog includes regulated categories such as firearms and ammunition, plus broader outdoor products such as clothing, boots, optics, lights, knives, backpacks, bags and maintenance accessories.

The goal of the redesign is not to clone the current visual style. The goal is to preserve the business purpose and product/category structure while rebuilding the experience into a polished, premium ecommerce platform that feels trustworthy, easy to browse, fast, mobile-first and more conversion-oriented.

The improved website should feel like a serious specialist shop, not a generic WooCommerce template. It should help users quickly understand:

- What the shop sells.
- Which product categories are available.
- Which products are in stock.
- Which items can be bought online and which require in-store pickup / licence verification.
- Why Pointershop is trustworthy.
- How to contact the store quickly.
- How to compare, filter and discover products without friction.

Primary redesign outcome:

> A modern specialist ecommerce experience for hunting, sport shooting and outdoor gear, with premium visuals, clearer navigation, better product cards, stronger trust signals, improved mobile shopping, better legal/compliance messaging and a scalable Next.js frontend architecture.

---

# 2. Current Website Analysis

## 2.1 Website Purpose and Business Model

The current website functions as an ecommerce/catalog shop for Pointer Trgovina. It sells or presents products for hunters, sport shooters and outdoor users. Product categories include firearms, ammunition, clothing, footwear, optics, lights, knives, backpacks, bags and maintenance equipment.

The business model appears to combine:

- Standard ecommerce for general outdoor goods.
- Catalog/order flow for regulated items.
- Physical-store support in Drniš.
- Phone/email contact for questions and verification.
- Promotions/discounts through partner organizations.

Because some products are regulated, the rebuild should not blindly implement a normal one-click checkout for every product type. Product availability and checkout behavior should vary by product compliance level.

## 2.2 Target Audience

Likely user groups:

1. **Experienced hunters**
   - Need fast category access, reliable stock information, brands, calibre/type filters, field-ready gear and clear delivery/pickup rules.

2. **Sport shooters**
   - Need product specs, compatibility, optics, ammunition, firearm categories, comparison tools and expert trust.

3. **Outdoor enthusiasts**
   - Need boots, jackets, backpacks, lights and practical outdoor gear, with less legal complexity.

4. **First-time or casual customers**
   - Need clear explanations, simple navigation, product guidance, safe purchase steps and contact reassurance.

5. **Local Croatian buyers**
   - Need Croatian language, location/contact visibility, delivery info, payment info and legal clarity.

## 2.3 Existing Page Structure

Observed structure resembles a WooCommerce shop:

- Home
- Shop / Trgovina
- Category pages
- Product detail pages
- Cart / Košarica
- My Account / Moj račun
- Compare
- Search
- Contact / Kontaktirajte nas
- About / O nama
- Privacy policy / Pravila privatnosti

Main categories:

- ORUŽJE
  - Dugo oružje
  - Sačmarice
  - Karabini
  - Moderno oružje
  - Rabljeno
  - Kratko oružje
  - Plinsko oružje
  - Zračno oružje
  - Čišćenje i održavanje oružja
  - Futrole i navlake
- STRELJIVO
  - Sačmeno
  - Malokalibarsko
  - Karabinsko
  - Diabole
  - Reloading
- ODJEĆA
  - Jakne
  - Hlače
  - Kape
  - Kratke majice
- OBUĆA
  - Čizme
  - Cipele, visible in indexed pages
- OPREMA
  - Oprema za lov
  - Optike
  - Crvene točke
  - Dnevne optike
  - Noćni i termalni uređaji
  - Šine i prstenje
  - Svjetiljke
  - Noževi
  - Fiksni noževi
  - Preklopni noževi
  - Ruksaci i torbe

## 2.4 Existing Navigation and User Flow

Current navigation is category-heavy and functional, but likely overwhelming. It exposes many categories directly in the menu without enough visual grouping, editorial guidance or conversion prioritization.

Current likely flow:

1. User lands on homepage or category page.
2. User opens large menu or search.
3. User selects a category.
4. User browses product grid.
5. User sorts/filters.
6. User clicks product.
7. User adds to cart or reads more.
8. User checks out or contacts store.

Problems:

- Too many navigation links compete for attention.
- Categories are presented more like a database than a guided shopping experience.
- Search appears basic.
- Product discovery relies heavily on menu navigation and category grids.
- There is limited storytelling around expertise, trust and store credibility.
- Compliance messaging is not prominent enough for regulated product flows.

## 2.5 Product and Category Presentation

Product listing pages show typical WooCommerce elements:

- Product image
- Stock badge such as In Stock / Out Of Stock / On backorder
- Wishlist
- Compare
- Quick preview
- Product name
- Price
- Add to cart / Read more / Select options
- Sorting options
- Filters by price, brand and sometimes size
- Breadcrumbs
- Category description text

Strengths:

- Product grid exists.
- Categories are indexed and structured.
- Basic filters exist.
- Stock state is shown.
- Compare/wishlist/quick view features exist.

Weaknesses:

- Product cards feel generic and busy.
- Stock labels are inconsistent with the Croatian UI language.
- Category text is long and repeated, creating visual clutter.
- Product cards do not strongly highlight key specs, use case or trust information.
- Buttons are functional but not visually premium.
- Compare/wishlist/quick-view actions may feel small and cluttered on mobile.
- There is not enough guided merchandising: best sellers, staff picks, bundles, seasonal categories, beginner recommendations.

## 2.6 Homepage Layout

The indexed homepage snippets indicate a standard shop landing page with menu, shipping notice, cart/account links and category access. The current homepage does not appear to communicate a strong premium brand story or modern product-discovery flow.

A better homepage should behave like a specialist ecommerce storefront:

1. Quickly explain the shop and value proposition.
2. Offer category shortcuts for different buyer intents.
3. Showcase best sellers and featured products.
4. Build trust through store location, support, delivery, secure payment and regulated purchase clarity.
5. Provide seasonal / use-case based shopping paths.
6. Encourage contact for regulated or technical items.

## 2.7 Visual Identity

Current visual identity appears theme-based rather than custom-designed. The site likely uses a default ecommerce template style with generic spacing, standard WooCommerce layout, basic cards and simple navigation.

Observed visual issues:

- Default ecommerce look.
- Weak brand personality.
- Inconsistent language labels.
- Footer includes theme credit, which reduces premium feel.
- Product grids look utilitarian rather than curated.
- Limited premium imagery and lifestyle storytelling.

## 2.8 Typography

The current typography appears standard and functional. It likely lacks:

- Strong heading hierarchy.
- Premium editorial treatment.
- Better product-card text rhythm.
- Clear separation between category headings, descriptions, specs and actions.

Recommended improvement:

Use a modern sans-serif system such as **Geist**, **Inter**, or **Satoshi-like** typography, with strong weight hierarchy:

- Hero H1: bold, compact, premium.
- Section headings: clear and confident.
- Product names: medium weight, readable at small sizes.
- Product metadata: compact, muted, scannable.
- CTAs: clear and action-oriented.

## 2.9 Color Palette

Current palette is not clearly premium from indexed content alone. The redesign should use a visual system inspired by outdoor, precision, trust and field equipment:

- Deep forest / tactical green
- Charcoal black
- Warm sand / stone
- Copper or amber accent
- Clean off-white background
- Muted gray-green borders

Avoid overly aggressive military styling. The site should feel premium, professional and trustworthy, not like a cheap tactical template.

## 2.10 Spacing and Layout Quality

Current indexed category pages suggest a dense WooCommerce layout. Product pages and category lists likely use standard spacing, but lack luxury-grade whitespace and section rhythm.

Improvements:

- Wider breathing room on desktop.
- Better card padding.
- Cleaner visual grouping.
- Sticky category/filter controls on desktop.
- Bottom-sheet filter drawer on mobile.
- Better spacing between product images, names, specs and CTAs.
- Avoid duplicated long category text above and below grids.

## 2.11 Mobile Responsiveness

The current site likely has responsive behavior because it is built on WooCommerce/theme foundations, but responsive does not equal polished mobile UX.

Likely mobile issues:

- Deep category menu can feel heavy.
- Product card actions may be cramped.
- Filters may not be intuitive.
- Search may not be prominent enough.
- Checkout and compliance notices may be hard to scan.

Mobile-first redesign should include:

- Sticky mobile header.
- Prominent search.
- Thumb-friendly category chips.
- Filter/sort bottom sheet.
- Two-column product grid where suitable.
- Sticky add-to-cart/contact bar on product pages.
- Fast access to cart and support.

## 2.12 Conversion Elements

Current conversion elements:

- Add to cart buttons.
- Price display.
- Stock status.
- Compare.
- Wishlist.
- Quick view.
- Free shipping notice over certain value.
- Contact information.

Missing or weak conversion elements:

- Strong hero CTA.
- Category-based buyer paths.
- Trust bar near top.
- Product benefits/spec badges.
- Reviews/testimonials.
- Staff picks.
- Best sellers.
- Delivery estimate.
- Clear payment options.
- Legal purchase steps for regulated products.
- Product recommendation blocks.
- Abandoned cart and cart drawer experience.

## 2.13 Weaknesses in UX/UI

Main weaknesses:

1. **Generic template feel**
   - The site looks like a standard ecommerce installation rather than a custom specialist brand.

2. **Navigation overload**
   - Many categories are exposed at once, making it harder for non-expert users to decide where to go.

3. **Insufficient product guidance**
   - Product cards show names/prices but not enough use-case guidance, specs or decision support.

4. **Weak mobile shopping flow**
   - Product filters, category depth and product actions need a mobile-first redesign.

5. **Poor trust storytelling**
   - The website should highlight expertise, local store, support, verified products, delivery and compliance.

6. **Compliance ambiguity**
   - Regulated products need clear messaging about legal purchase requirements and pickup/verification.

7. **Visual hierarchy issues**
   - Text and cards need better hierarchy, spacing and visual rhythm.

8. **Lack of premium interactions**
   - No refined hover states, micro-interactions, cart drawer polish or smooth transitions.

## 2.14 Missing Modern Ecommerce Features

Recommended additions:

- Predictive search with product/category suggestions.
- Sticky header with category mega menu.
- Mobile search overlay.
- Product quick-add for unrestricted items.
- Regulated-product inquiry/order-review flow.
- Cart drawer.
- Wishlist.
- Compare drawer or compare page.
- Product labels: Best seller, New, Staff pick, Limited stock, Pickup only.
- Product specs preview on cards.
- Advanced filtering: category, brand, price, availability, size, calibre/type, use case.
- Sort chips and active filter chips.
- Product detail gallery with zoom.
- Related products and recently viewed products.
- FAQ accordion per category.
- Reviews/testimonials.
- Store trust bar.
- Delivery/payment/returns info cards.
- Structured data for products, breadcrumbs and organization.
- Better empty states and loading skeletons.

## 2.15 Opportunities for Improvement

Major opportunity:

> Turn Pointershop from a basic online catalog into a premium specialist ecommerce experience that feels expert-led, secure, fast and trustworthy.

High-impact improvements:

- Strong homepage with category merchandising.
- Better category navigation by user intent.
- Premium product cards with spec badges.
- Improved mobile filtering and search.
- Clear regulated-product flow.
- Strong trust section: local store, expert support, verified assortment, secure purchase, delivery.
- Product education: buying guides and FAQs.
- Modern animations that feel subtle, not flashy.
- Better SEO landing pages for categories.

---

# 3. Redesign Goals

The redesigned website should achieve these goals:

1. **Modernize the brand experience**
   - Move from generic WooCommerce style to a premium specialist ecommerce identity.

2. **Improve product discovery**
   - Make it easier to browse by category, use case, product type, brand and availability.

3. **Increase trust**
   - Show business location, contact, support, secure payment, delivery info, returns, compliance and expertise.

4. **Improve mobile UX**
   - Build mobile-first navigation, search, filters, cards and product pages.

5. **Improve conversion**
   - Add stronger CTAs, sticky cart, recommended products, trust badges and clearer purchase steps.

6. **Handle regulated products responsibly**
   - Create a compliance-aware ecommerce flow with purchase restrictions, pickup-only notices and verification states.

7. **Improve performance**
   - Use optimized images, static rendering where possible, efficient client components and lightweight animations.

8. **Improve SEO**
   - Use metadata, structured data, semantic HTML, category landing copy and optimized product pages.

9. **Prepare for future backend integration**
   - Start with static mock product data, but structure types and data access so CMS/ecommerce integration can be added later.

---

# 4. Target Audience

## Persona 1: Experienced Hunter

**Needs:**

- Fast access to category and product types.
- Clear stock and brand information.
- Durable clothing, boots, optics and accessories.
- Regulated product information.
- Trusted local shop and expert support.

**UX priorities:**

- Mega menu.
- Product specs.
- Filters.
- Availability badges.
- Contact CTA for regulated items.

## Persona 2: Sport Shooter

**Needs:**

- Optics, ammunition, firearms, maintenance accessories.
- Compatibility information.
- Comparison tools.
- Reliable stock status.
- Clear legal purchase rules.

**UX priorities:**

- Product comparison.
- Spec tables.
- Sticky inquiry/add-to-cart.
- Category guides.

## Persona 3: Outdoor Gear Buyer

**Needs:**

- Boots, jackets, backpacks, lights and equipment.
- Easy sizing and product filtering.
- Delivery and return information.
- Fast checkout.

**UX priorities:**

- Simple product cards.
- Size filters.
- Reviews.
- Quick add.
- Mobile-friendly checkout.

## Persona 4: First-Time Customer

**Needs:**

- Clear explanation of categories.
- Trust and support.
- Less intimidating product structure.
- Ability to ask questions quickly.

**UX priorities:**

- Guided category cards.
- FAQ.
- Contact CTAs.
- Buying guides.
- Friendly microcopy.

---

# 5. Improved Information Architecture

## 5.1 Recommended Sitemap

```txt
/
  Home

/shop
  All products
  Search and filters

/categories
  Category overview

/categories/oruzje
  Regulated category landing
  Legal notice
  Subcategories

/categories/oruzje/dugo-oruzje
/categories/oruzje/kratko-oruzje
/categories/oruzje/zracno-oruzje
/categories/oruzje/odrzavanje
/categories/oruzje/futrole-i-navlake

/categories/streljivo
  Regulated category landing
  Legal notice

/categories/streljivo/sacmeno
/categories/streljivo/malokalibarsko
/categories/streljivo/karabinsko
/categories/streljivo/diabole
/categories/streljivo/reloading

/categories/odjeca
/categories/odjeca/jakne
/categories/odjeca/hlace
/categories/odjeca/kape
/categories/odjeca/majice

/categories/obuca
/categories/obuca/cizme
/categories/obuca/cipele

/categories/oprema
/categories/oprema/oprema-za-lov
/categories/oprema/optike
/categories/oprema/crvene-tocke
/categories/oprema/dnevne-optike
/categories/oprema/nocni-termalni-uredaji
/categories/oprema/sine-prstenje
/categories/oprema/svjetiljke
/categories/oprema/nozevi
/categories/oprema/ruksaci-torbe

/products/[slug]
  Product detail page

/cart
  Cart

/checkout
  Checkout

/account
  Login/register/order history placeholder

/about
  Store story, location, expertise

/contact
  Contact form, phone, email, map, opening hours

/faq
  General FAQ

/policies/privacy
/policies/terms
/policies/returns
/policies/delivery
/policies/regulated-products

/guides
  Buying guides and educational content

/guides/[slug]
  Guide article
```

## 5.2 Navigation Strategy

### Desktop Header

- Top announcement bar:
  - “Besplatna dostava iznad 150 €”
  - “Trgovina u Drnišu”
  - “Pomoć pri odabiru: nazovite nas”

- Main header:
  - Logo
  - Search bar
  - Account
  - Wishlist
  - Compare
  - Cart

- Mega menu:
  - Oružje
  - Streljivo
  - Odjeća
  - Obuća
  - Oprema
  - Novo
  - Best selleri
  - Vodiči
  - Kontakt

### Mobile Header

- Sticky top header
- Logo
- Search icon
- Cart icon
- Hamburger menu
- Mobile bottom navigation:
  - Home
  - Shop
  - Search
  - Wishlist
  - Cart

### Search

- Search overlay with:
  - Product suggestions
  - Category suggestions
  - Popular searches
  - Recent searches
  - “Need help choosing?” support CTA

---

# 6. Homepage Redesign Plan

## Section 1: Announcement Bar

Purpose: communicate high-value info immediately.

Content ideas:

- Besplatna dostava iznad 150 €
- Stručna podrška pri odabiru opreme
- Regulated products: legal verification / pickup notice

Design:

- Slim dark forest bar.
- Small icon row.
- Horizontally scrolling on mobile if needed.

## Section 2: Header + Mega Navigation

Purpose: make the store feel professional and easy to browse.

Features:

- Logo.
- Prominent search bar.
- Mega menu categories.
- Cart drawer trigger.
- Account/wishlist/compare icons.

UX detail:

Mega menu should show category cards with icons and short descriptions, not just plain links.

Example:

- Oružje — regulated products, expert support required
- Streljivo — calibre/type filters
- Optike — red dots, daily optics, thermal/night devices
- Odjeća — jackets, trousers, caps
- Obuća — field boots and hiking footwear
- Oprema — lights, bags, knives, accessories

## Section 3: Hero Section

Purpose: create immediate premium impression and explain the shop.

Hero concept:

**Headline:**
“Profesionalna oprema za lov, streljaštvo i boravak na terenu.”

**Subheadline:**
“Od odjeće i obuće do optike, dodatne opreme i reguliranog asortimana — uz stručnu podršku i jasne uvjete kupnje.”

**Primary CTA:**
“Pregledaj trgovinu”

**Secondary CTA:**
“Pitaj za preporuku”

Visual direction:

- Dark premium hero with outdoor/product imagery.
- Subtle gradient overlay.
- Floating product/category cards.
- Trust chips: “Drniš”, “Stručna podrška”, “Sigurna kupnja”, “Dostava 150 €+”.

Motion:

- Slow fade/slide on hero text.
- Product cards gently appear with stagger.
- No aggressive parallax.

## Section 4: Shop by Category

Purpose: help users quickly choose a path.

Cards:

- Oružje
- Streljivo
- Optike
- Odjeća
- Obuća
- Oprema za lov
- Svjetiljke
- Ruksaci i torbe

Each card should include:

- Image/icon.
- Category name.
- Short description.
- Product count if available.
- CTA: “Istraži”.

Regulated categories should show a subtle “provjera uvjeta kupnje” badge.

## Section 5: Featured Products

Purpose: show curated inventory early.

Tabs:

- Novo
- Best selleri
- Odjeća i obuća
- Optika
- Oprema za teren

Product card improvements:

- Clean product image area.
- Stock badge.
- Brand.
- Product name.
- Price.
- Key specs chips.
- Rating/review summary if available.
- Add to cart for normal products.
- “Pošalji upit” / “Provjera uvjeta” for restricted items.

## Section 6: Benefits / Trust Section

Purpose: reduce hesitation.

Cards:

- Stručna podrška pri odabiru
- Fizička trgovina u Drnišu
- Sigurna online kupnja
- Dostava iznad 150 €
- Jasni uvjeti za regulirani asortiman
- Provjereni brendovi

## Section 7: Best Sellers

Purpose: increase conversion through social proof and merchandising.

Layout:

- Horizontal carousel on mobile.
- Responsive grid on desktop.
- Include label: “Najtraženije ovaj tjedan”.

## Section 8: Use-Case Shopping Blocks

Purpose: create guided shopping paths.

Examples:

- “Za hladno i mokro vrijeme”
- “Za noćni izlazak na teren”
- “Za precizno ciljanje”
- “Za održavanje opreme”
- “Za početak outdoor opreme”

## Section 9: Brand Story

Purpose: make Pointershop feel human and trustworthy.

Content:

- Short story about the store.
- Location in Drniš.
- Specialist assortment.
- Expert help.
- CTA to contact or visit.

Design:

- Split layout: image/map/store visual + story card.

## Section 10: Reviews / Testimonials

Purpose: build credibility.

Use:

- Customer quotes.
- Star ratings.
- Short purchase context.
- “Brza komunikacija”, “stručna preporuka”, “kvalitetna oprema”.

If real reviews are not available, use placeholder testimonial data clearly marked in the data file and replace later.

## Section 11: FAQ Preview

Purpose: answer common objections.

Questions:

- Kako funkcionira dostava?
- Mogu li kupiti regulirane proizvode online?
- Kako provjeriti dostupnost proizvoda?
- Kako mogu kontaktirati trgovinu?
- Koji su načini plaćanja?
- Kako funkcioniraju povrati i zamjene?

## Section 12: Newsletter / CTA

Purpose: capture leads.

CTA:

“Primaj novosti, akcije i vodiče za opremu.”

Fields:

- Email
- Consent checkbox

Alternative for MVP:

- Contact CTA instead of real newsletter integration.

## Section 13: Footer

Footer should feel premium and complete.

Columns:

- Shop categories
- Customer support
- Legal/policies
- Store contact
- Social links
- Payment/delivery badges

Remove generic theme credits.

---

# 7. UX/UI Improvements

## 7.1 Navigation

Current issue: category structure is deep and utilitarian.

Improvement:

- Create a clean mega menu with category groups.
- Add icons and short descriptions.
- Keep regulated categories visually distinct.
- Add direct links to “Novo”, “Best selleri”, “Vodiči” and “Kontakt”.
- Add mobile bottom navigation for common actions.

## 7.2 Product Discovery

Add:

- Category landing pages.
- Featured collections.
- Use-case shopping blocks.
- Predictive search.
- Active filter chips.
- Recently viewed products.
- Related products.

## 7.3 Filtering

Desktop:

- Sticky left filter sidebar.
- Collapsible filter groups.
- Active filter chips above grid.

Mobile:

- Bottom-sheet filter drawer.
- Sticky sort/filter bar.
- Large tap targets.

Filter groups:

- Category
- Brand
- Price
- Availability
- Size
- Product type
- Calibre/type where applicable
- Regulated / unrestricted
- Use case

## 7.4 Product Cards

Improved product cards should include:

- Product image with consistent aspect ratio.
- Badge row: New, Best seller, In stock, Out of stock, Pickup only.
- Brand label.
- Product name.
- Price.
- Short spec chips.
- Primary CTA.
- Secondary icons: wishlist, compare.
- Quick view only if it improves experience.

Regulated product CTA logic:

- Unrestricted item: “Dodaj u košaricu”.
- Restricted item: “Provjeri uvjete” or “Pošalji upit”.
- Pickup-only item: “Rezerviraj / Kontaktiraj trgovinu”.

## 7.5 Product Detail Page

Recommended layout:

- Breadcrumbs.
- Gallery with thumbnails and zoom.
- Product title.
- Brand/category.
- Price.
- Stock status.
- Key spec chips.
- Compliance notice if regulated.
- Add to cart / inquiry CTA.
- Delivery/pickup/payment cards.
- Accordion tabs:
  - Description
  - Specifications
  - Delivery and returns
  - Legal purchase conditions
  - Reviews
- Related products.
- Recently viewed.

Sticky mobile CTA:

- Price + Add to cart / Inquiry button.

## 7.6 Cart and Checkout Flow

Cart drawer:

- Opens after add to cart.
- Shows product summary.
- Quantity controls.
- Shipping threshold progress.
- Checkout CTA.

Cart page:

- Clear product table.
- Coupon field.
- Shipping estimate.
- Compliance notices.
- Recommended accessories.

Checkout:

- Simple two-column desktop layout.
- Single-column mobile layout.
- Form validation with clear errors.
- Consent checkboxes.
- Regulated-product warning if cart contains restricted items.
- Manual review / pickup messaging where needed.

## 7.7 Trust Signals

Add trust elements near major conversion points:

- Physical store location.
- Phone support.
- Secure payment.
- Delivery info.
- Returns/exchanges.
- Regulated-purchase clarity.
- Verified product assortment.
- Customer reviews.

## 7.8 Mobile Experience

Mobile UX requirements:

- Sticky header.
- Fast search access.
- Bottom nav.
- Filter drawer.
- Large CTAs.
- 2-column product grid where images remain readable.
- Sticky product CTA.
- Cart drawer.
- Avoid dense text blocks.

---

# 8. Visual Design Direction

## 8.1 Overall Mood

The redesigned site should feel:

- Premium
- Rugged but clean
- Trustworthy
- Specialist-led
- Modern Croatian ecommerce
- Outdoor-oriented without looking cliché
- Precise and professional

Avoid:

- Cheap military/tactical clichés.
- Overly dark unreadable UI.
- Generic AI-generated gradients everywhere.
- Excessive animations.
- Cluttered product cards.

## 8.2 Color Palette

Recommended palette:

```css
--color-forest-950: #07130D;
--color-forest-900: #0E1F16;
--color-forest-800: #153323;
--color-olive-700: #43543A;
--color-olive-500: #6E7D54;
--color-sand-100: #F4EFE4;
--color-stone-50: #FAF8F3;
--color-stone-200: #E7E0D2;
--color-charcoal-900: #121417;
--color-charcoal-700: #2A2E30;
--color-copper-500: #B87333;
--color-amber-400: #D99A32;
--color-success: #1F8A4C;
--color-warning: #C8841A;
--color-danger: #B73535;
```

Usage:

- Forest/charcoal: header, hero, premium sections.
- Stone/sand: page backgrounds and cards.
- Copper/amber: CTA accents and hover states.
- Success/warning/danger: stock and compliance states.

## 8.3 Typography

Recommended:

- Primary font: Geist or Inter.
- Optional heading font: a strong grotesk or condensed sans-serif if available.

Type scale:

```txt
Hero H1: 48-72px desktop / 36-44px mobile
Section H2: 32-44px desktop / 28-34px mobile
Card title: 16-18px
Body: 15-17px
Meta: 12-14px
Button: 14-15px, semibold
```

## 8.4 Border Radius

```txt
Small controls: 10-12px
Product cards: 20-24px
Large feature cards: 28-32px
Hero containers: 32px
Pills/badges: 999px
```

## 8.5 Shadows

Use soft, premium shadows:

```css
--shadow-card: 0 18px 45px rgba(7, 19, 13, 0.08);
--shadow-card-hover: 0 28px 70px rgba(7, 19, 13, 0.14);
--shadow-header: 0 10px 30px rgba(7, 19, 13, 0.08);
```

## 8.6 Buttons

Primary button:

- Forest/charcoal background.
- Light text.
- Copper hover outline/glow.
- Slight scale on hover.

Secondary button:

- Transparent or sand background.
- Forest text.
- Border.

Regulated button:

- Neutral/amber style.
- Text: “Provjeri uvjete” / “Pošalji upit”.

## 8.7 Cards

Product cards:

- Light background.
- Rounded corners.
- Consistent image ratio.
- Subtle border.
- Hover lift.
- CTA appears clearly.

Category cards:

- Larger imagery.
- Overlay gradient.
- Icon or badge.
- Short copy.

Trust cards:

- Icon + heading + small paragraph.

## 8.8 Forms

Form style:

- Rounded fields.
- Clear labels.
- Helpful helper text.
- Strong focus state.
- Zod validation messages.
- Accessible error state.

## 8.9 Icons

Use lucide-react icons:

- Search
- ShoppingCart
- User
- Heart
- Scale / Compare
- ShieldCheck
- Truck
- MapPin
- Phone
- Mail
- Filter
- SlidersHorizontal
- Star
- CheckCircle
- AlertTriangle

## 8.10 Motion Style

Use Framer Motion / Motion for subtle premium animations:

- Fade + y entrance for sections.
- Staggered category cards.
- Product card hover lift.
- Cart drawer slide-in.
- Mobile menu transitions.
- Accordion open/close.
- Filter drawer animation.
- Toast notifications.

Motion rules:

- Keep animations under 300ms for UI actions.
- Use reduced motion support.
- Avoid distracting parallax.
- Use motion only where it improves orientation and polish.

---

# 9. Component System

## Layout Components

- `SiteHeader`
- `TopAnnouncementBar`
- `MegaMenu`
- `MobileMenu`
- `MobileBottomNav`
- `SiteFooter`
- `Container`
- `SectionHeader`
- `PageShell`
- `Breadcrumbs`

## Homepage Sections

- `HeroSection`
- `CategoryShowcase`
- `FeaturedProductsSection`
- `TrustBenefitsSection`
- `BestSellersSection`
- `UseCaseCollectionsSection`
- `BrandStorySection`
- `TestimonialsSection`
- `FaqPreviewSection`
- `NewsletterCtaSection`

## Product Components

- `ProductCard`
- `ProductGrid`
- `ProductList`
- `ProductBadge`
- `StockBadge`
- `ComplianceBadge`
- `ProductGallery`
- `ProductInfoPanel`
- `ProductSpecsTable`
- `RelatedProducts`
- `RecentlyViewedProducts`
- `ProductTabs`
- `QuantitySelector`
- `ProductQuickView`

## Category / Shop Components

- `CategoryCard`
- `CategoryGrid`
- `FilterSidebar`
- `MobileFilterDrawer`
- `SortDropdown`
- `ActiveFilterChips`
- `SearchBar`
- `SearchOverlay`
- `EmptyProductsState`
- `ProductGridSkeleton`

## Cart / Checkout Components

- `CartDrawer`
- `CartLineItem`
- `CartSummary`
- `ShippingProgress`
- `CheckoutForm`
- `OrderSummary`
- `ComplianceCartNotice`
- `CouponInput`

## Content / Trust Components

- `ReviewCard`
- `FaqAccordion`
- `TrustCard`
- `StoreLocationCard`
- `ContactCard`
- `PolicyContent`
- `GuideCard`

## UI Components

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `RadioGroup`
- `Dialog`
- `Drawer`
- `Accordion`
- `Tabs`
- `Badge`
- `Card`
- `Toast`
- `Skeleton`
- `Tooltip`

---

# 10. Technical Architecture

## 10.1 Recommended Next.js App Structure

```txt
/src
  /app
    /layout.tsx
    /page.tsx
    /globals.css
    /shop
      /page.tsx
    /categories
      /page.tsx
      /[slug]
        /page.tsx
    /products
      /[slug]
        /page.tsx
    /cart
      /page.tsx
    /checkout
      /page.tsx
    /about
      /page.tsx
    /contact
      /page.tsx
    /faq
      /page.tsx
    /policies
      /privacy
        /page.tsx
      /terms
        /page.tsx
      /returns
        /page.tsx
      /delivery
        /page.tsx
      /regulated-products
        /page.tsx
    /guides
      /page.tsx
      /[slug]
        /page.tsx

  /components
    /layout
      SiteHeader.tsx
      TopAnnouncementBar.tsx
      MegaMenu.tsx
      MobileMenu.tsx
      MobileBottomNav.tsx
      SiteFooter.tsx
      Container.tsx
      Breadcrumbs.tsx
    /sections
      HeroSection.tsx
      CategoryShowcase.tsx
      FeaturedProductsSection.tsx
      TrustBenefitsSection.tsx
      BestSellersSection.tsx
      BrandStorySection.tsx
      TestimonialsSection.tsx
      FaqPreviewSection.tsx
      NewsletterCtaSection.tsx
    /product
      ProductCard.tsx
      ProductGrid.tsx
      ProductGallery.tsx
      ProductInfoPanel.tsx
      ProductSpecsTable.tsx
      RelatedProducts.tsx
      ProductQuickView.tsx
    /shop
      FilterSidebar.tsx
      MobileFilterDrawer.tsx
      SortDropdown.tsx
      ActiveFilterChips.tsx
      SearchOverlay.tsx
    /cart
      CartDrawer.tsx
      CartLineItem.tsx
      CartSummary.tsx
      ShippingProgress.tsx
    /checkout
      CheckoutForm.tsx
      OrderSummary.tsx
    /content
      ReviewCard.tsx
      FaqAccordion.tsx
      TrustCard.tsx
      GuideCard.tsx
    /ui
      button.tsx
      input.tsx
      textarea.tsx
      select.tsx
      checkbox.tsx
      badge.tsx
      card.tsx
      drawer.tsx
      dialog.tsx
      accordion.tsx
      tabs.tsx
      skeleton.tsx
      toast.tsx

  /data
    categories.ts
    products.ts
    reviews.ts
    faqs.ts
    guides.ts
    navigation.ts
    policies.ts

  /lib
    cart-store.ts
    filters.ts
    format-price.ts
    seo.ts
    product-utils.ts
    compliance.ts
    constants.ts
    utils.ts

  /types
    product.ts
    category.ts
    cart.ts
    seo.ts
    compliance.ts

  /styles
    tokens.css
```

## 10.2 Static Data First, Backend Later

For the first build, use static TypeScript data files:

- `products.ts`
- `categories.ts`
- `reviews.ts`
- `faqs.ts`

This is ideal for vibe coding because:

- The frontend can be built quickly.
- Product cards, filters and layout can be tested immediately.
- Data shapes can be designed before backend integration.
- The app remains easy to migrate later.

Prepare types so products can later come from:

- WooCommerce REST API
- Shopify
- Medusa
- Sanity
- Strapi
- Supabase
- Custom backend

## 10.3 Product Type Example

```ts
export type ProductComplianceType =
  | 'standard'
  | 'regulated-inquiry'
  | 'pickup-only'
  | 'age-restricted';

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand?: string;
  categorySlug: string;
  subcategorySlug?: string;
  price: number;
  compareAtPrice?: number;
  currency: 'EUR';
  images: string[];
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  badges?: string[];
  stockStatus: 'in-stock' | 'out-of-stock' | 'backorder' | 'limited';
  complianceType: ProductComplianceType;
  isFeatured?: boolean;
  isBestSeller?: boolean;
  rating?: number;
  reviewCount?: number;
};
```

## 10.4 Compliance Helper Example

```ts
export function getProductCta(product: Product) {
  switch (product.complianceType) {
    case 'standard':
      return { label: 'Dodaj u košaricu', action: 'add-to-cart' };
    case 'regulated-inquiry':
      return { label: 'Provjeri uvjete kupnje', action: 'inquiry' };
    case 'pickup-only':
      return { label: 'Rezerviraj / kontaktiraj trgovinu', action: 'contact' };
    case 'age-restricted':
      return { label: 'Potvrdi uvjete', action: 'verify' };
    default:
      return { label: 'Saznaj više', action: 'details' };
  }
}
```

---

# 11. Recommended Dependencies

## Core

```bash
next
react
react-dom
typescript
```

## Styling

```bash
tailwindcss
@tailwindcss/postcss
clsx
tailwind-merge
class-variance-authority
```

## Animations

```bash
framer-motion
```

or current Motion package:

```bash
motion
```

Use whichever is more compatible with the chosen codebase. The user requested Framer Motion, so `framer-motion` is acceptable, but the modern docs may refer to Motion.

## Icons

```bash
lucide-react
```

## UI Primitives

```bash
@radix-ui/react-dialog
@radix-ui/react-dropdown-menu
@radix-ui/react-accordion
@radix-ui/react-tabs
@radix-ui/react-checkbox
@radix-ui/react-select
@radix-ui/react-tooltip
```

Optional:

```bash
shadcn/ui patterns
```

Do not blindly generate a huge component library. Use only the primitives needed.

## Forms and Validation

```bash
react-hook-form
zod
@hookform/resolvers
```

## State Management

```bash
zustand
```

Use Zustand for cart drawer, wishlist and UI state.

## Carousel / Slider

```bash
embla-carousel-react
```

## Toast Notifications

```bash
sonner
```

## SEO / Structured Data

Use Next.js Metadata API first. Add manual JSON-LD helpers in `lib/seo.ts`.

Optional:

```bash
schema-dts
```

## Accessibility / Utilities

```bash
react-remove-scroll
```

Radix already handles many accessibility concerns for dialogs, menus and accordions.

---

# 12. SEO and Performance Plan

## 12.1 Metadata Strategy

Use Next.js App Router Metadata API:

- Global metadata in `app/layout.tsx`.
- Page metadata per route.
- Dynamic metadata for product and category pages via `generateMetadata`.

Every important page should have:

- Title.
- Meta description.
- Open Graph title and description.
- Canonical URL.
- Robots handling.
- Image where available.

## 12.2 Structured Data

Add JSON-LD for:

- Organization / LocalBusiness
- Product
- BreadcrumbList
- FAQPage
- Article for guides

For regulated products, do not exaggerate availability or purchase simplicity.

## 12.3 Semantic HTML

Use:

- One `h1` per page.
- Proper section headings.
- `nav`, `main`, `section`, `article`, `aside`, `footer`.
- Accessible labels for buttons and forms.
- Product cards as semantic links/articles.

## 12.4 Image Optimization

Use `next/image` for:

- Product images.
- Hero images.
- Category images.
- Brand/story imagery.

Best practices:

- Use consistent aspect ratios.
- Provide alt text.
- Lazy load below-the-fold images.
- Preload key hero image only when necessary.
- Avoid massive unoptimized background images.

## 12.5 Page Speed

Performance rules:

- Keep most components server-rendered.
- Use client components only for interactive UI: cart drawer, filters, search overlay, accordions, mobile menu.
- Avoid heavy animation libraries beyond Framer Motion/Motion.
- Avoid unnecessary client-side data fetching for static product data.
- Code-split large interactive sections.
- Use skeleton loading states for future dynamic data.

## 12.6 Accessibility

Requirements:

- Keyboard-accessible navigation.
- Visible focus states.
- Accessible dialogs/drawers.
- Proper aria labels.
- Form labels and error messages.
- Reduced motion support.
- Color contrast checked for dark and light sections.
- No text embedded only inside images.

---

# 13. Implementation Roadmap

## Phase 1: Project Setup

Tasks:

- Create Next.js 16 project with TypeScript and App Router.
- Install Tailwind CSS v4.
- Configure `app/globals.css` with `@import "tailwindcss";`.
- Install required dependencies.
- Create folder structure.
- Add base metadata.

Deliverable:

- Clean running app with empty layout, global styles and folder structure.

## Phase 2: Design System

Tasks:

- Create CSS tokens.
- Create reusable UI components: Button, Badge, Card, Input, Drawer, Dialog, Accordion, Tabs, Skeleton.
- Define typography, colors, spacing, border radius and shadows.
- Add responsive container system.

Deliverable:

- Reusable design system foundation.

## Phase 3: Layout and Navigation

Tasks:

- Build announcement bar.
- Build desktop header.
- Build mega menu.
- Build mobile menu.
- Build mobile bottom nav.
- Build footer.
- Add cart drawer shell.

Deliverable:

- Professional responsive site frame.

## Phase 4: Homepage

Tasks:

- Hero section.
- Category showcase.
- Featured products.
- Trust section.
- Best sellers.
- Use-case shopping blocks.
- Brand story.
- Testimonials.
- FAQ preview.
- Newsletter/contact CTA.

Deliverable:

- Complete premium homepage.

## Phase 5: Product and Category Pages

Tasks:

- Create static product/category data.
- Build shop page with filters/sorting.
- Build category page.
- Build product detail page.
- Add product gallery, specs, accordions, related products.
- Add regulated-product UI logic.

Deliverable:

- Functional catalog experience.

## Phase 6: Cart and Checkout UI

Tasks:

- Zustand cart store.
- Cart drawer.
- Cart page.
- Checkout form UI.
- Order summary.
- Shipping progress.
- Compliance notice for restricted products.

Deliverable:

- Frontend cart/checkout prototype with mock order behavior.

## Phase 7: Animations and Polish

Tasks:

- Add Framer Motion page/section animations.
- Add hover interactions.
- Add mobile menu and filter drawer animation.
- Add cart drawer animation.
- Add toast feedback.
- Add loading and empty states.

Deliverable:

- Smooth premium interaction layer.

## Phase 8: SEO, Accessibility and Performance

Tasks:

- Add metadata for all pages.
- Add JSON-LD helpers.
- Add alt text and semantic HTML.
- Improve keyboard navigation.
- Check responsive layouts.
- Reduce unnecessary client components.
- Optimize images.

Deliverable:

- Production-ready SEO/performance/accessibility pass.

## Phase 9: Final Testing

Tasks:

- Test desktop, tablet and mobile.
- Test search/filter/sort.
- Test cart drawer and checkout UI.
- Test regulated product flow.
- Test empty states.
- Test Lighthouse basics.
- Fix console errors.
- Remove placeholder/dead code.

Deliverable:

- Clean polished MVP ready for backend/CMS integration.

---

# 14. Final Build Prompt for Antigravity IDE

Paste the following prompt into Antigravity IDE.

```txt
You are a senior Next.js 16, React 19, Tailwind CSS v4, Framer Motion, ecommerce UX/UI and frontend architecture expert.

Build a modern premium ecommerce frontend inspired by the business purpose of https://pointershop.net/, but DO NOT copy its current design. Preserve the general business purpose: a Croatian specialist shop for hunting, sport shooting, outdoor gear, clothing, footwear, optics, lights, knives, backpacks, bags and regulated products. Redesign the entire experience to feel significantly more modern, trustworthy, premium, mobile-first, fast, polished and conversion-focused.

IMPORTANT SAFETY / COMPLIANCE REQUIREMENT:
Some product categories are legally regulated, such as firearms and ammunition. Do not treat every product as a normal unrestricted ecommerce item. Add a compliance-aware product system:
- standard products can use “Dodaj u košaricu”
- regulated products should use “Provjeri uvjete kupnje” or “Pošalji upit”
- pickup-only products should show “Rezerviraj / kontaktiraj trgovinu”
- show clear notices for regulated categories and product detail pages
- add a dedicated policy page for regulated products
- do not implement real payment/backend logic for restricted products in this MVP

TECH STACK:
- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion for subtle premium animations
- lucide-react for icons
- Radix UI primitives where useful
- react-hook-form + zod for forms
- zustand for cart/wishlist/ui state
- embla-carousel-react for carousels
- sonner for toast notifications
- Next.js Metadata API for SEO
- next/image for optimized images

TAILWIND CSS v4:
Use Tailwind v4 correctly. Import Tailwind in app/globals.css with:
@import "tailwindcss";
Use CSS variables/tokens for custom colors, radii, shadows and spacing. Avoid old Tailwind v3 configuration patterns unless absolutely needed.

VISUAL DIRECTION:
Create a premium rugged outdoor ecommerce feel:
- deep forest green, charcoal, warm sand/stone backgrounds, copper/amber accents
- clean modern typography using Geist or Inter
- large confident headings
- high-quality spacing and hierarchy
- rounded premium cards
- soft shadows
- subtle borders
- refined hover states
- no generic WooCommerce/template look
- no cheap tactical cliché look
- polished but not over-animated

Suggested color tokens:
--forest-950 #07130D
--forest-900 #0E1F16
--forest-800 #153323
--olive-700 #43543A
--sand-100 #F4EFE4
--stone-50 #FAF8F3
--stone-200 #E7E0D2
--charcoal-900 #121417
--copper-500 #B87333
--amber-400 #D99A32

REQUIRED FOLDER STRUCTURE:
Create a clean structure similar to:

/src
  /app
    /layout.tsx
    /page.tsx
    /globals.css
    /shop/page.tsx
    /categories/page.tsx
    /categories/[slug]/page.tsx
    /products/[slug]/page.tsx
    /cart/page.tsx
    /checkout/page.tsx
    /about/page.tsx
    /contact/page.tsx
    /faq/page.tsx
    /policies/privacy/page.tsx
    /policies/terms/page.tsx
    /policies/returns/page.tsx
    /policies/delivery/page.tsx
    /policies/regulated-products/page.tsx
    /guides/page.tsx
    /guides/[slug]/page.tsx
  /components
    /layout
    /sections
    /product
    /shop
    /cart
    /checkout
    /content
    /ui
  /data
  /lib
  /types
  /styles

REQUIRED PAGES:
1. Home
2. Shop / Products
3. Category overview
4. Category detail pages
5. Product detail page
6. Cart
7. Checkout UI prototype
8. About
9. Contact
10. FAQ
11. Privacy policy
12. Terms
13. Returns
14. Delivery
15. Regulated products policy
16. Guides overview
17. Guide detail template

HOMEPAGE SECTIONS IN ORDER:
1. Announcement bar
   - free delivery over 150 €
   - expert support
   - regulated product notice
2. Header with search, mega menu, account, wishlist, compare, cart
3. Premium hero section
   - headline in Croatian: “Profesionalna oprema za lov, streljaštvo i boravak na terenu.”
   - subheadline explaining specialist gear, expert support and clear purchase conditions
   - primary CTA: “Pregledaj trgovinu”
   - secondary CTA: “Pitaj za preporuku”
   - trust chips: Drniš, Stručna podrška, Sigurna kupnja, Dostava 150 €+
4. Shop by category cards
   - Oružje, Streljivo, Optike, Odjeća, Obuća, Oprema za lov, Svjetiljke, Ruksaci i torbe
5. Featured products with tabs
   - Novo, Best selleri, Odjeća i obuća, Optika, Oprema za teren
6. Benefits/trust section
7. Best sellers carousel/grid
8. Use-case shopping blocks
9. Brand story / store story
10. Reviews/testimonials
11. FAQ preview
12. Newsletter or contact CTA
13. Premium footer

REQUIRED COMPONENTS:
Layout:
- SiteHeader
- TopAnnouncementBar
- MegaMenu
- MobileMenu
- MobileBottomNav
- SiteFooter
- Container
- Breadcrumbs

Homepage:
- HeroSection
- CategoryShowcase
- FeaturedProductsSection
- TrustBenefitsSection
- BestSellersSection
- UseCaseCollectionsSection
- BrandStorySection
- TestimonialsSection
- FaqPreviewSection
- NewsletterCtaSection

Product/shop:
- ProductCard
- ProductGrid
- ProductGallery
- ProductInfoPanel
- ProductSpecsTable
- RelatedProducts
- ProductQuickView
- FilterSidebar
- MobileFilterDrawer
- SortDropdown
- ActiveFilterChips
- SearchOverlay
- EmptyProductsState
- ProductGridSkeleton

Cart/checkout:
- CartDrawer
- CartLineItem
- CartSummary
- ShippingProgress
- CheckoutForm
- OrderSummary
- ComplianceCartNotice
- CouponInput

Content/UI:
- ReviewCard
- FaqAccordion
- TrustCard
- GuideCard
- Button
- Input
- Textarea
- Select
- Checkbox
- Badge
- Card
- Drawer
- Dialog
- Accordion
- Tabs
- Skeleton
- Toast

MOCK DATA:
Create mock data files in /data:
- categories.ts
- products.ts
- reviews.ts
- faqs.ts
- guides.ts
- navigation.ts

Product data must include:
- id
- slug
- name
- brand
- categorySlug
- subcategorySlug
- price
- compareAtPrice
- currency EUR
- images
- shortDescription
- description
- specs
- badges
- stockStatus: in-stock | out-of-stock | backorder | limited
- complianceType: standard | regulated-inquiry | pickup-only | age-restricted
- isFeatured
- isBestSeller
- rating
- reviewCount

Include at least 24 mock products across categories:
- outdoor jackets
- hunting trousers
- boots
- optics
- lights
- backpacks
- maintenance accessories
- air rifles / regulated examples
- ammunition / regulated examples
Do not use real weapon marketing copy. Keep copy neutral and compliance-aware.

UX REQUIREMENTS:
- Desktop mega menu with category groups and descriptions
- Mobile hamburger menu
- Mobile bottom nav
- Prominent search overlay
- Product filtering by category, brand, price, availability, size/type and compliance type
- Active filter chips
- Sort dropdown
- Cart drawer with shipping threshold progress
- Wishlist state
- Compare state or compare placeholder
- Product detail with gallery, specs, accordions and related products
- Sticky mobile CTA on product page
- Clear legal/compliance notices on regulated products
- Empty states and loading skeletons
- Toast feedback for cart/wishlist actions

PRODUCT CARD REQUIREMENTS:
Each ProductCard should show:
- image
- product badges
- stock badge
- brand
- product name
- price
- short spec chips
- rating if available
- CTA based on complianceType
- wishlist icon
- compare icon
Use clean spacing and premium hover states.

CTA LOGIC:
Create a helper in /lib/compliance.ts:
- standard => “Dodaj u košaricu”
- regulated-inquiry => “Provjeri uvjete kupnje”
- pickup-only => “Rezerviraj / kontaktiraj trgovinu”
- age-restricted => “Potvrdi uvjete”

SEO REQUIREMENTS:
- Use Next.js Metadata API
- Add metadata for every page
- Add generateMetadata for products and categories
- Add JSON-LD helpers for Organization, Product, BreadcrumbList and FAQPage
- Use semantic HTML
- Use next/image with proper alt text
- Create clean Croatian page titles and descriptions

PERFORMANCE REQUIREMENTS:
- Prefer server components by default
- Use client components only for interactive UI
- Keep animations lightweight
- Optimize images
- Avoid unnecessary libraries
- Avoid hydration-heavy sections when not needed
- Use clean reusable components

ACCESSIBILITY REQUIREMENTS:
- Keyboard accessible menus, dialogs and drawers
- Visible focus states
- aria labels for icon buttons
- form labels and validation messages
- reduced motion support
- good color contrast
- semantic sections and headings

IMPLEMENTATION APPROACH:
Build step by step:
1. Setup project structure and global styles
2. Create design tokens and UI components
3. Build layout/header/footer/navigation
4. Add mock data and TypeScript types
5. Build homepage
6. Build shop, filters and category pages
7. Build product detail pages
8. Build cart drawer, cart page and checkout UI
9. Add animations, skeletons, empty states and toasts
10. Add SEO, structured data and accessibility polish
11. Test responsiveness and fix bugs

QUALITY BAR:
- The design must look custom, premium and professional.
- Do not produce a generic ecommerce template.
- Do not copy Pointershop’s existing layout or theme.
- Use modern ecommerce UX patterns.
- Make everything responsive from 360px mobile to large desktop.
- Keep code clean, reusable and production-quality.
- Avoid overcomplicated backend logic. This is a polished frontend MVP prepared for future backend/CMS integration.
- Do not break the app. Check TypeScript errors, imports and component boundaries as you build.

Start by creating the full project structure, then implement the design system and layout before building individual pages.
```

---

# Final Notes for Developer

This rebuild should not be treated as a simple visual reskin. The real improvement comes from combining better ecommerce UX with category clarity, trust-building, mobile-first navigation and compliance-aware product flows.

The strongest version of this project will feel like a professional specialist store where users can quickly find products, understand availability, trust the business and know exactly how regulated purchases are handled.
