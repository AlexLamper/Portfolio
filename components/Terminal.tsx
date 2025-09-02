'use client';

import React, { useState, useRef, useEffect } from 'react';
import CommandInput from './CommandInput';
import TerminalLine from './TerminalLine';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';
import { projects } from '@/data/projects';
import { useTheme } from '@/lib/useTheme';

export default function Terminal() {
  const headerLines = [
    'alex@lamper.dev booting...',
    '',
    'Type `help` to see available commands.',
  ];
  
  const [lines, setLines] = useState<string[]>([]);
  const [output, setOutput] = useState<React.ReactElement | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  // Full-page click handler for input focus
  useEffect(() => {
    const handleClick = () => {
      const input = document.querySelector('input[type="text"]') as HTMLInputElement;
      if (input) input.focus();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const print = (...newLines: string[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const handleCommand = (inputRaw: string) => {
    const input = inputRaw.trim();
    if (!input) return;

    const cmd = input.toLowerCase();
    print(`> ${input}`);

    const [base, arg] = cmd.split(' ');

    switch (base) {
      case 'help':
        print(
          'Available commands:',
          '  projects / ls       - show project list',
          '  open [slug]         - open project details',
          '  theme [name]        - change theme (matrix/retro/linux/cyberpunk)',
          '  themes              - list available themes',
          '  about               - about me',
          '  skills              - tech stack',
          '  whoami              - identity',
          '  motd                - message of the day',
          '  clear               - clear terminal',
          '  exit / reboot       - restart terminal'
        );
        setOutput(null);
        break;

      case 'theme':
        if (!arg) {
          print(`Current theme: ${theme}`, "Usage: theme [matrix/retro/linux/cyberpunk]");
        } else {
          const validThemes = ['matrix', 'retro', 'linux', 'cyberpunk'];
          if (validThemes.includes(arg)) {
            setTheme(arg as 'matrix' | 'retro' | 'linux' | 'cyberpunk');
            print(`Theme changed to '${arg}'`);
          } else {
            print(`Unknown theme '${arg}'. Available: ${validThemes.join(', ')}`);
          }
        }
        setOutput(null);
        break;

      case 'themes':
        print(
          'Available themes:',
          '  matrix     - Classic green terminal',
          '  retro      - Amber CRT monitor style', 
          '  linux      - Ubuntu-style terminal',
          '  cyberpunk  - Neon purple cyberpunk'
        );
        setOutput(null);
        break;

      case 'projects':
      case 'ls':
        setOutput(
          <ProjectList
            onSelect={(slug) => {
              const project = projects.find((p) => p.slug === slug);
              if (project) {
                print(`> open ${slug}`);
                setOutput(<ProjectDetail project={project} />);
              } else {
                print(`Project '${slug}' not found.`);
              }
            }}
          />
        );
        break;

      case 'open':
        if (!arg) {
          print("Usage: open [slug]");
        } else {
          const project = projects.find((p) => p.slug === arg);
          if (project) {
            setOutput(<ProjectDetail project={project} />);
          } else {
            print(`Project '${arg}' not found.`);
          }
        }
        break;

      case 'about':
        print(
          'Alex Lamper — Student at HZ University of Applied Sciences & Developer.',
          'I enjoy creating cool stuff using code.',
          'Currently Learning: Java and Next.js to expand my full-stack development skills.'
        );
        setOutput(null);
        break;

      case 'whoami':
        print('User: alex', 'Role: Developer', 'Location: The Netherlands');
        setOutput(null);
        break;

      case 'skills':
        print('Java, JavaScript, TypeScript, Python, Svelte, React, Bootstrap, CSS3, HTML5, Tailwind CSS, Node.js, MongoDB, PostgreSQL, Docker, Firebase, Next.js, Bash, Django');
        setOutput(null);
        break;

      case 'motd': {
        const motds = [
            '`~$ git push your limits`',
            '`~$ sudo rm -rf self-doubt/`',
            '`~$ npm install confidence`',
            '`~$ ./launch.sh --project=you`',
            '`~$ ssh passion@future.dev`',
            '`~$ tail -f ~/progress.log`',
            '`~$ git merge --strategy=patience`',
            '`~$ chmod +x growth`',
        ];

        const dayIndex = new Date().getDate() % motds.length;
        const dailyMotd = motds[dayIndex];

        print(
            '> CONNECTING TO PORT 22...',
            '> ACCESS GRANTED',
            `> MOTD: ${dailyMotd}`
        );
        setOutput(null);
        break;
      }

      case 'clear':
        setLines([]);
        setOutput(null);
        break;

      case 'exit':
      case 'reboot':
        setLines([]);
        setOutput(null);
        break;

      default:
        print(`Command '${cmd}' not found. Type 'help' for list.`);
        setOutput(null);
        break;
    }
  };

  return (
    <div 
      ref={terminalRef}
      className="flex-1 overflow-y-auto h-full pb-10 cursor-text"
      style={{ 
        backgroundColor: 'var(--terminal-bg)',
        color: 'var(--terminal-text)'
      }}
    >
      {/* Persistent header */}
      {headerLines.map((line, idx) => (
        <TerminalLine key={`header-${idx}`} text={line} />
      ))}
      
      {/* User commands and output */}
      {lines.map((line, idx) => (
        <TerminalLine key={idx} text={line} />
      ))}
      {output}
      <CommandInput onSubmit={handleCommand} />
    </div>
  );
}
