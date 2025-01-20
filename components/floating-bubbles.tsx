"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  color: string
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  const addBubble = (e: React.MouseEvent<HTMLDivElement>) => {
    const newBubble: Bubble = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 50 + 20,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    }
    setBubbles((prevBubbles) => [...prevBubbles, newBubble])
    setTimeout(() => {
      setBubbles((prevBubbles) => prevBubbles.filter((b) => b.id !== newBubble.id))
    }, 5000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50" onClick={addBubble}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ x: bubble.x, y: bubble.y, opacity: 0, scale: 0 }}
          animate={{
            x: bubble.x + (Math.random() - 0.5) * 200,
            y: bubble.y - 200,
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 5 }}
          style={{
            position: "absolute",
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            backgroundColor: bubble.color,
          }}
        />
      ))}
    </div>
  )
}

