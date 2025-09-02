'use client';

import { useState, useEffect } from 'react';
import { Theme } from '@/data/types';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('matrix');

  useEffect(() => {
    // Load theme from localStorage
    const saved = localStorage.getItem('terminal-theme') as Theme;
    if (saved && ['matrix', 'retro', 'linux', 'cyberpunk'].includes(saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('terminal-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { theme, setTheme };
}
