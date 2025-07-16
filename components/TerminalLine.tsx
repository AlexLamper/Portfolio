// app/components/TerminalLine.tsx
'use client';

import { useEffect, useState } from 'react';

export default function TerminalLine({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!text) return;

    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, 10); // snelheid van typen

    if (index >= text.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [index, text]);

  return <p className="text-green-300 whitespace-pre-wrap">{displayed}</p>;
}
