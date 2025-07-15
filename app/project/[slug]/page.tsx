import ProjectOverlay from '../../components/ProjectOverlay'
type ProjectPageProps = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectOverlay slug={params.slug} />
}
