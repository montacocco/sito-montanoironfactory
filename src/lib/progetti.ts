// ============================================================
// LAVORI REALIZZATI
// ------------------------------------------------------------
// Per aggiungere un lavoro:
//  1. metti le foto in public/images/lavori/ (es. cantiere-verdi-1.webp)
//  2. aggiungi un oggetto a questo array seguendo gli esempi
//
// Le foto attuali sono i lavori reali ripresi dal vecchio sito.
// Luoghi e anni sono indicativi: precisali quando puoi.
// ============================================================

export type Progetto = {
  titolo: string;
  luogo: string;
  anno?: string;
  categoria: string;
  descrizione: string;
  immagini: { src: string; alt: string }[];
};

export const progetti: Progetto[] = [
  {
    titolo: "Cancelli scorrevoli e recinzioni a doghe",
    luogo: "Abitazioni private — provincia di Pistoia",
    anno: "2023",
    categoria: "Cancelli",
    descrizione:
      "Recinzioni moderne a doghe orizzontali con cancelli scorrevoli carrabili abbinati, realizzati su misura e predisposti per l'automazione. Struttura in ferro zincato e verniciato per resistere agli agenti atmosferici, montaggio su muretti esistenti con fissaggi a scomparsa.",
    immagini: [
      {
        src: "/images/lavori/cancello-antracite.webp",
        alt: "Cancello scorrevole antracite con recinzione a doghe e pilastri in pietra",
      },
      {
        src: "/images/lavori/recinzione-tortora-1.webp",
        alt: "Recinzione a doghe orizzontali tortora con cancello",
      },
      {
        src: "/images/lavori/recinzione-tortora-2.webp",
        alt: "Cancello scorrevole a doghe tortora visto dalla strada",
      },
    ],
  },
  {
    titolo: "Inferriate di sicurezza su misura",
    luogo: "Abitazioni private — Quarrata e dintorni",
    categoria: "Inferriate",
    descrizione:
      "Inferriate fisse, apribili e a libro costruite sulle misure di ogni apertura: dal disegno classico con volute per le porte d'ingresso, alle griglie ad arco per aperture centinate, fino alle soluzioni a libro che si aprono completamente. Verniciatura a scelta e serrature di sicurezza.",
    immagini: [
      {
        src: "/images/lavori/inferriata-porta.webp",
        alt: "Inferriata grigia con volute decorative su porta d'ingresso",
      },
      {
        src: "/images/lavori/inferriata-finestra.webp",
        alt: "Inferriata nera a maglia su finestra con persiane",
      },
      {
        src: "/images/lavori/inferriata-arco.webp",
        alt: "Inferriata ad arco su apertura centinata",
      },
      {
        src: "/images/lavori/inferriata-libro.webp",
        alt: "Inferriata a libro aperta su porta-finestra",
      },
    ],
  },
  {
    titolo: "Ringhiere, parapetti e scale esterne",
    luogo: "Abitazioni private — provincia di Pistoia",
    anno: "2022",
    categoria: "Ringhiere",
    descrizione:
      "Parapetti per terrazze in ferro battuto con aste tornite e riccioli forgiati, pannelli in lamiera con decori tagliati e scale esterne complete di ringhiera. Ogni pezzo è disegnato sull'architettura della casa e fissato con tasselli strutturali.",
    immagini: [
      {
        src: "/images/lavori/ringhiera-terrazza.webp",
        alt: "Ringhiera in ferro battuto con aste tornite su terrazza",
      },
      {
        src: "/images/lavori/parapetto-lamiera.webp",
        alt: "Parapetto in lamiera con decoro tagliato su terrazza",
      },
      {
        src: "/images/lavori/scala-esterna.webp",
        alt: "Scala esterna in ferro con ringhiere chiare",
      },
    ],
  },
  {
    titolo: "Serramenti su misura per casale in pietra",
    luogo: "Casale in pietra — Toscana",
    anno: "2022",
    categoria: "Infissi",
    descrizione:
      "Porte-finestre bianche con partitura all'inglese realizzate su misura per la ristrutturazione di un casale in pietra: dalla porta ad arco con sopraluce raggiato alla porta-finestra a tre ante, nel pieno rispetto dell'estetica dell'edificio.",
    immagini: [
      {
        src: "/images/lavori/casale-arco.webp",
        alt: "Porta ad arco bianca con sopraluce raggiato su casale in pietra",
      },
      {
        src: "/images/lavori/casale-portafinestra.webp",
        alt: "Porta-finestra bianca all'inglese su parete in pietra",
      },
      {
        src: "/images/lavori/casale-tre-ante.webp",
        alt: "Porta-finestra a tre ante con partitura all'inglese",
      },
    ],
  },
  {
    titolo: "Dall'officina: arredi e pezzi unici",
    luogo: "Officina — Quarrata (PT)",
    anno: "2022",
    categoria: "Officina",
    descrizione:
      "Non solo cancelli e ringhiere: in officina nascono anche arredi e pezzi unici in ferro, come tavoli con basamento forgiato, barbecue su misura con dettagli a ricciolo e carrelli da esterno. Se lo puoi disegnare, lo possiamo costruire.",
    immagini: [
      {
        src: "/images/lavori/officina-tavolo.webp",
        alt: "Tavolo rotondo in ferro con basamento a ricciolo in officina",
      },
      {
        src: "/images/lavori/officina-griglia.webp",
        alt: "Barbecue in ferro su misura con dettagli forgiati",
      },
      {
        src: "/images/lavori/officina-carrello.webp",
        alt: "Carrello in ferro con ruote a raggi in costruzione",
      },
    ],
  },
];
