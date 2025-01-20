"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

export function KonamiCodeEasterEgg() {
  const [input, setInput] = useState<string[]>([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => [...prev, e.key])
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (input.join(",").endsWith(konamiCode.join(","))) {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 5000)
    }
  }, [input])

  if (!showEasterEgg) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">You found the Konami Code!</h2>
        <p>Here&apos;s a virtual high five! 🖐️</p>
      </div>
    </motion.div>
  )
}

