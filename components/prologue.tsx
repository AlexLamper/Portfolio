"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const phrases = ["Hey, I'm Alex", "Web Developer", "Next.js Enthusiast", "Student at HZ University of Applied Science"]

export function Prologue() {
  const [typedPhrase, setTypedPhrase] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    let charIndex = 0
    const typeInterval = setInterval(() => {
      if (charIndex <= phrases[phraseIndex].length) {
        setTypedPhrase(phrases[phraseIndex].slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [phraseIndex])

  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-gray-900 dark:bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 right-4 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center text-white dark:text-gray-900"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {typedPhrase}
        </h1>
        <p className="text-xl mb-8">I&apos;m a student at HZ University of Applied Science in Middelburg, passionate about Next.js and front-end development. I also work with Laravel, MySQL, TailwindCSS, Figma, Git, Python, Java, and more.</p>
        <motion.a
          href="#journey"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Explore My Journey
        </motion.a>
      </motion.div>
    </section>
  )
}
