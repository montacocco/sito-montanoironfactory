import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Montano Iron Factory — Montaggio Infissi e Lavorazioni in Ferro | Quarrata (PT)",
  description:
    "Montaggio professionale di infissi, fornitura su richiesta e lavorazioni in ferro su misura a Quarrata, Pistoia e in tutta la Toscana. L'esperienza artigiana del ferro dal 2005, la stessa precisione nei serramenti.",
  // 1. AGGIUNGI L'URL UFFICIALE (Serve a Google per evitare problemi di contenuti duplicati)
  metadataBase: new URL('https://montanoironfactory.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    "montaggio infissi",
    "infissi Quarrata",
    "infissi Pistoia",
    "serramenti Toscana",
    "porte in ferro",
    "inferriate di sicurezza",
    "ringhiere e cancelli",
  ],
  openGraph: {
    title: "Montano Iron Factory — Montaggio Infissi e Lavorazioni in Ferro",
    description:
      "Montaggio professionale di infissi e lavorazioni in ferro su misura a Quarrata (PT). Artigiani del ferro dal 2005.",
    url: 'https://montanoironfactory.com', // 2. AGGIUNGI L'URL ANCHE QUI
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${manrope.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
