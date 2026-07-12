// Prefissa i percorsi statici con il basePath (necessario per GitHub Pages
// quando il sito è pubblicato su utente.github.io/<repo>).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
