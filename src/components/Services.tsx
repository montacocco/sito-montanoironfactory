import Reveal from "./Reveal";
import { asset } from "@/lib/assets";
import {
  IconWindow,
  IconTruck,
  IconWrench,
  IconDoor,
  IconShield,
  IconGate,
  IconArrowRight,
} from "./Icons";

const services = [
  {
    icon: IconWindow,
    title: "Montaggio infissi",
    image: "/images/hero-1.jpg",
    alt: "Scorrevoli in alluminio nero in un soggiorno moderno",
    text: "Il cuore del nostro lavoro: posa in opera di finestre, portefinestre e scorrevoli con sigillature a norma, regolazioni millimetriche e finiture pulite.",
  },
  {
    icon: IconTruck,
    title: "Fornitura su richiesta",
    image: "/images/house-1.jpg",
    alt: "Villa moderna bianca con infissi minimali",
    text: "Nessuna vendita porta a porta: se lo desideri, selezioniamo e forniamo noi gli infissi più adatti al tuo progetto, in PVC, alluminio o legno.",
  },
  {
    icon: IconWrench,
    title: "Assistenza e manutenzione",
    image: "/images/interior-2.jpg",
    alt: "Interno luminoso con porta bianca",
    text: "Regolazioni, sostituzione di ferramenta e guarnizioni, riparazioni su serramenti esistenti. Interventi rapidi, anche su infissi montati da altri.",
  },
  {
    icon: IconDoor,
    title: "Porte in ferro",
    image: "/images/kitchen-1.jpg",
    alt: "Ingresso moderno con porta e rivestimento scuro",
    text: "Porte in ferro su misura per abitazioni, cantine, garage e attività: robuste per natura, curate nel disegno.",
  },
  {
    icon: IconShield,
    title: "Inferriate di sicurezza",
    image: "/images/house-2.jpg",
    alt: "Casa con finestre bianche al tramonto",
    text: "Inferriate fisse e apribili costruite sulle tue misure: proteggono la casa senza rinunciare a luce e design.",
  },
  {
    icon: IconGate,
    title: "Ringhiere e cancelli",
    image: "/images/interior-1.jpg",
    alt: "Scala interna con ringhiera in ferro battuto nero",
    text: "Ringhiere per scale e balconi, cancelli pedonali e carrabili: ferro lavorato artigianalmente e installato a regola d'arte.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="scroll-mt-16 bg-stone-50 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
            I nostri servizi
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-5xl">
            Dalla posa degli infissi
            <br className="hidden sm:block" /> al ferro su misura
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            Un unico interlocutore per serramenti e lavorazioni in ferro:
            sopralluogo, consulenza, realizzazione e installazione.
          </p>
        </Reveal>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 3) * 0.12}
              className="w-[82%] shrink-0 snap-start sm:w-auto sm:shrink"
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <img
                    src={asset(s.image)}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-sm bg-accent-500 text-zinc-950 shadow-lg">
                    <s.icon width={22} height={22} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-zinc-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-600">
                    {s.text}
                  </p>
                  <a
                    href="#contatti"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent-600 transition-colors hover:text-accent-700"
                  >
                    Richiedi informazioni
                    <IconArrowRight
                      width={15}
                      height={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
