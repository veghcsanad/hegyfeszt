// ============================================================
// HOME PAGE DATA — edit here to update the home page
// ============================================================

const HOME_DATA = {
  meta: {
    title: "Hegyfeszt 2026 — Kaleidoszkóp Hegy Fesztivál",
  },
  hero: {
    headline: [""],
    subheadline: "2026. augusztus 27–29. · Esztergomi Várhegy és Kaleidoszkóp Ház",
    cta_primary:  { label: "Jegyek", href: "tickets.html" },
    cta_secondary: { label: "Programok", href: "programs.html" },
    countdownLabel: "A fesztivál kezdéséig",
    scrollLabel: "Scroll",
  },

  countdown: {
    targetDate: "2026-08-27T16:00:00",
  },

  headliners: [
    { name: "ДEVA", genre: "Elektronikus / performansz", href: "programs.html#deva" },
    { name: "ÓPERENTZIA", genre: "World / folk", href: "programs.html#operentzia" },
    { name: "ANIMA SOUND SYSTEM", genre: "Elektronikus / basszus", href: "programs.html#anima-sound-system" },
    { name: "...", genre: "Teljes program", href: "programs.html" }
  ],

  announcement: {
    label: "11. alkalom",
    text: "Augusztus 27–29. között három napos közösségi fesztivál Esztergomban.",
    link: { label: "Jegyek →", href: "tickets.html" },
  },

  sections: {
    featuresTitle: "Hegyfeszt.<br><span class=\"serif\">Alapfogalom. Nem definiáljuk.</span>",
    ctaBandTitle: "Ne maradj le.",
    ctaBandCtaLabel: "Jegyek most",
  },

  features: [
    {
      icon: "🎟️",
      title: "Jegyek és belépés",
      body: "Bérlet, napijegy és kedvezményes esztergomi jegy — mindet a Tixa oldalán vásárolhatod meg.",
    },
    {
      icon: "📍",
      title: "Különleges helyszínek",
      body: "Esztergomi Vár, Kaleidoszkóp Ház, Rondella Galéria és a Keresztény Múzeum együtt adja a fesztivál helyszíneit.",
    },
    {
      icon: "🎶",
      title: "Sokszínű programok",
      body: "Zene, elektronikus bulik, gyerekprogramok, workshopok, film, színház, slam poetry és fényinstallációk várnak.",
    },
    {
      icon: "🤝",
      title: "Közösségi élmény",
      body: "A Kaleidoszkóp Hegy Fesztivál nem tömegfesztivál: közösség, találkozások és alkotás három napban.",
    },
  ],
};
