import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="mb-4">{t('description')}</p>
      <h2 className="text-2xl font-semibold mb-2">{t('skillsTitle')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Next.js</li>
        <li>Laravel</li>
        <li>MySQL</li>
        <li>TailwindCSS</li>
        <li>Bootstrap</li>
        <li>Figma</li>
        <li>Git</li>
        <li>Python</li>
        <li>Java</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>PHP</li>
      </ul>
      <p>{t('companyInfo')}</p>
    </div>
  )
}

