"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "next-themes"

const skills = [
  { name: "Next.js", icon: "⚛️", level: 90 },
  { name: "React", icon: "🔵", level: 85 },
  { name: "TypeScript", icon: "🔷", level: 80 },
  { name: "Node.js", icon: "🟢", level: 75 },
  { name: "TailwindCSS", icon: "🎨", level: 95 },
  { name: "GraphQL", icon: "🔺", level: 70 },
  { name: "Python", icon: "🐍", level: 65 },
  { name: "Docker", icon: "🐳", level: 60 },
]

export function SkillsToolbox() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { theme } = useTheme() // Get current theme

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center p-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${
          theme === "dark" ? "text-gray-900" : "text-white"
        } text-3xl md:text-5xl font-bold mb-12 text-center`}
      >
        My Toolbox
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow-lg text-center`}
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3
              className={`${
                theme === "dark" ? "text-white" : "text-gray-900"
              } text-xl font-semibold mb-2`}
            >
              {skill.name}
            </h3>
            <div
              className={`${
                theme === "dark" ? "bg-gray-700" : "bg-gray-300"
              } w-full rounded-full h-2.5`}
            >
              <motion.div
                className="bg-blue-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
