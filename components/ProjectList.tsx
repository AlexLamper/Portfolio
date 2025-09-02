'use client';

import { projects } from "@/data/projects";

export default function ProjectList({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div className="pl-4 mt-2" style={{ color: 'var(--terminal-text)' }}>
      {projects.map((p) => (
        <div key={p.slug}>
          <button
            className="underline hover:opacity-80"
            style={{ color: 'var(--terminal-accent)' }}
            onClick={() => onSelect(p.slug)}
          >
            {p.slug}
          </button>{' '}
          - {p.title}
        </div>
      ))}
    </div>
  );
}
