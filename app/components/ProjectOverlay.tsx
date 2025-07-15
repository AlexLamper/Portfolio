'use client'

import { projects } from '../data/projects'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProjectOverlay({ slug }: { slug: string }) {
  const router = useRouter()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') router.back()
    }
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [router])

  if (!project) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center text-white p-4">
      <div className="bg-gray-900 p-4 rounded max-w-md w-full">
        <h2 className="text-xl mb-2">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <button onClick={() => router.back()} className="mt-2 bg-blue-600 px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  )
}
