// ============================================================
// TICKETS DATA — edit here to update the tickets page
// ============================================================

const TICKETS_DATA = {
  meta: {
    title: "Jegyek — Hegyfeszt 2026",
  },
  page: {
    sectionLabel: "2026. augusztus 27–29.",
    title: "Jegyek",
    notice: "A Kaleidoszkóp Hegy Fesztivál nem tömegrendezvény, hanem találkozópont.",
    buyTicketsLabel: "Jegyek vásárlása",
    volunteerLabel: "Önkéntes jelentkezés",
    buyTicketsUrl: "https://www.tixa.hu/kaleidoszkop-hegy-fesztival-20260827",
    volunteerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeBC9q8zxwrTE34HDryfhAxuuTcMNxsACRN2H6rkZcZdWPC8Q/viewform",
    addonsLabel: "További jegyek",
    addonsTitle: "Válassz <span class=\"serif\">napijegyet</span> vagy különleges belépőt",
    campingLabel: "Kemping",
    campingTitle: "Kempingjegyek a Gran Campinghez",
    campingUrl: "https://grancamping.hu/",
    campingButtonLabel: "Gran Camping weboldala",
    campingNote: "Tixán nem lesznek kint a jegyek, ezeket a kemping pénztárában tudjátok kiváltani.",
    faqLabel: "Gyakran<br>ismételt kérdések",
  },
  notice: "A Kaleidoszkóp Hegy Fesztivál nem tömegrendezvény, hanem találkozópont.",

  tiers: [
    {
      id: "earlybird",
      label: "Early bird pass",
      price: 15000,
      currency: "Ft",
      availability: "limited",
      badge: "Korlátozott",
      description: "Early bird jegy a teljes háromnapos fesztiválra.",
      perks: [
        "3 napos belépés minden helyszínre",
        "Kedvezményes ár korlátozott számban"
      ],
      cta: "Early bird jegy vásárlása",
    },
    {
      id: "festival",
      label: "Fesztiválpass",
      price: 16000,
      currency: "Ft",
      availability: "available",
      badge: null,
      description: "Teljes háromnapos belépés az összes fesztiválhelyszínre.",
      perks: [
        "3 napos belépés minden programra"
      ],
      cta: "Fesztiválpass vásárlása",
    },
    {
      id: "discounted",
      label: "Kedvezményes fesztiválpass",
      price: 14000,
      currency: "Ft",
      availability: "available",
      badge: "Esztergom",
      description: "Kedvezményes fesztiváljegy Esztergom címmel rendelkező látogatóknak.",
      perks: [
        "3 napos belépés minden helyszínre",
        "Helyi kedvezmény Esztergom lakcím esetén"
      ],
      cta: "Kedvezményes jegy vásárlása",
    },
    {
      id: "sponsor",
      label: "Támogató jegy",
      price: 30000,
      currency: "Ft",
      availability: "available",
      badge: "Támogató",
      description: "Támogasd a Kaleidoszkóp Ház közösségi fesztiválját.",
      perks: [
        "Kiemelt támogatói státusz",
        "A fesztivál közösségének erősítése",
        "Exkluzív köszönet",
      ],
      cta: "Támogató jegy vásárlása",
    },
  ],

  addons: [
    { id: "thursday", label: "Napi jegy", price: 8000, description: "Egynapos belépés a fesztivál csütörtöki, pénteki, vagy szombati napjára." },
    { id: "house-pass", label: "Kaleidoszkóp Ház pass", price: 5000, description: "Belépés csak a Kaleidoszkóp Ház programjaira az egész hétvégén." },
    { id: "house-day", label: "Kaleidoszkóp Ház napi jegy", price: 2500, description: "Egynapos belépés a Kaleidoszkóp Ház programjaira." },
  ],

  camping: {
    intro: "A kempingjegyeket közvetlenül a Gran Campingnél tudjátok megváltani.",
    options: [
      {
        label: "Kemping jegy",
        price: "11000 Ft/fő + 2400 Ft IFA",
        description: "Teljes fesztiválra szóló kempingbelépő.",
      },
      {
        label: "Napi kemping jegy",
        price: "4000 Ft/fő + 800 Ft IFA",
        description: "Egynapos kempingbelépő a fesztivál idejére.",
      },
    ],
    info: [
      ""
    ],
  },

  faq: [
    { q: "Vásárolhatok csak egy napra szóló jegyet?", a: "Igen, napi jegyek elérhetők csütörtökre, péntekre és szombatra is." },
    { q: "Minden korosztály számára nyitott az esemény?", a: "Igen! A Hegyfeszt mindenki számára nyitott. 14 év alatt ingyenes a belépés." },
  ],
};
