import './globals.css'
import SoundController from '@/components/SoundController';

export const metadata = {
  title: 'alex@lamper.dev',
  description: 'Alex Lamper - Portfolio Terminal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-green-400 font-mono text-sm overflow-hidden h-screen w-screen">
        <SoundController />
        {children}
      </body>
    </html>
  );
}