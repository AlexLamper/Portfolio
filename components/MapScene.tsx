// app/components/MapScene.tsx
'use client'

import Image from 'next/image'
import { projects } from '../data/projects'
import ProjectMarker from './ProjectMarker'
import SoundController from './SoundController'

export default function MapScene() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <SoundController />

      <div className="absolute inset-0 z-0 transform scale-[1.25] transition-transform duration-700 ease-out">
        <Image
          src="/map/background.jpg"
          alt="Interactieve kaart"
          fill
          priority
          className="object-cover pointer-events-none"
        />
      </div>

      {projects.map((p) => (
        <ProjectMarker key={p.slug} project={p} />
      ))}

      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded z-20">
        🌍 Ontdek mijn projecten
      </div>
    </div>
  )
}
