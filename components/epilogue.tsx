"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Epilogue() {
  const { theme } = useTheme() // Get current theme

  return (
    <section
      className={`min-h-screen flex items-center justify-center p-8 bg-gradient-to-b ${
        theme === "from-gray-900 to-blue-900"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center"
      >
        <h2
          className={`${
            theme === "dark" ? "text-gray-900" : "text-white"
          } text-4xl md:text-6xl font-bold mb-6`}
        >
          The Journey Continues
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-gray-900" : "text-white"
          } text-xl mb-8`}
        >
          As we reach the end of this chapter, remember that every line of code, every project, and every challenge
          overcome is a step forward in our never-ending story of growth and innovation.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className={`${
              theme === "dark" ? "bg-blue-500 text-white" : "bg-blue-600 text-gray-900"
            } px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors`}
          >
            <a href="mailto:your.email@example.com">Let&apos;s Write the Next Chapter Together</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
