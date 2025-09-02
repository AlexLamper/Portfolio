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
    }, 10); // Speed of typing effect

    if (index >= text.length) clearInterval(interval);

    return () => clearInterval(interval);
  }, [index, text]);

  // Determine text color based on content
  const getTextStyle = () => {
    // Command lists and help text (indented lines)
    if (text.startsWith('  ') && text.includes(' - ')) {
      return { color: 'var(--terminal-accent)' };
    }
    // Section headers (Available commands:, Available themes:, etc.)
    if (text.endsWith(':') && !text.startsWith(' ')) {
      return { color: 'var(--terminal-accent)', fontWeight: 'bold' };
    }
    // User input commands (starting with >)
    if (text.startsWith('> ')) {
      return { color: 'var(--terminal-text)', fontWeight: 'bold' };
    }
    // System messages (CONNECTING, ACCESS GRANTED, etc.)
    if (text.startsWith('> ') && (text.includes('CONNECTING') || text.includes('ACCESS') || text.includes('MOTD'))) {
      return { color: 'var(--terminal-accent)' };
    }
    // Header/boot messages
    if (text.includes('alex@lamper.dev') || text.includes('booting')) {
      return { color: 'var(--terminal-accent)', fontWeight: 'bold' };
    }
    // Default text
    return { color: 'var(--terminal-text)' };
  };

  return (
    <p 
      className="whitespace-pre-wrap" 
      style={getTextStyle()}
    >
      {displayed}
    </p>
  );
}
