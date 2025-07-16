'use client';

import { useEffect } from 'react';

export default function SoundController() {
  useEffect(() => {
    const audio = new Audio('/sounds/type.wav');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  }, []);
  return null;
}
