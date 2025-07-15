"use client"

import dynamic from 'next/dynamic'
import HUD from './components/HUD'

const MapScene = dynamic(() => import('./components/MapScene'), { ssr: false })

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <MapScene />
      <HUD />
    </main>
  )
}
