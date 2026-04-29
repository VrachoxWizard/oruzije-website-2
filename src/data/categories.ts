import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "cat-oruzje",
    slug: "oruzje",
    name: "Oružje",
    description:
      "Dugo, kratko i zračno oružje prikazano kroz odgovoran katalog s jasnim uvjetima kupnje.",
    longDescription:
      "Kategorija oružja služi kao informativni katalog za kupce koji žele provjeriti dostupnost, osnovne specifikacije i uvjete kupnje. Za regulirane proizvode kupnja nije automatska: potrebna je provjera dokumentacije, osobni kontakt i preuzimanje prema važećim pravilima.",
    image: "/images/cat-rifles.png",
    icon: "ShieldAlert",
    isRegulated: true,
    complianceNote:
      "Oružje se ne prodaje kroz uobičajeni online checkout. Dostupnost, dokumentacija i preuzimanje potvrđuju se s trgovinom.",
    subcategories: [
      { id: "or-1", slug: "dugo-oruzje", name: "Dugo oružje" },
      { id: "or-2", slug: "sacmarice", name: "Sačmarice" },
      { id: "or-3", slug: "karabini", name: "Karabini" },
      { id: "or-4", slug: "moderno-oruzje", name: "Moderno oružje" },
      { id: "or-5", slug: "rabljeno", name: "Rabljeno" },
      { id: "or-6", slug: "kratko-oruzje", name: "Kratko oružje" },
      { id: "or-7", slug: "plinsko-oruzje", name: "Plinsko oružje" },
      { id: "or-8", slug: "zracno-oruzje", name: "Zračno oružje" },
      { id: "or-9", slug: "ciscenje-odrzavanje", name: "Čišćenje i održavanje" },
      { id: "or-10", slug: "futrole-navlake", name: "Futrole i navlake" },
    ],
    faq: [
      {
        question: "Mogu li kupiti regulirane proizvode online?",
        answer:
          "Ne kroz automatsku online kupnju. Možete poslati upit ili rezervaciju, a trgovina potvrđuje dokumentaciju i uvjete preuzimanja.",
      },
      {
        question: "Što trebam pripremiti za preuzimanje?",
        answer:
          "Točne uvjete potvrđuje trgovina, ali regulirani proizvodi mogu zahtijevati valjanu dokumentaciju i osobnu provjeru.",
      },
    ],
    featuredCollectionSlugs: ["precizno-ciljanje", "odrzavanje-opreme"],
  },
  {
    id: "cat-streljivo",
    slug: "streljivo",
    name: "Streljivo",
    description:
      "Katalog streljiva za lov i streljaštvo s naglaskom na provjeru uvjeta kupnje i osobno preuzimanje.",
    longDescription:
      "Streljivo je regulirani asortiman. Web katalog pomaže u odabiru kalibra i provjeri dostupnosti, dok se kupnja i preuzimanje usklađuju s trgovinom i važećim uvjetima.",
    image: "/images/cat-ammo.png",
    icon: "PackageCheck",
    isRegulated: true,
    complianceNote:
      "Streljivo je dostupno samo uz provjeru uvjeta kupnje i dogovoreno preuzimanje u trgovini.",
    subcategories: [
      { id: "st-1", slug: "sacmeno", name: "Sačmeno" },
      { id: "st-2", slug: "malokalibarsko", name: "Malokalibarsko" },
      { id: "st-3", slug: "karabinsko", name: "Karabinsko" },
      { id: "st-4", slug: "diabole", name: "Diabole" },
      { id: "st-5", slug: "reloading", name: "Reloading" },
    ],
    faq: [
      {
        question: "Dostavlja li se streljivo poštom?",
        answer: "Ne. Streljivo se obrađuje kroz upit i preuzimanje prema uvjetima trgovine.",
      },
    ],
    featuredCollectionSlugs: ["precizno-ciljanje"],
  },
  {
    id: "cat-odjeca",
    slug: "odjeca",
    name: "Odjeća",
    description: "Tehnička odjeća za lov, teren i hladne uvjete, s praktičnim krojevima i otpornim materijalima.",
    longDescription:
      "Jakne, hlače, majice, kape i rukavice za kupce kojima treba funkcionalna oprema za dulji boravak na otvorenom.",
    image: "/images/cat-clothing.png",
    icon: "Shirt",
    subcategories: [
      { id: "od-1", slug: "jakne", name: "Jakne" },
      { id: "od-2", slug: "hlace", name: "Hlače" },
      { id: "od-3", slug: "kape", name: "Kape" },
      { id: "od-4", slug: "kratke-majice", name: "Kratke majice" },
      { id: "od-5", slug: "rukavice", name: "Rukavice" },
    ],
    featuredCollectionSlugs: ["hladno-mokro-vrijeme"],
  },
  {
    id: "cat-obuca",
    slug: "obuca",
    name: "Obuća",
    description: "Čizme i cipele za teren, vlagu i duge hodnje, odabrane zbog stabilnosti i udobnosti.",
    longDescription:
      "Obuća za zahtjevne podloge mora držati stopalo stabilnim, zaštititi od vlage i ostati udobna kroz cijeli dan.",
    image: "/images/cat-boots.png",
    icon: "Footprints",
    subcategories: [
      { id: "ob-1", slug: "cizme", name: "Čizme" },
      { id: "ob-2", slug: "cipele", name: "Cipele" },
    ],
    featuredCollectionSlugs: ["hladno-mokro-vrijeme", "pocetak-outdoor-opreme"],
  },
  {
    id: "cat-oprema",
    slug: "oprema",
    name: "Oprema",
    description: "Terenska oprema, pribor za lov, održavanje i praktični dodaci za pouzdan boravak vani.",
    longDescription:
      "Oprema okuplja praktične dodatke koji rješavaju stvarne situacije na terenu: nošenje, održavanje, osvjetljenje, pregled i sigurnu organizaciju.",
    image: "/images/cat-optics.png",
    icon: "Compass",
    subcategories: [
      { id: "op-1", slug: "oprema-za-lov", name: "Oprema za lov" },
      { id: "op-2", slug: "odrzavanje-opreme", name: "Održavanje opreme" },
      { id: "op-3", slug: "sine-prstenje", name: "Šine i prstenje" },
      { id: "op-4", slug: "pribor", name: "Pribor" },
    ],
    featuredCollectionSlugs: ["odrzavanje-opreme", "pocetak-outdoor-opreme"],
  },
  {
    id: "cat-optike",
    slug: "optike",
    name: "Optike",
    description: "Dnevne optike, crvene točke, dvogledi te noćni i termalni uređaji za precizno promatranje.",
    image: "/images/cat-optics.png",
    icon: "Crosshair",
    subcategories: [
      { id: "opt-1", slug: "crvene-tocke", name: "Crvene točke" },
      { id: "opt-2", slug: "dnevne-optike", name: "Dnevne optike" },
      { id: "opt-3", slug: "nocni-termalni-uredaji", name: "Noćni i termalni uređaji" },
      { id: "opt-4", slug: "dvogledi", name: "Dvogledi" },
      { id: "opt-5", slug: "sine-prstenje", name: "Šine i prstenje" },
    ],
    featuredCollectionSlugs: ["nocni-teren", "precizno-ciljanje"],
  },
  {
    id: "cat-svjetiljke",
    slug: "svjetiljke",
    name: "Svjetiljke",
    description: "Ručne i naglavne svjetiljke za sigurno kretanje, rad i organizaciju opreme u slabom svjetlu.",
    image: "/images/placeholder.png",
    icon: "Flashlight",
    subcategories: [
      { id: "sv-1", slug: "naglavne", name: "Naglavne svjetiljke" },
      { id: "sv-2", slug: "rucne", name: "Ručne svjetiljke" },
      { id: "sv-3", slug: "dodaci", name: "Dodaci za svjetiljke" },
    ],
    featuredCollectionSlugs: ["nocni-teren"],
  },
  {
    id: "cat-nozevi",
    slug: "nozevi",
    name: "Noževi",
    description: "Fiksni i preklopni noževi za terensku upotrebu, kamp i održavanje opreme.",
    image: "/images/placeholder.png",
    icon: "UtilityKnife",
    subcategories: [
      { id: "no-1", slug: "fiksni-nozevi", name: "Fiksni noževi" },
      { id: "no-2", slug: "preklopni-nozevi", name: "Preklopni noževi" },
      { id: "no-3", slug: "ostraci", name: "Oštrači" },
    ],
    featuredCollectionSlugs: ["pocetak-outdoor-opreme"],
  },
  {
    id: "cat-ruksaci",
    slug: "ruksaci-torbe",
    name: "Ruksaci i torbe",
    description: "Ruksaci, torbe i organizatori za sigurno nošenje opreme na terenu i u transportu.",
    image: "/images/placeholder.png",
    icon: "Backpack",
    subcategories: [
      { id: "rt-1", slug: "ruksaci", name: "Ruksaci" },
      { id: "rt-2", slug: "torbe", name: "Torbe" },
      { id: "rt-3", slug: "organizatori", name: "Organizatori" },
    ],
    featuredCollectionSlugs: ["pocetak-outdoor-opreme"],
  },
];
