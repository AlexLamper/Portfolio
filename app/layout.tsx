import type { Metadata } from "next"
import "./globals.css"
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Alex Lamper - Portfolio",
  description:
    "Student at HZ University of Applied Science | Web Developer | Next.js Enthusiast",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}