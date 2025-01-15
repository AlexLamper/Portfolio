import { useTranslations } from 'next-intl'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Projects() {
  const t = useTranslations('Projects')

  const projects = [
    { title: 'Project 1', description: t('project1Description') },
    { title: 'Project 2', description: t('project2Description') },
    { title: 'Project 3', description: t('project3Description') },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

