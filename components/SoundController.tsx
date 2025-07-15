// app/components/SoundController.tsx
'use client'

import { useEffect, useState } from 'react'

export default function SoundController() {
  const [audio] = useState(() => new Audio('/sounds/ambient.mp3'))
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    audio.loop = true
    audio.volume = 0.3
    audio.muted = muted
    audio.play().catch(() => {})
  }, [audio, muted])

  return (
    <button
      onClick={() => setMuted(!muted)}
      className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded"
    >
      {muted ? '🔇 Muziek aan' : '🔊 Muziek uit'}
    </button>
  )
}
