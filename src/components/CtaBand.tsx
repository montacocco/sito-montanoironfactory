import Reveal from "./Reveal";
import { asset } from "@/lib/assets";
import { IconPhone, IconArrowRight } from "./Icons";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={asset("/images/hero-2.jpg")}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-zinc-950/80" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
                Hai un progetto in mente?
                <br />
                <span className="text-accent-400">Il sopralluogo è gratuito.</span>
              </h2>
              <p className="mt-4 max-w-xl text-zinc-300">
                Chiamaci o scrivici: rispondiamo in fretta e senza impegno.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.phones[0].href}
                className="inline-flex items-center gap-2.5 rounded-sm bg-accent-500 px-7 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
              >
                <IconPhone width={17} height={17} />
                {site.phones[0].label}
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Scrivici
                <IconArrowRight width={16} height={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
