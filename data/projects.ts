// app/data/projects.ts
export interface Project {
  slug: string
  title: string
  description: string
  coords: { x: string; y: string }
  tech: string[]
}

export const projects: Project[] = [
  {
    slug: 'portfolio-site',
    title: 'Portfolio Site',
    description: 'Een dynamische Next.js site met interactieve elementen',
    coords: { x: '30%', y: '40%' },
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    slug: 'lab-simulator',
    title: 'Lab Simulator',
    description: 'Interactieve lab-omgeving met animaties',
    coords: { x: '60%', y: '20%' },
    tech: ['React', 'Canvas', 'GSAP'],
  },
  {
    slug: 'code-museum',
    title: 'Code Museum',
    description: '3D-achtige tour langs codeprojecten',
    coords: { x: '45%', y: '70%' },
    tech: ['Three.js', 'Next.js'],
  },
]
