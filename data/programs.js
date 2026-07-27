// ============================================================
// PROGRAMS DATA — edit here to update the programs page
// ============================================================

const PROGRAMS_DATA = {
  artists: [
    {
      id: "deva",
      name: "ДEVA",
      role: "headliner",
      genre: "Folktronica / elektronikus",
      origin: "Budapest, Magyarország",
      image: null,
      spotify: "https://open.spotify.com/artist/2wfO6DMEhzft4IfwM1YzEQ",
      accent: "cranberry",
      bio: "ДEVA elektronikus hangzásvilágot ötvöz magyar népzenei elemekkel és atmoszférikus vokálokkal.",
      highlights: [
        "Magyar népzene és elektronika ötvözése",
        "Nemzetközi fesztiválfellépések"
      ]
    },
    {
      id: "operentzia",
      name: "ÓPERENTZIA",
      role: "headliner",
      genre: "Pszichedelikus elektronika / folk / trance",
      origin: "Budapest – Zala, Magyarország",
      image: null,
      spotify: "https://open.spotify.com/artist/4uNc7YwzDW14nzslH4WVHT",
      accent: "violet",
      bio: "Az Óperentzia a magyar népzenei motívumokat ötvözi pszichedelikus elektronikával, trance-szel és dubbal. Zenéjük a tradicionális dallamokat modern elektronikus hangzásokkal kapcsolja össze.",
      highlights: [
        "2005-ben alakult",
        "Rendszeres fellépő az OZORA fesztiválon",
        "A folk és a psy-trance különleges ötvözete"
      ]
    },

    {
      id: "anima-sound-system",
      name: "ANIMA SOUND SYSTEM",
      role: "headliner",
      genre: "Elektronikus / alternatív / világzene",
      origin: "Budapest, Magyarország",
      image: null,
      spotify: "https://open.spotify.com/artist/4VvtWgffvYS49kmxBqgm5l",
      accent: "orange",
      bio: "Az Anima Sound System a magyar elektronikus zenei szcéna egyik meghatározó együttese, amely a breakbeatet, a dubot és a népzenei elemeket ötvözi.",
      highlights: [
        "Több mint 30 éve aktív zenekar",
        "Kultikus dalok: Tedd a napfényt be a számba, '68",
        "Nemzetközileg is ismert magyar formáció"
      ]
    },

    {
      id: "oiee",
      name: "OIEE",
      role: "headliner",
      genre: "House / breakbeat / neo-soul",
      origin: "Budapest, Magyarország",
      image: null,
      spotify: "https://open.spotify.com/artist/2ns47ulOmmJQtO0HMIIMUY",
      accent: "teal",
      bio: "OIEE, azaz Kocsis Bence producer, énekes és vizuális művész, aki könnyed house- és breakbeat-hangzásokat vegyít neo-soul elemekkel.",
      highlights: [
        "Nemzetközi turnék Berlinben és Barcelonában",
        "Saját vizuális világot épít",
        "A magyar elektronikus szcéna egyik exportképes előadója"
      ]
    },

    {
      id: "lenkke",
      name: "LENKKE",
      role: "headliner",
      genre: "Elektronikus / downtempo",
      origin: "Magyarország",
      image: null,
      spotify: null,
      accent: "emerald",
      bio: "A Lenkke projekt organikus és elektronikus hangzásokat ötvöz, atmoszférikus, táncolható megszólalással.",
      highlights: [
        "Kortárs elektronikus produkció",
        "Downtempo és ambient hatások",
        "Rendszeres fesztiválfellépő"
      ]
    },

    {
      id: "labek-chrobak",
      name: "LABEK&CHROBAK",
      role: "headliner",
      genre: "Elektronikus / live act",
      origin: "Magyarország",
      image: null,
      spotify: null,
      accent: "indigo",
      bio: "A Labek & Chrobak duó elektronikus live actjeiben a klubzenei elemeket improvizatív megközelítéssel ötvözi.",
      highlights: [
        "Kísérleti elektronikus hangzás",
        "Élő performanszokra épül",
        "Nemzetközi fellépések"
      ]
    },

    {
      id: "berlin-hotel-collective",
      name: "BERLIN HOTEL COLLECTIVE",
      role: "headliner",
      genre: "Elektronikus / experimentális",
      origin: "Berlin, Németország",
      image: null,
      spotify: null,
      accent: "slate",
      bio: "A Berlin Hotel Collective különböző zenei és vizuális hatásokat egyesít experimentális elektronikus produkcióiban.",
      highlights: [
        "Berlini underground kötődés",
        "Kollektív alkotói forma",
        "Elektronikus improvizáció"
      ]
    },

    {
      id: "zse",
      name: "ZSÉ",
      role: "headliner",
      genre: "Alternatív / elektronikus",
      origin: "Magyarország",
      image: null,
      spotify: null,
      accent: "pink",
      bio: "ZSÉ kortárs elektronikus és alternatív zenei hatásokból építkező előadó, aki sajátos atmoszférát teremt fellépésein.",
      highlights: [
        "Kísérletező megszólalás",
        "Kortárs elektronikus hatások",
        "Fiatal magyar előadó"
      ]
    },

    {
      id: "said-chalaban",
      name: "SAÏD CHALABAN",
      role: "headliner",
      genre: "Világzene / elektronikus",
      origin: "Marokkó",
      image: null,
      spotify: null,
      accent: "amber",
      bio: "Saïd Chalaban zenéjében és fellépéseiben a közel-keleti és észak-afrikai zenei hagyományok találkoznak a modern hangzással.",
      highlights: [
        "Észak-afrikai inspirációk",
        "Tradicionális és modern elemek",
        "Nemzetközi közeg"
      ]
    },

    {
      id: "sicksteez",
      name: "$ICK$TEEZ",
      role: "headliner",
      genre: "Hip-hop / trap",
      origin: "Magyarország",
      image: null,
      spotify: null,
      accent: "red",
      bio: "$ICK$TEEZ modern trap- és hiphop-hatásokkal dolgozó előadó, energikus fellépésekkel.",
      highlights: [
        "Kortárs trap hangzás",
        "Erőteljes színpadi jelenlét",
        "Fiatal feltörekvő produkció"
      ]
    },

    {
      id: "rutkai-bori-banda",
      name: "RUTKAI BORI BANDA",
      role: "headliner",
      genre: "Alternatív pop / gyerekzene",
      origin: "Budapest, Magyarország",
      image: null,
      spotify: null,
      accent: "sky",
      bio: "Rutkai Bori és zenekara játékos, kreatív dalaival a gyerekeket és a felnőtteket egyaránt megszólítja.",
      highlights: [
        "Családbarát koncertek",
        "Mesés vizuális világ",
        "Több generáció kedvence"
      ]
    },
    {
      id: "villo",
      name: "VILLŐ",
      role: "headliner",
      genre: "Alternatív folk / dream pop",
      origin: "Magyarország",
      image: null,
      spotify: "https://open.spotify.com/artist/5qlX0ApNWukXe5g6Gb7cmJ",
      accent: "forest",
      bio: "Villő atmoszférikus, népzenei és alternatív pophatásokból építkező projekt, amely finom elektronikus elemekkel és erős vizuális világgal dolgozik.",
      highlights: [
        "Madárlány album",
        "Kísérletező folk hangzás",
        "Feltörekvő hazai előadó"
      ]
    },
    {
      id: "nesztech",
      name: "NESZTECH",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "teal",
      bio: "",
      highlights: [],
    },

    {
      id: "moyogi",
      name: "MOYOGI",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "emerald",
      bio: "",
      highlights: [],
    },

    {
      id: "mehana",
      name: "MEHANA",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "amber",
      bio: "",
      highlights: [],
    },

    {
      id: "belso-parancs",
      name: "BELSŐ PARANCS",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "red",
      bio: "",
      highlights: [],
    },

    {
      id: "martin-m",
      name: "MARTIN M",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "blue",
      bio: "",
      highlights: [],
    },

    {
      id: "nikoo",
      name: "NIKOØ",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "violet",
      bio: "",
      highlights: [],
    },

    {
      id: "jaky-chan",
      name: "JÁKY CHAN",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "orange",
      bio: "",
      highlights: [],
    },

    {
      id: "mkls",
      name: "MKLS",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "pink",
      bio: "",
      highlights: [],
    },

    {
      id: "eliezer",
      name: "ELIÉZER",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "indigo",
      bio: "",
      highlights: [],
    },

    {
      id: "constant-k",
      name: "CONSTANT K",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "teal",
      bio: "",
      highlights: [],
    },

    {
      id: "fiji",
      name: "FIJI",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "emerald",
      bio: "",
      highlights: [],
    },

    {
      id: "belbecs",
      name: "BELBECS",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "violet",
      bio: "",
      highlights: [],
    },

    {
      id: "pixie",
      name: "PIXIE",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "pink",
      bio: "",
      highlights: [],
    },

    {
      id: "gabcikovo",
      name: "GABČÍKOVO",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "sky",
      bio: "",
      highlights: [],
    },

    {
      id: "daen",
      name: "DæN",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "slate",
      bio: "",
      highlights: [],
    },

    {
      id: "don-ocs",
      name: "DON.ÖCS",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "orange",
      bio: "",
      highlights: [],
    },

    {
      id: "apak-zenekara",
      name: "APÁK ZENEKARA",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "emerald",
      bio: "",
      highlights: [],
    },

    {
      id: "b-art",
      name: "B_ART",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "slate",
      bio: "",
      highlights: [],
    },

    {
      id: "andrija-jager",
      name: "ANDRIJA JÄGER",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "cranberry",
      bio: "",
      highlights: [],
    },

    {
      id: "anyamborogass",
      name: "ANYÁMBOROGASS",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "orange",
      bio: "",
      highlights: [],
    },

    {
      id: "zanocz",
      name: "ZANOCZ",
      role: "fellépő",
      genre: "",
      origin: "",
      image: null,
      spotify: null,
      accent: "red",
      bio: "",
      highlights: [],
    }
  ],

  programs: [
    {
      id: "design",
      title: "Designer vásár",
      icon: "🛍️",
      description: "Hazai dizájnerek és alkotók portékái egy kreatív vásárban, egyedi termékekkel.",
      sessions: [""],
      location: ""
    },
    {
      id: "theatre",
      title: "Színházi előadás",
      icon: "🎭",
      description: "Kísérleti és kortárs színházi produkciók az élmény és a közösségi játék jegyében.",
      sessions: [""],
      location: ""
    },
    {
      id: "panels",
      title: "Panelbeszélgetések",
      icon: "🗣️",
      description: "Szakmai és közösségi beszélgetések a zenei, művészeti és fesztiválkultúra témáiról.",
      sessions: [""],
      location: ""
    },
    {
      id: "slam",
      title: "Slam poetry",
      icon: "✍️",
      description: "Szabadvers és performatív költészet, kortárs költők és a közönség interakciója.",
      sessions: [""],
      location: ""
    },
    {
      id: "exhibitions",
      title: "Képzőművészeti kiállítások",
      icon: "🖼️",
      description: "Kortárs és klasszikus művészeti tárlatok.",
      sessions: [""],
      location: ""
    },
    {
      id: "tours",
      title: "Tárlatvezetések",
      icon: "👣",
      description: "Vezetett túrák a fesztivál művészeti és installációs helyszínein.",
      sessions: [""],
      location: ""
    }
  ],
};

