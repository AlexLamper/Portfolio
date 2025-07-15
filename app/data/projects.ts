export type Project = {
  slug: string
  title: string
  x: number
  y: number
  description: string
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    x: 50,
    y: 40,
    description: 'Description of project one.',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    x: 70,
    y: 60,
    description: 'Description of project two.',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    x: 30,
    y: 20,
    description: 'Description of project three.',
  },
]
