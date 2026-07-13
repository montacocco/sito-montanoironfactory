"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconArrowRight, IconAward } from "./Icons";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";

const slides = [
  {
    src: asset("/images/hero-2.jpg"),
    alt: "Villa moderna con grandi vetrate al tramonto",
  },
  {
    src: asset("/images/hero-1.jpg"),
    alt: "Soggiorno moderno con scorrevoli in alluminio nero",
  },
  {
    src: asset("/images/hero-3.jpg"),
    alt: "Casa moderna con facciata in legno e vetro",
  },
  {
    src: asset("/images/kitchen-1.jpg"),
    alt: "Ingresso moderno con porta in legno e rivestimento scuro",
  },
];

const SLIDE_MS = 6000;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.21, 0.65, 0.36, 1] as const },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  const goTo = useCallback((i: number) => setIndex(i % slides.length), []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-zinc-950">
      {/* Slider di sfondo con effetto Ken Burns */}
      <div className="absolute inset-0" aria-hidden>
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          >
            <motion.img
              src={slides[index].src}
              alt={slides[index].alt}
              className="h-full w-full object-cover"
              initial={reduce ? {} : { scale: 1.12 }}
              animate={reduce ? {} : { scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" aria-hidden />
            Quarrata · Pistoia · Toscana — artigiani del ferro dal {site.since}
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
          >
            Infissi montati
            <br />
            <span className="text-accent-400">a regola d&rsquo;arte.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-200 sm:text-xl"
          >
            Posa in opera professionale di finestre e serramenti, fornitura su
            richiesta e lavorazioni in ferro su misura. Il tuo progetto, seguito
            da chi il mestiere lo fa con le mani.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contatti"
              className="group inline-flex items-center gap-2.5 rounded-sm bg-accent-500 px-7 py-4 text-sm font-bold uppercase tracking-wider text-zinc-950 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30"
            >
              Preventivo gratuito
              <IconArrowRight
                width={17}
                height={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#realizzazioni"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10"
            >
              Le nostre soluzioni
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-9 inline-flex items-center gap-3 text-[15px] font-semibold text-white"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-accent-400/40 bg-accent-400/15 text-accent-400">
              <IconAward width={20} height={20} />
            </span>
            <span>
              Posatori certificati{" "}
              <span className="text-accent-400">UNI 11673-2</span>
            </span>
          </motion.p>
        </motion.div>

        {/* Indicatori slide */}
        <div className="mt-16 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Vai alla slide ${i + 1}`}
              className="group relative h-6 w-10"
            >
              <span
                className={`absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full transition-colors ${
                  i === index ? "bg-accent-400" : "bg-white/25 group-hover:bg-white/50"
                }`}
              />
              {i === index && !reduce && (
                <motion.span
                  className="absolute inset-x-0 top-1/2 h-[3px] origin-left -translate-y-1/2 rounded-full bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Indicatore di scroll */}
      <motion.a
        href="#numeri"
        aria-label="Scorri in basso"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 text-white/60 transition-colors hover:text-white sm:block"
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
}
