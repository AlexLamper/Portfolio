"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const terminalArt = [
  "████████████████████████",
  "█                       █",
  "█  user@portfolio:~     █",
  "█  $ Alex Lamper        █",
  "█  Aspiring Dev         █",
  "█  $ showcase           █",
  "█  Projects Loading...  █",
  "█                       █",
  "████████████████████████",
]

export function HiddenPixelArt() {
  const [showArt, setShowArt] = useState(false)

  return (
    <div className="fixed bottom-4 left-4 z-10">
      <motion.button
        className="bg-gray-600 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowArt(!showArt)}
      >
        💻
      </motion.button>
      {showArt && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="absolute bottom-12 left-0 bg-black p-4 rounded-lg shadow-lg"
        >
          <pre className="text-xs leading-none font-mono text-green-500">
            {terminalArt.map((row, index) => (
              <div key={index}>{row}</div>
            ))}
          </pre>
        </motion.div>
      )}
    </div>
  )
}
