import { Github, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2025 Alex Lamper. All rights reserved.
          </p>
            <div className="flex space-x-4">
            <Link href="https://github.com/AlexLamper" target="_blank" className="text-muted-foreground hover:text-primary">
                <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/alexlamper6/" target="_blank" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://www.youtube.com/@AlexLamper" target="_blank" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

