"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { site } from "@/lib/site";

const YEARS = new Date().getFullYear() - site.since;

const stats = [
  { to: YEARS, suffix: "+", label: "anni di lavorazioni in ferro" },
  { to: 6, suffix: "", label: "servizi specializzati" },
  { to: 100, suffix: "%", label: "lavori su misura" },
  { to: 1, suffix: "", label: "referente unico, dal preventivo alla posa" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 0.84, 0.44, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="numeri" className="scroll-mt-16 border-y border-accent-500/20 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-accent-400 sm:text-5xl">
              <Counter to={s.to} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[200px] text-sm leading-snug text-zinc-400 lg:mx-0">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
