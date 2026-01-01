import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: 'scriptura',
    title: 'Scriptura',
    description: 'Scriptura is a Bible study platform for everyone, designed to read, explain and understand the Bible.',
    link: 'https://scriptura.cloud',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel', 'Tailwind CSS', 'Scriptura API', 'ShadCN', 'React', 'Framer Motion', 'NextAuth', 'Stripe'],
  },
  {
    slug: 'gratis-theorie',
    title: 'Gratis Theorie',
    description: '(Dutch site) Oefen gratis en onbeperkt voor je theorie-examen auto, motor of scooter met realistische CBR-vragen.',
    link: 'https://gratis-theorie.com',
    tech: ['TypeScript', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'ShadCN', 'Framer Motion'],
  },
  {
    slug: 'meneerwit',
    title: 'Meneer Wit',
    description: '(Dutch site) De Nederlandse versie van het spel "Mister White" - maar dan gratis en met een onbeperkt aantal woorden.',
    link: 'https://meneerwit.com',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel', 'ShadCN', 'Framer Motion'],
  },
  {
    slug: 'scriptura-api',
    title: 'Scriptura API',
    description: "A REST API for retrieving Bible texts and commentary. This API was designed for the application 'Scriptura'. But it can be used by developers, theologians, students, and hobbyists who want to use Biblical texts digitally.",
    link: 'https://scriptura-api.com',
    tech: ['Python', 'FastAPI', 'Render'],
  },
  {
    slug: 'geoname',
    title: 'GeoName (Deprecated)',
    description: 'GeoName is an interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.',
    link: 'https://geoname.site',
    tech: ['Next.js', 'Typescript', 'Vercel', 'ShadCN', 'Tailwind CSS', 'Leaflet', 'Overpass API', 'Clerk', 'React-Icons'],
  },
  {
    slug: 'christelijkepodcasts',
    title: 'Christelijke Podcasts',
    description: '(Dutch site) De website waar je alle Christelijke podcasts kunt vinden! Ontdek en luister naar je favorieten, van bijbelstudies tot diepgaande gesprekken over het geloof.',
    link: 'https://christelijkepodcasts.com',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS', 'ShadCN', 'Spotify WebAPI', 'Bijbel API'],
  }
];