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
    images: ['/images/prod-rifle.png', '/images/placeholder.png'],
    description: 'Browning X-Bolt Hunter je sinonim za preciznost i pouzdanost. Opremljen je Inflex sustavom za smanjenje trzanja, Feather Trigger mehanizmom za savršen osjećaj okidanja te drvenim kundakom od oraha vrhunske završne obrade. Idealan izbor za ozbiljne lovce koji traže vrhunske performanse u svim uvjetima.',
    shortDescription: 'Legendarna preciznost s drvenim kundakom od oraha.',
    specs: { 
      'Kalibar': '.308 Win / .30-06 / .243 Win', 
      'Kapacitet': '4+1', 
      'Dužina cijevi': '560 mm', 
      'Težina': '3.15 kg',
      'Sustav': 'Obrtno-čepni'
    },
    badges: ['Best Seller', 'Preporuka'],
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
    images: ['/images/placeholder.png'],
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
    id: 'p3',
    slug: 'zracna-puska-gamo-whisper-igt',
    name: 'Gamo Whisper IGT 4.5mm',
    brand: 'Gamo',
    categorySlug: 'oruzje',
    subcategorySlug: 'zracno-oruzje',
    price: 265.00,
    currency: 'EUR',
    images: ['/images/placeholder.png'],
    description: 'Gamo Whisper IGT koristi inovativnu tehnologiju inertnog plina umjesto klasične opruge, što rezultira manjim vibracijama, većom brzinom i dužim vijekom trajanja. Dolazi s integriranim prigušivačem zvuka i optikom 4x32.',
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

  // Streljivo (Regulated)
  {
    id: 'p4',
    slug: 'norma-308-win-oryx',
    name: 'Norma .308 Win Oryx 10.7g',
    brand: 'Norma',
    categorySlug: 'streljivo',
    subcategorySlug: 'karabinsko',
    price: 68.50,
    currency: 'EUR',
    images: ['/images/placeholder.png'],
    description: 'Oryx je "bonded" zrno koje osigurava minimalan gubitak mase pri udaru, što rezultira dubokom penetracijom i kontroliranim širenjem. Jedan od najpopularnijih izbora za lov na srednju i krupnu divljač.',
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

  // Odjeća
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
    description: 'Robusna lovačka jakna od G-1000 Eco materijala. Dizajnirana za zahtjevne terene i boravak u prirodi, nudi izvrsnu zaštitu od vjetra i lagane kiše uz vrhunsku prozračnost.',
    shortDescription: 'Izdržljiva outdoor jakna za sve uvjete.',
    specs: { 
      'Materijal': 'G-1000® Eco: 65% poliester, 35% pamuk', 
      'Boja': 'Deep Forest', 
      'Vodootpornost': 'Uz primjenu voska',
      'Težina': '850 g (M)'
    },
    badges: ['Akcija'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 42
  },

  // Obuća
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
    description: 'Referentni model za visoke lovačke čizme. Gore-Tex membrana osigurava stopostotnu vodootpornost, dok visoki gumeni rub štiti kožu od oštećenja na kamenjaru.',
    shortDescription: 'Vrhunska zaštita i stabilnost na najtežim terenima.',
    specs: { 
      'Materijal': 'Nubuk koža', 
      'Membrana': 'GORE-TEX®', 
      'Potplat': 'Vibram® Meindl Multigriff®',
      'Visina': '26 cm'
    },
    badges: ['Best Seller'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isBestSeller: true,
    rating: 5.0,
    reviewCount: 56
  },

  // Optike
  {
    id: 'p13',
    slug: 'steiner-ranger-4-3-12x56',
    name: 'Steiner Ranger 4 3-12x56',
    brand: 'Steiner',
    categorySlug: 'oprema',
    subcategorySlug: 'optike',
    price: 1120.00,
    currency: 'EUR',
    images: ['/images/prod-scope.png'],
    description: 'Nova generacija Ranger serije nudi još šire vidno polje i poboljšanu transmisiju svjetla. Objektiv od 56mm osigurava izvrsne performanse u sumraku, što je ključno za uspješan lov.',
    shortDescription: 'Specijalist za sumrak s vrhunskom optikom.',
    specs: { 
      'Povećanje': '3x - 12x', 
      'Objektiv': '56 mm', 
      'Končanica': '4-AI (Svjetleća)',
      'Transmisija': '90%+'
    },
    stockStatus: 'in-stock',
    complianceType: 'standard',
    isFeatured: true,
    rating: 4.9,
    reviewCount: 18
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
    images: ['/images/placeholder.png'],
    description: 'Kompaktni termalni monokular s ugrađenim laserskim daljinomjerom (LRF). Visoka osjetljivost senzora omogućuje detekciju ciljeva na udaljenostima do 1300 metara čak i u potpunom mraku.',
    shortDescription: 'Termalni monokular s laserskim daljinomjerom.',
    specs: { 
      'Senzor': '384x288 pix. @ 17 µm', 
      'NETD': '<40 mK', 
      'LRF Domet': '1000 m',
      'Display': 'AMOLED 640x400'
    },
    stockStatus: 'limited',
    complianceType: 'standard',
    rating: 4.8,
    reviewCount: 7
  },

  // Oprema (Svjetiljke, Noževi)
  {
    id: 'p17',
    slug: 'fallkniven-f1-pro-elmax',
    name: 'Fällkniven F1 Pro Elmax',
    brand: 'Fällkniven',
    categorySlug: 'oprema',
    subcategorySlug: 'nozevi',
    price: 245.00,
    currency: 'EUR',
    images: ['/images/placeholder.png'],
    description: 'Legendarni F1 u Pro verziji s Elmax čelikom. Ovaj nož je postavio nove standarde za izdržljivost i funkcionalnost. Dolazi s poboljšanim Zytel koricama i oštračem.',
    shortDescription: 'Profesionalni nož švedske kvalitete i Elmax čelika.',
    specs: { 
      'Čelik': 'Elmax', 
      'Dužina oštrice': '100 mm', 
      'Debljina oštrice': '5 mm',
      'Ukupna dužina': '210 mm'
    },
    badges: ['Top Kvaliteta'],
    stockStatus: 'in-stock',
    complianceType: 'standard',
    rating: 5.0,
    reviewCount: 31
  }
];

