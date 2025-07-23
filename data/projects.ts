import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: 'gratis-theorie',
    title: 'Gratis Theorie',
    description: 'Oefen gratis en onbeperkt voor je theorie-examen auto, motor of scooter met realistische CBR-vragen.',
    link: 'https://gratis-theorie.com',
    tech: ['TypeScript', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'ShadCN', 'Framer Motion'],
  },
  {
    slug: 'scriptura',
    title: 'Scriptura',
    description: 'Scriptura – Your Interactive Bible Learning Platform, designed to deepen your understanding of the Scriptures through courses, insightful lessons, and a personalized experience.',
    link: 'https://scriptura-edu.com',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel', 'Tailwind CSS', 'Bible API', 'ShadCN', 'React', 'Framer Motion', 'NextAuth', 'Stripe'],
  },
  {
    slug: 'bijbel-api',
    title: 'Bijbel API',
    description: 'Een Nederlandstalige Bijbel API die de Bijbel toegankelijk maakt voor ontwikkelaars en applicaties.',
    link: 'https://bijbel-api.nl',
    tech: ['Python', 'FastAPI', 'Render', 'Hostinger'],
  },
  {
    slug: 'geoname',
    title: 'GeoName',
    description: 'GeoName is an interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.',
    link: 'https://geoname.site',
    tech: ['Next.js', 'Typescript', 'Vercel', 'ShadCN', 'Tailwind CSS', 'Leaflet', 'Overpass API', 'Clerk', 'React-Icons'],
  },
  {
    slug: 'habitsync',
    title: 'HabitSync',
    description: 'HabitSync - A simple and intuitive app to help you add, track, and maintain your habits effortlessly. Stay consistent and motivated as you build positive habits with ease.',
    link: 'https://habitsync.site',
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'ShadCN'],
  },
  {
    slug: 'christelijkepodcasts',
    title: 'Christelijke Podcasts',
    description: 'De website waar je alle Christelijke podcasts kunt vinden! Ontdek en luister naar je favorieten, van bijbelstudies tot diepgaande gesprekken over het geloof.',
    link: 'https://christelijkepodcasts.com',
    tech: ['Next.js', 'Vercel', 'Tailwind CSS', 'ShadCN', 'Spotify WebAPI', 'Bijbel API'],
  },
  {
    slug: 'dutchplaces',
    title: 'DutchPlaces',
    description: 'An application made using NextJS, TailwindCSS, ShadCN, Leaflet and more where you can learn Dutch places.',
    link: 'https://www.dutchplaces.xyz/',
    tech: ['Next.js', 'Leaflet', 'Tailwind', 'ShadCN', 'Maps'],
  },
];