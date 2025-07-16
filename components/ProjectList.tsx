// app/components/ProjectList.tsx
'use client';

import { projects } from "@/data/projects";

export default function ProjectList({ onSelect }: { onSelect: (slug: string) => void }) {
  return (
    <div className="pl-4 mt-2 text-green-200">
      {projects.map((p) => (
        <div key={p.slug}>
          <button
            className="underline text-green-400 hover:text-white"
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
