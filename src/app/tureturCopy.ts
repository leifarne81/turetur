export type TureturLang = "no" | "se" | "dk";

export type TureturCopy = {
  brand: {
    name: string;
    mark: string;
  };
  header: {
    navFind: string;
    navSell: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaFind: string;
    ctaSell: string;
  };
  cards: {
    heading: string;
    find: { title: string; description: string };
    sell: { title: string; description: string };
    payment: { title: string; description: string };
  };
  footer: { note: string };
  languages: { no: string; se: string; dk: string };
};

export const TURETUR_COPY: Record<TureturLang, TureturCopy> = {
  no: {
    brand: {
      name: "Turetur",
      mark: "T",
    },
    header: {
      navFind: "Finn reise",
      navSell: "Selg din reise",
      languageLabel: "Språk",
    },
    hero: {
      badge: "Trygg annonse og videresalg",
      title: "Trygg annonsering. Smartere videresalg av reiser.",
      subtitle:
        "Turetur kobler deg med andre som selger og kjøper fly, hotell og pakker – med tydelige avtaler og trygg betaling.",
      ctaFind: "Finn reise",
      ctaSell: "Selg din reise",
    },
    cards: {
      heading: "Slik fungerer det",
      find: {
        title: "Finn reise",
        description:
          "Søk etter fly, hotell og reisepakker – og få en trygg opplevelse fra første klikk til bekreftelse.",
      },
      sell: {
        title: "Selg din reise",
        description:
          "Annonser reisen du vil selge, kommuniser trygt og overfør når kjøperen er klar.",
      },
      payment: {
        title: "Trygg betaling",
        description:
          "Hold betalingen beskyttet med smarte steg for gjennomføring og bekreftelse.",
      },
    },
    footer: { note: "Turetur — trygg annonsering og videresalg av reiser." },
    languages: { no: "NO", se: "SE", dk: "DK" },
  },
  se: {
    brand: {
      name: "Turetur",
      mark: "T",
    },
    header: {
      navFind: "Hitta resa",
      navSell: "Sälj din resa",
      languageLabel: "Språk",
    },
    hero: {
      badge: "Trygg annons och andrahandsresor",
      title: "Trygg annonsering. Smidigare andrahandsresor.",
      subtitle:
        "Turetur kopplar ihop dig med andra som säljer och köper flyg, hotell och paket — med tydliga villkor och trygg betalning.",
      ctaFind: "Hitta resa",
      ctaSell: "Sälj din resa",
    },
    cards: {
      heading: "Så fungerar det",
      find: {
        title: "Hitta resa",
        description:
          "Sök efter flyg, hotell och paket — och få en trygg upplevelse från första klick till bekräftelse.",
      },
      sell: {
        title: "Sälj din resa",
        description:
          "Skapa en annons, kommunicera tryggt och genomför överlåtelsen när köparen är redo.",
      },
      payment: {
        title: "Trygg betalning",
        description:
          "Betalningen hålls skyddad med smarta steg för genomförande och bekräftelse.",
      },
    },
    footer: { note: "Turetur — trygg annonsering och andrahandsresor." },
    languages: { no: "NO", se: "SE", dk: "DK" },
  },
  dk: {
    brand: {
      name: "Turetur",
      mark: "T",
    },
    header: {
      navFind: "Find en rejse",
      navSell: "Sælg din rejse",
      languageLabel: "Sprog",
    },
    hero: {
      badge: "Tryg annonce og videresalg",
      title: "Tryg annoncering. Smartere videresalg af rejser.",
      subtitle:
        "Turetur forbinder dig med andre, der sælger og køber fly, hotel og pakkerejser — med klare vilkår og tryg betaling.",
      ctaFind: "Find en rejse",
      ctaSell: "Sælg din rejse",
    },
    cards: {
      heading: "Sådan fungerer det",
      find: {
        title: "Find en rejse",
        description:
          "Søg efter fly, hotel og pakkerejser — og få en tryg oplevelse fra første klik til bekræftelse.",
      },
      sell: {
        title: "Sælg din rejse",
        description:
          "Opret en annonce, kommuniker sikkert og overfør, når køberen er klar.",
      },
      payment: {
        title: "Tryg betaling",
        description:
          "Betalingen holdes beskyttet med smarte trin til gennemførsel og bekræftelse.",
      },
    },
    footer: { note: "Turetur — tryg annoncering og videresalg af rejser." },
    languages: { no: "NO", se: "SE", dk: "DK" },
  },
};

