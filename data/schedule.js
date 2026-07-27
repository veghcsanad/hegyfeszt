// ============================================================
// SCHEDULE DATA — edit here to update the schedule page
// ============================================================

const SCHEDULE_DATA = {
  days: [
    {
      id: "day1",
      label: "1. nap",
      date: "2026. augusztus 27.",
      stages: ["Főszínpad", "Alagsor", "Echo Dóm", "Kertszínpad"],
      slots: [
        { time: "16:00", artist: "OIEE",             stage: "Főszínpad",   genre: "Elektronikus",   duration: 60 },
        { time: "17:00", artist: "LENKKE",           stage: "Alagsor",     genre: "Elektronikus",   duration: 50 },
        { time: "17:30", artist: "LABEK&CHROBAK",   stage: "Echo Dóm",     genre: "Elektronikus",   duration: 45 },
        { time: "18:00", artist: "BERLIN HOTEL COLLECTIVE", stage: "Kertszínpad", genre: "Alternatív", duration: 60 },
        { time: "18:30", artist: "ZSÉ",              stage: "Főszínpad",   genre: "Pop",            duration: 55 },
        { time: "19:00", artist: "SAÏD CHALABAN",    stage: "Alagsor",     genre: "Jazz / elektronikus", duration: 60 },
        { time: "19:30", artist: "$ICK$TEEZ",      stage: "Echo Dóm",     genre: "Elektronikus",   duration: 60 },
        { time: "20:00", artist: "RUTKAI BORI BANDA", stage: "Kertszínpad", genre: "World",         duration: 50 },
        { time: "21:30", artist: "VILLŐ",            stage: "Főszínpad",   genre: "Indie",         duration: 60 },
        { time: "22:30", artist: "NESZTECH",         stage: "Alagsor",     genre: "Elektronikus",   duration: 90 },
        { time: "23:00", artist: "ДEVA",             stage: "Főszínpad",   genre: "Főfellépő / elektronikus", duration: 90 },
      ],
    },
    {
      id: "day2",
      label: "2. nap",
      date: "2026. augusztus 28.",
      stages: ["Főszínpad", "Alagsor", "Echo Dóm", "Kertszínpad"],
      slots: [
        { time: "14:00", artist: "MOYOGI",           stage: "Kertszínpad",  genre: "Elektronikus",   duration: 40 },
        { time: "15:00", artist: "MEHANA",           stage: "Alagsor",     genre: "Alternatív",      duration: 50 },
        { time: "16:00", artist: "BELSŐ PARANCS",   stage: "Echo Dóm",     genre: "Experimental",   duration: 55 },
        { time: "16:30", artist: "MARTIN M",         stage: "Főszínpad",   genre: "Hip-hop",        duration: 60 },
        { time: "17:30", artist: "NIKOØ",            stage: "Alagsor",     genre: "Pop",            duration: 65 },
        { time: "18:00", artist: "JÁKY CHAN",        stage: "Echo Dóm",    genre: "Elektronikus",   duration: 50 },
        { time: "19:00", artist: "MKLS",             stage: "Kertszínpad",  genre: "Alternatív",      duration: 65 },
        { time: "20:00", artist: "ELIÉZER",          stage: "Főszínpad",   genre: "Hip-hop",        duration: 60 },
        { time: "21:00", artist: "CONSTANT K",       stage: "Echo Dóm",    genre: "Elektronikus",   duration: 70 },
        { time: "22:00", artist: "FIJI",             stage: "Alagsor",     genre: "Indie",         duration: 75 },
        { time: "23:00", artist: "ÓPERENTZIA",       stage: "Főszínpad",   genre: "Főfellépő / world", duration: 120 },
      ],
    },
    {
      id: "day3",
      label: "3. nap",
      date: "2026. augusztus 29.",
      stages: ["Főszínpad", "Alagsor", "Echo Dóm", "Kertszínpad"],
      slots: [
        { time: "15:00", artist: "GABČÍKOVO",        stage: "Kertszínpad",  genre: "Alternatív",      duration: 40 },
        { time: "15:30", artist: "DæN",              stage: "Alagsor",     genre: "Elektronikus",   duration: 45 },
        { time: "16:00", artist: "DON.ÖCS",          stage: "Echo Dóm",    genre: "Rock",           duration: 55 },
        { time: "17:00", artist: "APÁK ZENEKARA",    stage: "Főszínpad",   genre: "Rock / folk",    duration: 55 },
        { time: "17:30", artist: "B_ART",             stage: "Alagsor",     genre: "Elektronikus",   duration: 65 },
        { time: "18:30", artist: "ANDRIJA JÄGER",     stage: "Echo Dóm",    genre: "Alternatív",      duration: 60 },
        { time: "19:00", artist: "ANYÁMBOROGASS",    stage: "Kertszínpad",  genre: "Pop",            duration: 50 },
        { time: "20:00", artist: "ZANOCZ",           stage: "Főszínpad",   genre: "Elektronikus",   duration: 60 },
        { time: "21:30", artist: "ANIMA SOUND SYSTEM", stage: "Főszínpad", genre: "Főfellépő / elektronikus", duration: 90 },
      ],
    },
  ],
};
