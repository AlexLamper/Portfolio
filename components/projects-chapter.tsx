"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Christelijke Podcasts",
    description:
      "A Dutch web application where you can find all the Christian podcasts! Discover and listen to your favorites, from Bible studies to deep conversations about faith.",
    challenge: "Aggregating and organizing a large number of podcasts from various sources.",
    solution: "Implemented a robust database structure and efficient search algorithms.",
    technologies: ["Next.js", "Supabase", "Tailwind CSS"],
    image: "/projects/christelijkepodcasts.png",
    repo_link: "https://github.com/AlexLamper/ChristelijkePodcasts",
    link: "https://christelijkepodcasts.site/",
  },
  {
    title: "Scripture",
    description:
      "A Next.js-powered web app that offers a gamified experience to explore Bible teachings through quizzes, a dynamic map, and personalized progress tracking.",
    challenge: "Creating an engaging and interactive way to learn about the Bible.",
    solution: "Developed a gamification system with quizzes and progress tracking.",
    technologies: ["NextJS", "Clerk", "Bible API", "Tailwind CSS"],
    image: "/projects/scripture2.png",
    repo_link: "https://github.com/AlexLamper/Scripture",
    link: "https://biblemap.site/",
  },
  {
    title: "HabitSync",
    description:
      "A simple and intuitive app to help you add, track, and maintain your habits effortlessly. Stay consistent and motivated as you build positive habits with ease.",
    challenge: "Designing a user-friendly interface for habit tracking.",
    solution: "Implemented a clean, minimalist design with intuitive habit management features.",
    technologies: ["NextJS", "Vercel", "Tailwind CSS", "ShadCN"],
    image: "/projects/habitsync.png",
    repo_link: "https://github.com/AlexLamper/HabitSync",
    link: "https://habitsync.site/",
  },
  {
    title: "GeoName",
    description:
      "An interactive web application built with Next.js with the main functionality of allowing the users to guess geographical locations and flags.",
    challenge: "Integrating geographical data and creating an engaging quiz format.",
    solution: "Utilized external APIs for geographical data and implemented a dynamic quiz system.",
    technologies: ["NextJS", "Clerk", "Tailwind CSS", "Overpass API"],
    image: "/projects/geoname.png",
    repo_link: "https://github.com/AlexLamper/GeoName",
    link: "https://geoname.site/",
  },
  {
    title: "FunNotes",
    description:
      "FunNotes uses AI to transform plain notes into fun, engaging, and well-structured content with emoji suggestions and readability enhancements.",
    challenge: "Integrating AI capabilities for note enhancement and emoji suggestions.",
    solution: "Leveraged OpenAI API to analyze and enhance note content.",
    technologies: ["NextJS", "Supabase", "OpenAPI", "Tailwind CSS"],
    image: "/projects/funnotes.png",
    repo_link: "https://github.com/AlexLamper/FunNotes",
    link: "https://funnotes.vercel.app/",
  },
  {
    title: "YoutubeDownloader",
    description:
      "A simple tool to easily download YouTube videos, allowing users to save their favorite content for offline viewing. It offers a fast and straightforward way to download videos made with Python.",
    challenge: "Handling YouTube's changing video formats and download restrictions.",
    solution: "Implemented adaptive downloading techniques using the youtube-dl library.",
    technologies: ["Python", "youtube-dl"],
    image: "/projects/youtubedownloader.png",
    repo_link: "https://github.com/AlexLamper/YouTubeDownloader",
  },
  {
    title: "ToDoApp",
    description:
      "A simple and intuitive To-Do mobile application built with Flutter, designed to help users efficiently manage their tasks with features like task creation, editing, deletion, and completion tracking.",
    challenge: "Creating a responsive and cross-platform mobile application.",
    solution: "Utilized Flutter for efficient cross-platform development and SQLite for local data storage.",
    technologies: ["Flutter", "Dart", "SQLite"],
    image: "/projects/todoapp.png",
    repo_link: "https://github.com/AlexLamper/ToDoApp",
  },
]

export function ProjectsChapter() {
  interface Project {
    title: string;
    description: string;
    challenge: string;
    solution: string;
    technologies: string[];
    image: string;
    repo_link: string;
    link?: string;
  }
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
      >
        Projects I´ve Build
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>
            <h4 className="text-xl font-semibold mb-2">The Challenge</h4>
            <p className="mb-4">{selectedProject.challenge}</p>
            <h4 className="text-xl font-semibold mb-2">The Solution</h4>
            <p>{selectedProject.solution}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

