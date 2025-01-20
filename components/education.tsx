"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
    {
        institution: "Christelijke Scholen Gemeenschap Prins Maurits",
        degree: "Havo",
        year: "2018 - 2023",
        description: "Graduated with a focus on economy and social studies.",
    },
    {
        institution: "HZ University of Applied Sciences",
        degree: "Bachelor of Science in ICT",
        year: "2023 - Present",
        description: "Focusing on web development, software engineering, and IT infrastructure.",
    },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{item.institution}</CardTitle>
                  <CardDescription>
                    {item.degree} | {item.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

