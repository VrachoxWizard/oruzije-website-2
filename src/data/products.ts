import { Product } from '@/types/product';

export const products: Product[] = [
  // 1. Oružje (Regulated)
  {
    id: 'p1',
    slug: 'karabin-x-bolt-hunter',
    name: 'Browning X-Bolt Hunter',
    brand: 'Browning',
    categorySlug: 'oruzje',
    subcategorySlug: 'dugo-oruzje',
    price: 1345.00,
    currency: 'EUR',
    images: ['/images/cat-rifles.png'],
    description: 'Browning X-Bolt Hunter je sinonim za preciznost i pouzdanost. Opremljen je Inflex sustavom za smanjenje trzanja, Feather Trigger mehanizmom za savršen osjećaj okidanja te drvenim kundakom od oraha vrhunske završne obrade.',
    shortDescription: 'Legendarna preciznost s drvenim kundakom od oraha.',
    specs: { 
      'Kalibar': '.308 Win / .30-06 / .243 Win', 
      'Kapacitet': '4+1', 
      'Dužina cijevi': '560 mm', 
      'Težina': '3.15 kg',
      'Sustav': 'Obrtno-čepni'
    },
    badges: ['Preporuka'],
    stockStatus: 'in-stock',
    complianceType: 'regulated-inquiry',
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 12
  },
  {
    id: 'p2',
    slug: 'sacmarica-browning-b525-game',
    name: 'Browning B525 Game One',
    brand: 'Browning',
    categorySlug: 'oruzje',
    subcategorySlug: 'dugo-oruzje',
    price: 1980.00,
    currency: 'EUR',
    images: ['/images/prod-traditional-rifle.png'],
    description: 'B525 Game One je savršen ulazak u svijet Browning bokerica. Izrađena s legendarnom pažnjom prema detaljima, nudi izuzetnu ravnotežu i trajnost. Svaka akcija je ručno podešena kako bi se osigurao savršen rad dugi niz godina.',
    shortDescription: 'Pouzdana bokerica vrhunske balansiranosti.',
    specs: { 
      'Kalibar': '12/76', 
      'Čokovi': 'Invector+ (4 kom)', 
      'Dužina cijevi': '710 mm / 760 mm', 
      'Težina': '3.3 kg',
      'Baskula': 'Čelična'
    },
    stockStatus: 'limited',
    complianceType: 'regulated-inquiry',
    rating: 4.8,
    reviewCount: 8
  },
  {
    id: 'p20',
    slug: 'sako-85-bavarian',
    name: 'Sako 85 Bavarian',
    brand: 'Sako',
    categorySlug: 'oruzje',
    subcategorySlug: 'dugo-oruzje',
    price: 2450.00,
    currency: 'EUR',
    images: ['/images/prod-traditional-rifle.png'],
    description: 'Sako 85 Bavarian dizajniran je za lovce koji cijene klasičan izgled karabina s bavarskim obrazom na kundaku. Izuzetno precizna cijev i besprijekoran mehanizam čine ga jednim od najboljih karabina na svijetu.',
    shortDescription: 'Klasika i vrhunska finska preciznost.',
    specs: { 
      'Kalibar': '30-06 / 8x57JS', 
      'Kundak': 'Orah (Grade 3)', 
      'Spremnik': 'Odvojivi, 5 kom', 
      'Težina': '3.2 kg'
    },
    badges: ['Premium'],
    stockStatus: 'in-stock',
    complianceType: 'regulated-inquiry',
    rating: 5.0,
    reviewCount: 5
  },
  {
    id: 'p3',
    slug: 'zracna-puska-gamo-whisper-igt',
    name: 'Gamo Whisper IGT 4.5mm',
    brand: 'Gamo',
    categorySlug: 'oruzje',
    subcategorySlug: 'zracno-oruzje',
    price: 265.00,
    currency: 'EUR',
    images: ['/images/cat-rifles.png'],
    description: 'Gamo Whisper IGT koristi inovativnu tehnologiju inertnog plina umjesto klasične opruge, što rezultira manjim vibracijama, većom brzinom i dužim vijekom trajanja.',
    shortDescription: 'Tiha i snažna zračna puška s IGT sustavom.',
    specs: { 
      'Kalibar': '4.5 mm', 
      'Izlazna brzina': '305 m/s', 
      'Snaga': '24 J', 
      'Težina': '2.6 kg'
    },
    stockStatus: 'in-stock',
    complianceType: 'age-restricted',
    rating: 4.5,
    reviewCount: 24
  },

  // 2. Streljivo (Regulated)
  {
    id: 'p4',
    slug: 'norma-308-win-oryx',
    name: 'Norma .308 Win Oryx 10.7g',
    brand: 'Norma',
    categorySlug: 'streljivo',
    subcategorySlug: 'karabinsko',
    price: 68.50,
    currency: 'EUR',
    images: ['/images/cat-ammo.png'],
    description: 'Oryx je "bonded" zrno koje osigurava minimalan gubitak mase pri udaru, što rezultira dubokom penetracijom i kontroliranim širenjem.',
    shortDescription: 'Vrhunsko lovačko streljivo s bonded zrnom.',
    specs: { 
      'Kalibar': '.308 Win', 
      'Težina zrna': '10.7g / 165gr', 
      'Pakiranje': '20 kom',
      'Tip': 'Bonded Soft Point'
    },
    badges: ['Novo'],
    stockStatus: 'in-stock',
    complianceType: 'pickup-only',
    rating: 5.0,
    reviewCount: 15
  },
  {
    id: 'p21',
    slug: 'hornady-precision-hunter-30-06',
    name: 'Hornady Precision Hunter 30-06',
    brand: 'Hornady',
    categorySlug: 'streljivo',
    subcategorySlug: 'karabinsko',
    price: 75.00,
    currency: 'EUR',
    images: ['/images/cat-ammo.png'],
    description: 'Precision Hunter streljivo s ELD-X zrnom dizajnirano je za maksimalnu preciznost i terminalni učinak na svim udaljenostima.',
    shortDescription: 'Maksimalna preciznost na svim udaljenostima.',
    specs: { 
      'Kalibar': '30-06 Springfield', 
      'Zrno': 'ELD-X', 
      'Težina': '11.5g / 178gr', 
      'Pakiranje': '20 kom'
    },
    stockStatus: 'in-stock',
    complianceType: 'pickup-only',
    rating: 4.9,
    reviewCount: 11
  },

  // 3. Odjeća & Obuća
  {
    id: 'p7',
    slug: 'fjallraven-vidda-pro-jacket',
    name: 'Fjällräven Vidda Pro Jacket',
    brand: 'Fjällräven',
    categorySlug: 'odjeca',
    subcategorySlug: 'jakne',
    price: 295.00,
    compareAtPrice: 340.00,
    currency: 'EUR',
    images: ['/images/prod-jacket.png'],
    description: 'Robusna lovačka jakna od G-1000 Eco materijala. Dizajnirana za zahtjevne terene i boravak u prirodi.',
    shortDescription: 'Izdržljiva outdoor jakna za sve uvjete.',
    specs: { 
      'Materijal': 'G-1000® Eco', 
      'Boja': 'Deep Forest', 
      'Težina': '850 g (M)'
    },
    badges: ['Akcija'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 42
  },
  {
    id: 'p10',
    slug: 'meindl-dovre-extreme-gtx',
    name: 'Meindl Dovre Extreme GTX',
    brand: 'Meindl',
    categorySlug: 'obuca',
    subcategorySlug: 'cizme',
    price: 335.00,
    currency: 'EUR',
    images: ['/images/prod-boots.png'],
    description: 'Referentni model za visoke lovačke čizme. Gore-Tex membrana osigurava stopostotnu vodootpornost.',
    shortDescription: 'Vrhunska zaštita i stabilnost na najtežim terenima.',
    specs: { 
      'Materijal': 'Nubuk koža', 
      'Membrana': 'GORE-TEX®', 
      'Potplat': 'Vibram®'
    },
    badges: ['Best Seller'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 56
  },

  // 4. Optika & Oprema
  {
    id: 'p13',
    slug: 'steiner-ranger-4-3-12x56',
    name: 'Steiner Ranger 4 3-12x56',
    brand: 'Steiner',
    categorySlug: 'oprema',
    subcategorySlug: 'optike',
    price: 1120.00,
    currency: 'EUR',
    images: ['/images/cat-optics.png'],
    description: 'Nova generacija Ranger serije nudi još šire vidno polje i poboljšanu transmisiju svjetla.',
    shortDescription: 'Specijalist za sumrak s vrhunskom optikom.',
    specs: { 
      'Povećanje': '3x - 12x', 
      'Objektiv': '56 mm', 
      'Končanica': '4-AI (Svjetleća)'
    },
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: 'p22',
    slug: 'zeiss-victory-sf-10x42',
    name: 'Zeiss Victory SF 10x42',
    brand: 'Zeiss',
    categorySlug: 'oprema',
    subcategorySlug: 'dvogledi',
    price: 2650.00,
    currency: 'EUR',
    images: ['/images/prod-binoculars.png'],
    description: 'Victory SF redefinira standarde u svijetu dvogleda. Nudi nenadmašno vidno polje i ergonomiju koja omogućuje sate promatranja bez zamora.',
    shortDescription: 'Vrhunac optičkog inženjerstva.',
    specs: { 
      'Povećanje': '10x', 
      'Vidno polje': '120m / 1000m', 
      'Transmisija': '92%', 
      'Težina': '780 g'
    },
    badges: ['Premium Choice'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    rating: 5.0,
    reviewCount: 9
  },
  {
    id: 'p15',
    slug: 'pulsar-axion-2-lrf-xq35',
    name: 'Pulsar Axion 2 LRF XQ35',
    brand: 'Pulsar',
    categorySlug: 'oprema',
    subcategorySlug: 'nocni-termalni-uredaji',
    price: 1890.00,
    currency: 'EUR',
    images: ['/images/cat-optics.png'],
    description: 'Kompaktni termalni monokular s ugrađenim laserskim daljinomjerom (LRF).',
    shortDescription: 'Termalni monokular s laserskim daljinomjerom.',
    specs: { 
      'Senzor': '384x288 pix.', 
      'NETD': '<40 mK', 
      'LRF Domet': '1000 m'
    },
    stockStatus: 'limited',
    complianceType: 'standard',
    rating: 4.8,
    reviewCount: 7
  },
  {
    id: 'p17',
    slug: 'fallkniven-f1-pro-elmax',
    name: 'Fällkniven F1 Pro Elmax',
    brand: 'Fällkniven',
    categorySlug: 'oprema',
    subcategorySlug: 'nozevi',
    price: 245.00,
    currency: 'EUR',
    images: ['/images/cat-optics.png'],
    description: 'Legendarni F1 u Pro verziji s Elmax čelikom. Ovaj nož je postavio nove standarde za izdržljivost.',
    shortDescription: 'Profesionalni nož švedske kvalitete i Elmax čelika.',
    specs: { 
      'Čelik': 'Elmax', 
      'Dužina oštrice': '100 mm', 
      'Debljina oštrice': '5 mm'
    },
    badges: ['Top Kvaliteta'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    rating: 5.0,
    reviewCount: 31
  }
];

