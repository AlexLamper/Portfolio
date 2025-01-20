"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "next-themes"

const milestones = [
  { year: 2018, event: "Started learning to code" },
  { year: 2019, event: "Built my first website" },
  { year: 2020, event: "Learned React and got on GitHub" },
  { year: 2021, event: "Started learning NextJS" },
  { year: 2022, event: "Improving my programming skills" },
  { year: 2023, event: "Started 'Lucerny'" },
  { year: 2024, event: "Build websites for businesses" },
  { year: 2025, event: "Launched my first startup" },
]

export function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const { theme } = useTheme() // Get current theme

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section id="journey" ref={ref} className="min-h-screen flex items-center justify-center p-8">
      <motion.div style={{ opacity, scale }} className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">My Journey</h2>
        <div className="relative">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${theme === "dark" ? "bg-blue-500" : "bg-blue-600"}`}
          ></div>
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`${
                  theme === "dark" ? "bg-gray-800" : "bg-white"
                } p-4 rounded-lg shadow-lg ${index % 2 === 0 ? "mr-8" : "ml-8"} max-w-xs`}
              >
                <h3 className={`${theme === "dark" ? "text-white" : "text-gray-900"} text-xl font-bold mb-2`}>
                  {milestone.year}
                </h3>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{milestone.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
