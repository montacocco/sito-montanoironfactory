import Reveal from "./Reveal";
import { asset } from "@/lib/assets";
import { IconCheck } from "./Icons";

const materials = [
  {
    name: "PVC",
    text: "Ottimo isolamento termico e acustico con costi contenuti. Profili multicamera, zero manutenzione.",
  },
  {
    name: "Alluminio",
    text: "Profili a taglio termico: resistenza, durata e linee sottili. Ideale per grandi vetrate.",
  },
  {
    name: "Legno-alluminio",
    text: "Il calore del legno dentro, la protezione dell'alluminio fuori. La soluzione premium.",
  },
  {
    name: "Legno",
    text: "Naturale e senza tempo: perfetto per edifici storici e contesti classici.",
  },
];

const points = [
  "Nessuna vendita porta a porta: la fornitura nasce solo dalla tua richiesta",
  "Ti consigliamo il materiale giusto per esposizione, contesto e budget",
  "Vetrocamera basso emissivi, vetri acustici o di sicurezza secondo necessità",
  "Un solo referente per fornitura e posa: nessun rimpallo di responsabilità",
];

export default function Fornitura() {
  return (
    <section id="fornitura" className="scroll-mt-16 bg-white py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
              Fornitura su richiesta
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl">
              Prima di tutto posatori.
              <br />
              <span className="text-accent-600">La fornitura, se la vuoi, la seguiamo noi.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Il nostro mestiere è il montaggio. Ma se non hai già un fornitore,
              ci occupiamo anche della fornitura: analizziamo le esigenze, ti
              proponiamo le soluzioni più adatte e arriviamo in cantiere con il
              materiale giusto, pronto per una posa perfetta.
            </p>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3.5 text-[15px] text-zinc-700">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-100 text-accent-700">
                    <IconCheck width={13} height={13} strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={asset("/images/hero-3.jpg")}
                  alt="Casa moderna con ampie vetrate e rivestimento in legno"
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/85 to-transparent p-6 pt-16">
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                    Materiali che proponiamo
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              {materials.map((m, i) => (
                <Reveal key={m.name} delay={0.15 + i * 0.08}>
                  <article className="h-full rounded-md border border-zinc-200 bg-stone-50 p-4 transition-colors hover:border-accent-500/50 sm:p-5">
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-zinc-900">
                      {m.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                      {m.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                Materiali, vetri e ferramenta si definiscono insieme durante il
                sopralluogo — senza cataloghi imposti e senza pressioni commerciali.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
