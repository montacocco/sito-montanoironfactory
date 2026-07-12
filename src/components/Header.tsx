"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { asset } from "@/lib/assets";
import { site } from "@/lib/site";
import { IconPhone, IconArrowRight } from "./Icons";
import { IconWhatsApp } from "./WhatsAppButton";

const links = [
  { href: "#servizi", label: "Servizi" },
  { href: "#lavori", label: "Lavori" },
  { href: "#fornitura", label: "Fornitura" },
  { href: "#processo", label: "Come lavoriamo" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];

const menuStagger = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  closed: {},
};

const menuItem = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.65, 0.36, 1] as const },
  },
  closed: { opacity: 0, y: 24, transition: { duration: 0.15 } },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca lo scroll della pagina quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-zinc-950/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center" aria-label="Montano Iron Factory — Home">
          <img
            src={asset("/logo.svg")}
            alt="Montano Iron Factory SNC"
            className="h-11 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigazione principale">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contatti"
            className="hidden rounded-sm bg-accent-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-accent-400 sm:block"
          >
            Richiedi preventivo
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative grid h-10 w-10 place-items-center text-white lg:hidden"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            <span className="relative block h-[18px] w-6">
              <motion.span
                className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current"
                animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.65, 0.36, 1] }}
              />
              <motion.span
                className="absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-current"
                animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-4 block h-0.5 w-4 rounded-full bg-current"
                animate={open ? { y: -8, rotate: -45, width: 24 } : { y: 0, rotate: 0 }}
                transition={{ duration: 0.3, ease: [0.21, 0.65, 0.36, 1] }}
              />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile a tutto schermo (fuori dall'header: il suo backdrop-blur
          farebbe da containing block per position:fixed) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[45] lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xl"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }}
              transition={{ duration: 0.3 }}
            />
            <div
              className="bg-grid pointer-events-none absolute inset-0 opacity-60"
              aria-hidden
            />

            <motion.nav
              className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24"
              aria-label="Menu mobile"
              variants={menuStagger}
            >
              <ul className="flex flex-col">
                {links.map((l, i) => (
                  <motion.li key={l.href} variants={menuItem}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-white/[0.07] py-4"
                    >
                      <span className="font-[family-name:var(--font-display)] text-xs font-bold text-accent-400">
                        0{i + 1}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-[27px] font-semibold text-white transition-colors group-active:text-accent-400">
                        {l.label}
                      </span>
                      <IconArrowRight
                        width={18}
                        height={18}
                        className="ml-auto self-center text-zinc-600 transition-colors group-active:text-accent-400"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div variants={menuItem} className="mt-auto pt-8">
                <a
                  href="#contatti"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-accent-500 px-4 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-zinc-950"
                >
                  Richiedi un preventivo gratuito
                </a>
                <div className="mt-5 flex items-center justify-center gap-6">
                  <a
                    href={site.phones[0].href}
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-300"
                  >
                    <IconPhone width={16} height={16} className="text-accent-400" />
                    {site.phones[0].label}
                  </a>
                  <a
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-300"
                  >
                    <IconWhatsApp width={17} height={17} className="text-[#25D366]" />
                    WhatsApp
                  </a>
                </div>
                <p className="mt-5 text-center text-[11px] uppercase tracking-[0.25em] text-zinc-600">
                  Quarrata · Pistoia · Toscana
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
