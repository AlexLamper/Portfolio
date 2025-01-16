'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Christelijke Podcasts',
    description: 'A Dutch web application where you can find all the Christian podcasts! Discover and listen to your favorites, from Bible studies to deep conversations about faith.',
    technologies: ['Next.js', 'Supabase', 'Tailwind CSS'],
    image: '/projects/christelijkepodcasts.png',
    repo_link: 'https://github.com/AlexLamper/ChristelijkePodcasts',
    link: 'https://christelijkepodcasts.site/'
  },
  {
    title: 'Scripture',
    description: 'A Next.js-powered web app that offers a gamified experience to explore Bible teachings through quizzes, a dynamic map, and personalized progress tracking.',
    technologies: ['NextJS', 'Clerk', 'Bible API', 'Tailwind CSS'],
    image: '/projects/scripture2.png',
    repo_link: 'https://github.com/AlexLamper/Scripture',
    link: 'https://biblemap.site/'
  },
  {
    title: 'HabitSync',
    description: 'A simple and intuitive app to help you add, track, and maintain your habits effortlessly. Stay consistent and motivated as you build positive habits with ease.',
    technologies: ['NextJS', 'Vercel', 'Tailwind CSS', 'ShadCN'],
    image: '/projects/habitsync.png',
    repo_link: 'https://github.com/AlexLamper/HabitSync',
    link: 'https://habitsync.site/'
  },
  {
    title: 'GeoName',
    description: 'An interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.',
    technologies: ['NextJS', 'Clerk', 'Tailwind CSS', 'Overpass API'],
    image: '/projects/geoname.png',
    repo_link: 'https://github.com/AlexLamper/GeoName',
    link: 'https://geoname.site/'
  },
  {
    title: 'FunNotes',
    description: 'FunNotes uses AI to transform plain notes into fun, engaging, and well-structured content with emoji suggestions and readability enhancements.',
    technologies: ['NextJS', 'Supabase', 'OpenAPI', 'Tailwind CSS'],
    image: '/projects/funnotes.png',
    repo_link: 'https://github.com/AlexLamper/FunNotes',
    link: 'https://funnotes.vercel.app/'
  },
  {
    title: 'YoutubeDownloader',
    description: 'A simple tool to easily download YouTube videos, allowing users to save their favorite content for offline viewing. It offers a fast and straightforward way to download videos made with Python.',
    technologies: ['Python', 'youtube-dl'],
    image: '/projects/youtubedownloader.png',
    repo_link: 'https://github.com/AlexLamper/YouTubeDownloader',
  },
  {
    title: 'ToDoApp',
    description: 'A simple and intuitive To-Do mobile application built with Flutter, designed to help users efficiently manage their tasks with features like task creation, editing, deletion, and completion tracking.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    image: '/projects/todoapp.png',
    repo_link: 'https://github.com/AlexLamper/ToDoApp',
  },
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
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <CardHeader>
                        <CardTitle>
                          <Link href={project.link || "#"}  target="_blank" passHref>
                            {project.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2 items-center">
                            {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                            <a
                            href={project.repo_link || "#"} // Assuming the project has a github field
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary ml-auto"
                            >
                            <Github className="h-6 w-6" />
                            </a>
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

