"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "./Reveal";
import { asset } from "@/lib/assets";

const slides = [
  {
    src: "/images/hero-1.jpg",
    alt: "Soggiorno con scorrevoli alzanti in alluminio nero",
    caption: "Posa in opera di scorrevoli alzanti",
    detail: "Movimentazione, messa in bolla e regolazione di ante di grandi dimensioni",
  },
  {
    src: "/images/house-2.jpg",
    alt: "Casa di campagna con finestre bianche al tramonto",
    caption: "Sostituzione infissi su case esistenti",
    detail: "Smontaggio dei vecchi serramenti e posa dei nuovi senza opere murarie",
  },
  {
    src: "/images/interior-1.jpg",
    alt: "Scala interna con ringhiera in ferro battuto nero",
    caption: "Installazione di ringhiere in ferro",
    detail: "Realizzazione artigianale, fissaggi strutturali e finitura in opera",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Villa moderna con grandi vetrate illuminate al tramonto",
    caption: "Montaggio di vetrate panoramiche",
    detail: "Posa certificata per tenuta ad aria, acqua e vento",
  },
  {
    src: "/images/interior-5.jpg",
    alt: "Facciata vetrata con serramenti in alluminio",
    caption: "Posa di serramenti in alluminio",
    detail: "Sigillature a norma e nastri per l'isolamento del giunto",
  },
  {
    src: "/images/kitchen-1.jpg",
    alt: "Ingresso moderno con porta in legno",
    caption: "Installazione di porte d'ingresso",
    detail: "Blindati, portoncini e porte su misura, con cura delle finiture",
  },
  {
    src: "/images/house-1.jpg",
    alt: "Villa minimale bianca con infissi a scomparsa",
    caption: "Montaggio su nuove costruzioni",
    detail: "Coordinamento con l'impresa e posa su controtelaio",
  },
];

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4200, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="realizzazioni"
      className="scroll-mt-16 overflow-hidden bg-zinc-950 py-14 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-400">
                Le nostre soluzioni
              </p>
              <h2 className="mt-4 max-w-xl font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-5xl">
                Il valore di un infisso si decide alla posa
              </h2>
              <p className="mt-4 max-w-xl text-zinc-400">
                Il serramento migliore rende zero se è montato male. Ecco i tipi
                di intervento in cui facciamo la differenza, qualunque sia il
                materiale che scegli.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Slide precedente"
                className="grid h-12 w-12 place-items-center rounded-sm border border-white/20 text-white transition-colors hover:border-accent-400 hover:text-accent-400"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Slide successiva"
                className="grid h-12 w-12 place-items-center rounded-sm border border-white/20 text-white transition-colors hover:border-accent-400 hover:text-accent-400"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-5">
              {slides.map((s, i) => (
                <figure
                  key={s.src}
                  className="group relative min-w-0 flex-[0_0_82%] overflow-hidden rounded-md sm:flex-[0_0_55%] lg:flex-[0_0_42%]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={asset(s.src)}
                      alt={s.alt}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                        i === selected ? "" : "brightness-[0.55]"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                  </div>
                  <figcaption className="absolute bottom-5 left-5 right-5">
                    <span className="block font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                      {s.caption}
                    </span>
                    <span className="mt-1 block text-sm text-zinc-300">
                      {s.detail}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Dots */}
      <div className="mt-9 flex justify-center gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Vai alla slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === selected ? "w-8 bg-accent-400" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
