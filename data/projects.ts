import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: 'bijbelapi',
    title: 'BijbelAPI',
    description: 'Dé #1 Nederlandse Bijbel API voor ontwikkelaars.',
    link: 'https://bijbelapi.com',
    tech: ['Python', 'JavaScript', 'FastAPI', 'HTML', 'CSS', 'Tailwind CSS', 'Render'],
  },
  {
    slug: 'bijbelquiz-app',
    title: 'bijbelquiz-app',
    description: 'Bijbelquiz is een moderne Flutter-app voor interactieve bijbelquizzen. Speel solo of tegen anderen, en competeer op de leaderboard.',
    link: 'https://www.bijbelquiz.com',
    tech: ['Dart', 'Flutter', 'TypeScript', 'Swift', 'C++', 'CMake', 'C'],
  },
  {
    slug: 'bijbelquiz-web',
    title: 'bijbelquiz',
    description: 'BijbelQuiz - Speel online bijbelquizzen en test je kennis van de Bijbel, alleen of samen met familie en vrienden.',
    link: 'https://www.bijbelquiz.com',
    tech: ['TypeScript', 'Next.js', 'JavaScript', 'CSS'],
  },
  {
    slug: 'meneerwit',
    title: 'Meneer Wit',
    description: 'De Nederlandse versie van het spel "Mister White" of "Undercover" - maar dan gratis en met een onbeperkt aantal woorden.',
    link: 'https://meneerwit.com',
    tech: ['TypeScript', 'Next.js', 'JavaScript', 'CSS'],
  },
  {
    slug: 'bijbelstudie',
    title: 'BijbelStudie',
    description: 'BijbelStudie is een platform voor het bestuderen van de bijbel, ontworpen om de Bijbel te lezen, uit te leggen en te begrijpen.',
    link: 'https://bijbel-studie.com',
    tech: ['TypeScript', 'Next.js', 'JavaScript', 'MongoDB', 'Vercel', 'Tailwind CSS', 'React', 'NextAuth', 'Stripe'],
  },
  {
    slug: 'bulk-gemini-watermark-remover',
    title: 'BulkGeminiWatermarkRemover',
    description: 'Simple Client Side Bulk Gemini Watermark Remover.',
    link: 'https://www.bulk-gemini-watermark-remover.xyz',
    tech: ['JavaScript', 'HTML', 'Node.js', 'CLI', '@napi-rs/canvas'],
  },
  {
    slug: 'geoname',
    title: 'GeoName (Deprecated)',
    description: 'GeoName is an interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.',
    link: 'https://geoname.site',
    tech: ['Next.js', 'Typescript', 'Vercel', 'ShadCN', 'Tailwind CSS', 'Leaflet', 'Overpass API', 'Clerk', 'React-Icons'],
  }
];