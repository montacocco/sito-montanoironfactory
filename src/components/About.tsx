import Reveal from "./Reveal";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

const values = [
  {
    title: "Qualità",
    text: "Materiali selezionati e tecniche di posa curate: un infisso rende solo se è montato bene.",
  },
  {
    title: "Precisione",
    text: "Misure esatte, sigillature a norma, finiture pulite. I dettagli fanno la differenza.",
  },
  {
    title: "Affidabilità",
    text: "Tempi rispettati, preventivi chiari e assistenza anche dopo la fine dei lavori.",
  },
];

export default function About() {
  const years = new Date().getFullYear() - site.since;
  return (
    <section id="chi-siamo" className="scroll-mt-16 bg-grid-light bg-stone-50 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-md">
                <img
                  src={asset("/images/interior-1.jpg")}
                  alt="Scala con ringhiera in ferro battuto realizzata su misura"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[3/3.2]"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 rounded-md bg-accent-500 px-7 py-5 shadow-xl sm:-right-6">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-zinc-950">
                  {years}+
                </p>
                <p className="text-sm font-semibold text-zinc-900">
                  anni di lavoro del ferro
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
                Chi siamo
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl">
                Nati dal ferro,
                <br />
                cresciuti con gli infissi
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                Tutto comincia a Quarrata nel {site.since}, con il ferro:
                porte, ringhiere, cancelli e inferriate lavorati su misura per
                privati e imprese della zona. È lì che nasce il modo di lavorare
                che ci contraddistingue — misure esatte, cura del dettaglio,
                niente approssimazioni.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                Negli ultimi anni abbiamo portato la stessa precisione nel mondo
                dei serramenti, specializzandoci nella posa in opera di infissi,
                fino a fondare {site.legalName}. Siamo una realtà artigiana e di
                famiglia: chi fa il sopralluogo è la stessa persona che poi
                monta. Niente call center, niente venditori.
              </p>
            </Reveal>

            <div className="mt-9 space-y-4">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={0.1 + i * 0.1}>
                  <article className="flex gap-5 rounded-md border border-zinc-200 bg-white p-5 transition-all hover:border-accent-500/50 hover:shadow-md">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-accent-500">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-zinc-900">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                        {v.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
