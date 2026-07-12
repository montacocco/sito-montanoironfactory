export const site = {
  name: "Montano Iron Factory",
  legalName: "Montano Iron Factory SNC",
  since: 2005,
  address: "Via Castello Biagini 44/1, 51039 Quarrata (PT)",
  region: "Toscana, Italia",
  phones: [
    { label: "+39 351 621 5552", href: "tel:+393516215552" },
    { label: "+39 328 143 9383", href: "tel:+393281439383" },
  ],
  email: "montanoironfactory@gmail.com",
  // Numero WhatsApp Business (solo cifre, con prefisso internazionale senza +)
  whatsapp: {
    number: "393516215552",
    label: "+39 351 621 5552",
    href: "https://wa.me/393516215552?text=Ciao%2C%20vi%20scrivo%20dal%20sito.%20Vorrei%20informazioni%20per%20un%20preventivo.",
  },
  vat: "02113940478",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Via+Castello+Biagini+44%2F1%2C+51039+Quarrata+PT",
  gestionaleUrl: "https://gestionale.montanoironfactory.com",
} as const;
