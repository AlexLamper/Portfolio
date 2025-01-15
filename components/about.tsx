'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <Image
              src="/about.jpg"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg mb-4">
                Hey, I&apos;m a student at the HZ University of Applied Science in Middelburg. I enjoy working with Next.js and crafting beautiful front-end experiences. I&apos;m also familiar with other languages, frameworks and tools such as: Laravel, MySQL, TailwindCSS, Bootstrap, Figma, Git, Python, Java, Javascript, Typescript, PHP and more...
            </p>
            <p className="text-lg mb-4">
                In this portfolio you can read some general information about me, some projects I made or take a look at some of my drawings. I also own a company called Lucerny where I make beautiful, custom made websites for my clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

