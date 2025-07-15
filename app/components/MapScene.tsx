'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectMarker from './ProjectMarker'
import SoundController from './SoundController'

export default function MapScene() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/map/background.svg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      {projects.map((p) => (
        <ProjectMarker key={p.slug} project={p} />
      ))}
      <SoundController />
    </div>
  )
}
