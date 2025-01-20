"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const messages = [
  "Did you know?",
  "I love coding challenges!",
  "My favorite algorithm is QuickSort.",
  "I dream in JavaScript sometimes.",
  "I believe in the power of open source.",
]

export function TypewriterEffect() {
  const [showMessage, setShowMessage] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [typedMessage, setTypedMessage] = useState("")

  useEffect(() => {
    if (showMessage) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= messages[messageIndex].length) {
          setTypedMessage(messages[messageIndex].slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setShowMessage(false)
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
          }, 2000)
        }
      }, 100)

      return () => clearInterval(interval)
    }
  }, [showMessage, messageIndex])

  return (
    <div className="fixed top-4 left-4 z-10">
      <motion.button
        className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMessage(true)}
      >
        💬
      </motion.button>
      {showMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-12 left-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs"
        >
          <p className="text-gray-800 dark:text-gray-200">{typedMessage}</p>
        </motion.div>
      )}
    </div>
  )
}

