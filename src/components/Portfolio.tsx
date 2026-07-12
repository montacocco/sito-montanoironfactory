"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { asset } from "@/lib/assets";
import { progetti, type Progetto } from "@/lib/progetti";
import { IconPin, IconArrowRight } from "./Icons";

function Lightbox({ progetto, onClose }: { progetto: Progetto; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const many = progetto.immagini.length > 1;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + progetto.immagini.length) % progetto.immagini.length),
    [progetto.immagini.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % progetto.immagini.length),
    [progetto.immagini.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-zinc-950/90 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={progetto.titolo}
    >
      <motion.div
        className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-md bg-zinc-900 shadow-2xl"
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={asset(progetto.immagini[index].src)}
              alt={progetto.immagini[index].alt}
              className="max-h-[55svh] w-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>

          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-zinc-950/70 text-white backdrop-blur-sm transition-colors hover:bg-accent-500 hover:text-zinc-950"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          </button>

          {many && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Foto precedente"
                className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-zinc-950/70 text-white backdrop-blur-sm transition-colors hover:bg-accent-500 hover:text-zinc-950"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Foto successiva"
                className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-zinc-950/70 text-white backdrop-blur-sm transition-colors hover:bg-accent-500 hover:text-zinc-950"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {progetto.immagini.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Foto ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-7 bg-accent-400" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-400">
              {progetto.categoria}
            </span>
            {progetto.anno && (
              <span className="text-sm text-zinc-500">{progetto.anno}</span>
            )}
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
            {progetto.titolo}
          </h3>
          <p className="mt-1.5 flex items-center gap-2 text-sm text-zinc-400">
            <IconPin width={15} height={15} className="text-accent-400" />
            {progetto.luogo}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-300">
            {progetto.descrizione}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [aperto, setAperto] = useState<Progetto | null>(null);

  return (
    <section id="lavori" className="scroll-mt-16 bg-white py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
            Lavori realizzati
          </p>
          <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-5xl">
            Qualche cantiere di cui andiamo fieri
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            Ogni lavoro è diverso: qui trovi alcuni interventi recenti, con foto
            e dettagli. Clicca su un progetto per vederlo da vicino.
          </p>
        </Reveal>

        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-14 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {progetti.map((p, i) => (
            <Reveal
              key={p.titolo}
              delay={(i % 3) * 0.12}
              className="w-[85%] shrink-0 snap-start sm:w-auto sm:shrink"
            >
              <button
                type="button"
                onClick={() => setAperto(p)}
                className="group block w-full text-left"
                aria-label={`Apri il progetto: ${p.titolo}`}
              >
                <article className="overflow-hidden rounded-md border border-zinc-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={asset(p.immagini[0].src)}
                      alt={p.immagini[0].alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-400 backdrop-blur-sm">
                      {p.categoria}
                    </span>
                    {p.immagini.length > 1 && (
                      <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="7" width="14" height="14" rx="1.5" />
                          <path d="M7 7V4.5A1.5 1.5 0 0 1 8.5 3H19a2 2 0 0 1 2 2v10.5a1.5 1.5 0 0 1-1.5 1.5H17" />
                        </svg>
                        {p.immagini.length}
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                        {p.titolo}
                      </h3>
                      <p className="mt-0.5 text-sm text-zinc-300">{p.luogo}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5">
                    <p className="line-clamp-2 pr-4 text-sm leading-relaxed text-zinc-600">
                      {p.descrizione}
                    </p>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-accent-500 group-hover:text-zinc-950">
                      <IconArrowRight width={16} height={16} />
                    </span>
                  </div>
                </article>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {aperto && <Lightbox progetto={aperto} onClose={() => setAperto(null)} />}
      </AnimatePresence>
    </section>
  );
}
