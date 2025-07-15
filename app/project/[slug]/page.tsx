import ProjectOverlay from '@/components/ProjectOverlay'

type Props = {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: Props) {
  return <ProjectOverlay slug={params.slug} />
}
