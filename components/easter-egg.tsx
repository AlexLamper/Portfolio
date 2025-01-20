"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleEasterEgg = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="fixed bottom-4 right-4">
      <motion.button
        className="bg-gray-800 text-white p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleEasterEgg}
      >
        🎹
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-12 right-0 bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <p className="text-white mb-2">Did you know?</p>
            <p className="text-gray-300">
              When I&apos;m not coding, I love playing the piano! My favorite piece is Chopin&apos;s Nocturne Op. 9 No. 2.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

