// app/page.tsx
'use client';

import Terminal from "@/components/Terminal";

export default function HomePage() {
  return (
    <main className="w-full h-full p-4 flex flex-col">
      <Terminal />
    </main>
  );
}
