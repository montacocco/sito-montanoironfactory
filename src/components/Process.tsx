import Reveal from "./Reveal";
import { IconPin, IconDocument, IconRuler, IconCheck } from "./Icons";

const steps = [
  {
    icon: IconPin,
    title: "Sopralluogo e misure",
    text: "Veniamo da te per capire le esigenze, rilevare le misure e valutare i vani. Gratuito e senza impegno.",
  },
  {
    icon: IconDocument,
    title: "Preventivo chiaro",
    text: "Un preventivo dettagliato e trasparente: solo posa, oppure fornitura e posa. Nessun costo nascosto.",
  },
  {
    icon: IconRuler,
    title: "Preparazione",
    text: "Ordiniamo o riceviamo il materiale, pianifichiamo l'intervento e prepariamo il cantiere.",
  },
  {
    icon: IconCheck,
    title: "Posa e collaudo",
    text: "Montaggio a regola d'arte, sigillature, regolazioni finali e verifica del risultato insieme a te.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="scroll-mt-16 relative overflow-hidden bg-zinc-950 py-14 sm:py-28"
    >
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-[400px] w-[600px] rounded-full bg-accent-500/10 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-400">
            Come lavoriamo
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-5xl">
            Un metodo semplice,
            <br /> un risultato preciso
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <li className="relative h-full">
                {/* Linea di connessione */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute left-0 top-6 hidden h-px w-full translate-x-16 bg-gradient-to-r from-accent-500/50 to-white/10 lg:block"
                    aria-hidden
                  />
                )}
                <div className="relative flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm border border-accent-500/40 bg-zinc-950 text-accent-400 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
                    <s.icon width={22} height={22} />
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                  {s.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
