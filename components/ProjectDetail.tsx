'use client';

import { Project } from "@/data/types";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="pl-4 mt-4" style={{ color: 'var(--terminal-text)' }}>
      <p className="mb-2">
        <strong style={{ color: 'var(--terminal-accent)' }}>{project.title}</strong>
      </p>
      <p className="mb-2">{project.description}</p>
      <p className="mb-2">
        <strong style={{ color: 'var(--terminal-accent)' }}>Technologieën:</strong> {project.tech.join(', ')}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-80"
        style={{ color: 'var(--terminal-accent)' }}
      >
        Bekijk project ↗
      </a>
    </div>
  );
}
