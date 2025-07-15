'use client'

import { useEffect, useState } from 'react'

export default function SoundController() {
  const [audio] = useState(() => new Audio('/sounds/ambient.mp3'))

  useEffect(() => {
    audio.loop = true
    audio.volume = 0.4
    audio.play().catch(() => {})
  }, [audio])

  return null
}
