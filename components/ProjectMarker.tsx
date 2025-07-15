// app/components/ProjectMarker.tsx
'use client'

import { Project } from '../data/projects'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import { useSound } from 'use-sound'

interface Props {
  project: Project
}

export default function ProjectMarker({ project }: Props) {
//   const playHover = useSound('/sounds/hover.mp3')
//   const playClick = useSound('/sounds/click.mp3')

  return (
    <Link href={`/project/${project.slug}`}>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3 }}
        // onHoverStart={playHover}
        // onClick={playClick}
        style={{
          position: 'absolute',
          left: project.coords.x,
          top: project.coords.y,
          translate: '-50%, -50%',
        }}
      >
        <img src="/map/marker.svg" alt={project.title} width={36} />
      </motion.div>
    </Link>
  )
}
