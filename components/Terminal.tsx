'use client';

import React, { useState } from 'react';
import CommandInput from './CommandInput';
import TerminalLine from './TerminalLine';
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';
import { projects } from '@/data/projects';

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([
    'alex@lamper.dev booting...',
    '',
    'Type `help` to see available commands.',
  ]);
  const [output, setOutput] = useState<React.ReactElement | null>(null);

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
          '  about               - about me',
          '  skills              - tech stack',
          '  whoami              - identity',
          '  motd                - message of the day',
          '  clear               - clear terminal',
          '  exit / reboot       - restart terminal'
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
        setLines([
          'System rebooting...',
          '',
          'alex@lamper.dev booting...',
          '',
          'Type `help` to see available commands.',
        ]);
        setOutput(null);
        break;

      default:
        print(`Command '${cmd}' not found. Type 'help' for list.`);
        setOutput(null);
        break;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto h-full pb-10">
      {lines.map((line, idx) => (
        <TerminalLine key={idx} text={line} />
      ))}
      {output}
      <CommandInput onSubmit={handleCommand} />
    </div>
  );
}
