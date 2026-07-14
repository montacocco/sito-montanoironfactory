# Montano Iron Factory — Sito web

Sito vetrina per **Montano Iron Factory SNC** (Quarrata, PT): montaggio infissi,
fornitura su richiesta e lavorazioni in ferro su misura.

Costruito con **Next.js** (export statico) + **Tailwind CSS**, pronto per GitHub Pages.

## Sviluppo locale

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build statica

```bash
npm run build    # genera la cartella `out/` con il sito statico
```

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub e carica il progetto:

   ```bash
   git init
   git add -A
   git commit -m "Sito Montano Iron Factory"
   git branch -M main
   git remote add origin https://github.com/<utente>/<repo>.git
   git push -u origin main
   ```

2. Su GitHub vai su **Settings → Pages** e imposta **Source: GitHub Actions**.

3. Ad ogni push su `main`, il workflow `.github/workflows/deploy.yml` compila e
   pubblica il sito automaticamente. Il `basePath` per gli indirizzi tipo
   `utente.github.io/repo` viene configurato in automatico; con un dominio
   personalizzato (es. `montanoironfactory.com`) non serve alcuna modifica.

## Modulo di contatto

Il form usa [FormSubmit](https://formsubmit.co) e invia le richieste a
`montanoironfactory@gmail.com` senza bisogno di un server.

⚠️ **Attivazione una tantum:** al primo invio dal sito pubblicato, FormSubmit
manda una email di conferma a quell'indirizzo — basta cliccare il link di
attivazione una sola volta e da lì in poi i messaggi arrivano normalmente.

## Dove modificare i contenuti

- **Dati aziendali** (telefoni, email, indirizzo, P.IVA): `src/lib/site.ts`
- **Lavori realizzati** (foto + descrizioni): `src/lib/progetti.ts` — vedi sotto
- **Testi delle sezioni**: `src/components/` (Hero, Services, Gallery, Fornitura, Process, About, Contact)
- **SEO / titolo pagina**: `src/app/layout.tsx`

## Aggiungere un lavoro al portfolio

1. Copia le foto in `public/images/lavori/` (es. `cantiere-verdi-1.webp`)
2. Apri `src/lib/progetti.ts` e aggiungi una voce all'array seguendo gli
   esempi già presenti (titolo, luogo, anno, categoria, descrizione, foto)
3. Fai il push: il sito si aggiorna da solo

I progetti attuali usano le **foto dei lavori reali** riprese dal vecchio
sito. Luoghi e anni sono indicativi: correggili con i dati veri quando puoi.

## Crediti immagini

Le foto in `public/images/` provengono da [Unsplash](https://unsplash.com) e
sono usate secondo la [Unsplash License](https://unsplash.com/license)
(uso commerciale consentito, nessuna attribuzione obbligatoria):

- `hero-1.webp` — unsplash.com/photos/1600607687939-ce8a6c25118c
- `hero-2.webp` — unsplash.com/photos/1600585154340-be6161a56a0c
- `hero-3.webp` — unsplash.com/photos/1600566753190-17f0baa2a6c3
- `house-1.webp` — unsplash.com/photos/1523217582562-09d0def993a6
- `house-2.webp` — unsplash.com/photos/1449844908441-8829872d2607
- `house-3.webp` — unsplash.com/photos/1416331108676-a22ccb276e35
- `interior-1.webp` — unsplash.com/photos/1502005229762-cf1b2da7c5d6
- `interior-2.webp` — unsplash.com/photos/1513694203232-719a280e022f
- `interior-5.webp` — unsplash.com/photos/1600573472592-401b489a3cdc
- `kitchen-1.webp` — unsplash.com/photos/1600585154526-990dced4db0d
