import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Drawings() {
  const t = useTranslations('Drawings')

  const drawings = [
    { src: '/drawing1.jpg', alt: 'Drawing 1' },
    { src: '/drawing2.jpg', alt: 'Drawing 2' },
    { src: '/drawing3.jpg', alt: 'Drawing 3' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {drawings.map((drawing, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={drawing.src || "/placeholder.svg"}
              alt={drawing.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

