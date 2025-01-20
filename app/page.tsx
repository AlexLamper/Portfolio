"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Prologue } from "@/components/prologue"
import { Journey } from "@/components/journey"
import { ProjectsChapter } from "@/components/projects-chapter"
import { SkillsToolbox } from "@/components/skills-toolbox"
import { Epilogue } from "@/components/epilogue"
import { KonamiCodeEasterEgg } from "@/components/konami-code-easter-egg"
import { HiddenPixelArt } from "@/components/hidden-pixel-art"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { FloatingBubbles } from "@/components/floating-bubbles"
import { useTheme } from "next-themes"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const { theme } = useTheme()

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-blue-100 to-white text-gray-900"
          : "bg-gradient-to-b from-gray-900 to-gray-700 text-white"
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 dark:bg-blue-400 origin-[0%]"
        style={{ scaleX }}
      />
      <Prologue />
      <Journey />
      <ProjectsChapter />
      <SkillsToolbox />
      <Epilogue />
      <KonamiCodeEasterEgg />
      <HiddenPixelArt />
      <TypewriterEffect />
      <FloatingBubbles />
    </div>
  )
}

