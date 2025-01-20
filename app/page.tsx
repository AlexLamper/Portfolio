"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Prologue } from "@/components/prologue"
import { Journey } from "@/components/journey"
import { ProjectsChapter } from "@/components/projects-chapter"
import { SkillsToolbox } from "@/components/skills-toolbox"
import { Epilogue } from "@/components/epilogue"
import { EasterEgg } from "@/components/easter-egg"
import { Education } from "@/components/education"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-[0%]" style={{ scaleX }} />
      <Prologue />
      <Journey />
      <ProjectsChapter />
      <SkillsToolbox />
      <Education />
      <Epilogue />
      <EasterEgg />
    </div>
  )
}

