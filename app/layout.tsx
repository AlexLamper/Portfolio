import './globals.css'
import SoundController from '@/components/SoundController';

export const metadata = {
  title: 'alex@lamper.dev',
  description: 'Alex Lamper - Portfolio Terminal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body 
        className="font-mono text-sm overflow-hidden h-screen w-screen"
        style={{
          backgroundColor: 'var(--terminal-bg)',
          color: 'var(--terminal-text)'
        }}
      >
        <SoundController />
        {children}
      </body>
    </html>
  );
}