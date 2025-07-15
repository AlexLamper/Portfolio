'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectMarker({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="absolute"
      style={{ top: `${project.y}%`, left: `${project.x}%` }}
    >
      <Link href={`/project/${project.slug}`}
        className="block -translate-x-1/2 -translate-y-1/2"
      >
        <Image src={`/map/markers/${project.slug}.svg`} alt={project.title} width={32} height={32} />
      </Link>
    </motion.div>
  )
}
