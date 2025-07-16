// app/components/ProjectDetail.tsx
'use client';

import { Project } from "@/data/types";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="pl-4 mt-4 text-green-200">
      <p className="mb-2">
        <strong>{project.title}</strong>
      </p>
      <p className="mb-2">{project.description}</p>
      <p className="mb-2">
        <strong>Technologieën:</strong> {project.tech.join(', ')}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-teal-400 hover:text-white"
      >
        Bekijk project ↗
      </a>
    </div>
  );
}
