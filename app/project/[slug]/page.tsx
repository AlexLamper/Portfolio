import ProjectOverlay from '../../components/ProjectOverlay'

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectOverlay slug={params.slug} />
}
