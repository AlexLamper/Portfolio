'use client';

import { useState } from 'react';
import useSound from 'use-sound';

export default function CommandInput({ onSubmit }: { onSubmit: (val: string) => void }) {
  const [input, setInput] = useState('');
  const [playType] = useSound('/sounds/type.wav', { volume: 0.2 });
  const [playEnter] = useSound('/sounds/enter.wav', { volume: 0.3 });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        playEnter();
        onSubmit(input);
        setInput('');
      }}
    >
      <span style={{ color: 'var(--terminal-accent)' }}>&gt;</span>{' '}
      <input
        type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value); playType(); }}
        className="bg-transparent border-none outline-none w-[90%]"
        style={{ color: 'var(--terminal-text)' }}
        autoFocus
      />
    </form>
  );
}
