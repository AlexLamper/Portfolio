import ProjectOverlay from '../../components/ProjectOverlay'
import type { PageProps } from 'next'

export default function ProjectPage({ params }: PageProps<{ slug: string }>) {
  return <ProjectOverlay slug={params.slug} />
}
