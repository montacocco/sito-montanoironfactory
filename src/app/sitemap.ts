import { MetadataRoute } from 'next';


export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://montanoironfactory.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Aggiungi qui altre pagine se ne hai (es. /contatti, /servizi)
  ];
}