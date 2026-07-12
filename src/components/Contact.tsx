"use client";

import { useState, type FormEvent } from "react";
import { IconPhone, IconMail, IconPin } from "./Icons";
import { IconWhatsApp } from "./WhatsAppButton";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-sm border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot anti-spam
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contatti" className="scroll-mt-16 bg-white py-14 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent-600">
              Contatti
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-zinc-900 sm:text-5xl">
              Parliamo del tuo progetto
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600">
              Compila il modulo o chiamaci direttamente: ti rispondiamo in fretta
              e fissiamo un sopralluogo gratuito e senza impegno.
            </p>

            <ul className="mt-9 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-zinc-100 text-accent-600">
                  <IconPhone width={20} height={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Telefono</p>
                  {site.phones.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="block text-sm text-zinc-600 hover:text-accent-600"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-zinc-100 text-[#25D366]">
                  <IconWhatsApp width={20} height={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">WhatsApp</p>
                  <a
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-accent-600"
                  >
                    Scrivici su WhatsApp — {site.whatsapp.label}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-zinc-100 text-accent-600">
                  <IconMail width={20} height={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-zinc-600 hover:text-accent-600"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-zinc-100 text-accent-600">
                  <IconPin width={20} height={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Sede</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 hover:text-accent-600"
                  >
                    {site.address}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-zinc-200 bg-stone-50 p-6 sm:p-8 lg:col-span-3"
          >
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <input type="hidden" name="_subject" value="Nuova richiesta dal sito Montano Iron Factory" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                  Nome e cognome *
                </label>
                <input id="nome" name="nome" type="text" required placeholder="Mario Rossi" className={inputClass} />
              </div>
              <div>
                <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                  Telefono *
                </label>
                <input id="telefono" name="telefono" type="tel" required placeholder="333 123 4567" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                  Email
                </label>
                <input id="email" name="email" type="email" placeholder="mario.rossi@email.it" className={inputClass} />
              </div>
              <div>
                <label htmlFor="servizio" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                  Servizio di interesse
                </label>
                <select id="servizio" name="servizio" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Seleziona…
                  </option>
                  <option>Montaggio infissi</option>
                  <option>Fornitura e montaggio infissi</option>
                  <option>Assistenza / manutenzione</option>
                  <option>Porte in ferro</option>
                  <option>Inferriate di sicurezza</option>
                  <option>Ringhiere e cancelli</option>
                  <option>Altro</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="messaggio" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                  Messaggio *
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={5}
                  placeholder="Descrivi brevemente il lavoro di cui hai bisogno…"
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-sm bg-accent-500 px-7 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Invio in corso…" : "Invia richiesta"}
              </button>
              <p className="text-xs text-zinc-500">
                Ti ricontatteremo il prima possibile.
              </p>
            </div>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="mt-4 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                  Richiesta inviata! Ti ricontatteremo al più presto.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
                  Si è verificato un errore. Riprova oppure chiamaci al{" "}
                  <a href={site.phones[0].href} className="underline">
                    {site.phones[0].label}
                  </a>
                  .
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Mappa */}
        <div className="mt-16 overflow-hidden rounded-md border border-zinc-200 shadow-sm">
          <iframe
            title="Mappa — Montano Iron Factory, Via Castello Biagini 44/1, Quarrata (PT)"
            src="https://maps.google.com/maps?q=Via%20Castello%20Biagini%2044%2F1%2C%2051039%20Quarrata%20PT&z=14&output=embed"
            className="h-[380px] w-full border-0 grayscale transition-[filter] duration-500 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
