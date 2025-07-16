import './globals.css'
import SoundController from '@/components/SoundController';

export const metadata = {
  title: 'alex@terminal.dev',
  description: 'Interactieve fullscreen terminalportfolio',
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