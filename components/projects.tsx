'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Christelijke Podcasts',
    description: 'A Dutch web application where you can find all the Christian podcasts! Discover and listen to your favorites, from Bible studies to deep conversations about faith.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image: '/projects/christelijkepodcasts.png'
  },
  {
    title: 'GeoName',
    description: 'An interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.',
    technologies: ['NextJS', 'Clerk', 'Tailwind CSS', 'Overpass API'],
    image: '/projects/geoname.png'
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'An interactive weather dashboard with location-based forecasts.',
    technologies: ['Vue.js', 'OpenWeatherMap API', 'Chart.js'],
    image: '/placeholder.svg'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

