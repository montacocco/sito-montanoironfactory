import Reveal from "./Reveal";
import { IconRuler, IconShield, IconWindow, IconWrench, IconCheck, IconAward } from "./Icons";

const regole = [
  {
    icon: IconRuler,
    title: "Messa in bolla e fissaggio",
    text: "Ancoraggi scelti in base a peso, dimensioni e muratura: l'anta chiude perfetta oggi e continua a farlo negli anni.",
  },
  {
    icon: IconShield,
    title: "Sigillatura del giunto",
    text: "Nastri espandenti, schiume e sigillanti sul perimetro: tenuta ad aria, acqua e vento dove il serramento incontra il muro.",
  },
  {
    icon: IconWindow,
    title: "Isolamento continuo",
    text: "Nessuna interruzione dell'isolamento tra telaio e muratura: niente ponti termici, condensa o muffa sul perimetro.",
  },
  {
    icon: IconWrench,
    title: "Regolazione e collaudo",
    text: "Ferramenta registrata anta per anta e verifica finale di chiusure, scorrimenti e sigillature prima di consegnare.",
  },
];

const venditori = [
  "La posa è spesso subappaltata a squadre esterne, ogni volta diverse",
  "Il montaggio è l'ultima voce del preventivo, quella da comprimere",
  "Se qualcosa non va, inizia il rimpallo tra venditore e posatore",
];

const posatori = [
  "Posa eseguita da installatori certificati UNI 11673-2",
  "In cantiere c'è chi risponde del lavoro, dall'inizio alla fine",
  "La posa è il cuore del preventivo, non un accessorio",
  "Nessun catalogo da piazzare: ti consigliamo solo ciò che monteremmo a casa nostra",
  "Un solo referente per consigli, montaggio e assistenza nel tempo",
];

function IconMinus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  );
}

export default function Posa() {
  return (
    <section id="posa" className="scroll-mt-16 bg-stone-50 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
              Montaggio a regola d&apos;arte
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-5xl">
              Il buon montaggio non si vede.
              <br />
              <span className="text-accent-600">Si sente, per anni.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Le prestazioni di un serramento vengono certificate in
              laboratorio, ma a casa tua si decidono sul{" "}
              <strong className="font-semibold text-zinc-900">
                giunto di posa
              </strong>
              : quel perimetro tra telaio e muratura da cui passano aria,
              acqua, freddo e rumore.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Una finestra montata male dà subito problemi d&apos;uso — ante
              fuori registro, chiusure dure, spifferi — ma il danno più grande
              non si vede: ponti termici e infiltrazioni d&apos;aria nel giunto
              fanno salire la{" "}
              <strong className="font-semibold text-zinc-900">
                trasmittanza termica reale
              </strong>{" "}
              dell&apos;intero foro finestra. Paghi un serramento ad alte
              prestazioni e ti ritrovi le prestazioni di uno vecchio.
            </p>
            <div className="mt-7 rounded-md border-l-4 border-accent-500 bg-accent-50 p-5">
              <p className="text-[15px] font-medium leading-relaxed text-zinc-800">
                Il montaggio è tutto: una posa sbagliata può annullare il
                vantaggio termico — e il risparmio in bolletta — per cui hai
                cambiato gli infissi. E la garanzia del produttore non copre
                gli errori di posa.
              </p>
            </div>
            <div className="relative mt-5 overflow-hidden rounded-md border border-accent-500/30 bg-zinc-950 p-6 sm:p-7">
              <div
                className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent-500/20 blur-[70px]"
                aria-hidden
              />
              <div className="relative flex items-start gap-4 sm:gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-accent-500 text-zinc-950 shadow-lg shadow-accent-500/30 sm:h-14 sm:w-14">
                  <IconAward width={28} height={28} strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                    Certificazione
                  </p>
                  <p className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-white sm:text-xl">
                    Posatori certificati UNI 11673-2
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    La norma nazionale che certifica conoscenze, abilità e
                    competenze di chi posa i serramenti. A montare a casa tua
                    non c&apos;è una squadra qualunque: c&apos;è un installatore
                    qualificato.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {regole.map((r, i) => (
              <Reveal key={r.title} delay={0.1 + i * 0.08}>
                <article className="h-full rounded-md border border-zinc-200 bg-white p-5 transition-colors hover:border-accent-500/50 sm:p-6">
                  <div className="flex items-center gap-3 sm:block">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-accent-100 text-accent-700 sm:h-11 sm:w-11">
                      <r.icon width={22} height={22} />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-zinc-900 sm:mt-4">
                      {r.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 sm:mt-2">
                    {r.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Venditori vs posatori */}
        <Reveal delay={0.1}>
          <div className="mt-14 max-w-2xl sm:mt-20">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-zinc-900 sm:text-3xl">
              Venditori o posatori?
            </h3>
            <p className="mt-3 text-zinc-600">
              Molte aziende di infissi nascono per vendere: il montaggio è un
              costo da contenere. Noi facciamo il percorso inverso — e per chi
              compra, la differenza è concreta.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal delay={0.15}>
            <div className="h-full rounded-md border border-zinc-200 bg-white p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
                Chi soprattutto vende
              </p>
              <ul className="mt-6 space-y-4">
                {venditori.map((v) => (
                  <li key={v} className="flex items-start gap-3.5 text-[15px] text-zinc-500">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-400">
                      <IconMinus width={13} height={13} />
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="relative h-full overflow-hidden rounded-md border border-accent-500/30 bg-zinc-950 p-7 sm:p-8">
              <div
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-500/15 blur-[80px]"
                aria-hidden
              />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-accent-400">
                Chi monta per mestiere
              </p>
              <ul className="relative mt-6 space-y-4">
                {posatori.map((p) => (
                  <li key={p} className="flex items-start gap-3.5 text-[15px] text-zinc-200">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-500/15 text-accent-400">
                      <IconCheck width={13} height={13} strokeWidth={2.5} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
