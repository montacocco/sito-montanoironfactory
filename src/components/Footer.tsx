import { site } from "@/lib/site";
import { asset } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div>
            <img
              src={asset("/logo.svg")}
              alt="Montano Iron Factory SNC"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Lavorazioni in ferro su misura dal {site.since}. Oggi anche
              specialisti nel montaggio di infissi, con fornitura su richiesta.
            </p>
          </div>

          <div className="text-sm text-zinc-400">
            <p className="font-semibold text-white">Contatti</p>
            <ul className="mt-3 space-y-1.5">
              {site.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="hover:text-accent-400">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent-400">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-zinc-400">
            <p className="font-semibold text-white">Sede</p>
            <p className="mt-3 max-w-[220px] leading-relaxed">
              {site.address}
              <br />
              {site.region}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p>
              © {new Date().getFullYear()} {site.legalName} — P.IVA {site.vat}
            </p>
            <p>Tutti i diritti riservati.</p>
          </div>
          <a
            href={site.gestionaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-sm border border-white/15 px-3.5 py-2 text-xs font-semibold text-zinc-400 transition-colors hover:border-accent-400/60 hover:text-accent-400"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            Area Riservata
          </a>
        </div>
      </div>
    </footer>
  );
}
