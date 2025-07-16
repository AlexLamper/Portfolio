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
      <span className="text-green-400">&gt;</span>{' '}
      <input
        value={input}
        onChange={(e) => { setInput(e.target.value); playType(); }}
        className="bg-transparent border-none outline-none text-green-300 w-[90%]"
        autoFocus
      />
    </form>
  );
}
