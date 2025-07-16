// data/projects.ts
import { Project } from "./types";
export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Next.js Terminal Portfolio',
    description: 'Een interactieve terminal-interface als portfolio.',
    link: 'https://alexlamper.dev',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    slug: 'verkeersborden',
    title: 'Verkeersborden Leren App',
    description: 'Educatieve webapp voor theorie-examen.',
    link: 'https://verkeersborden.dev',
    tech: ['MongoDB', 'Next.js', 'i18n'],
  },
];
