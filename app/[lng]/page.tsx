'use client'

import Link from 'next/link'
import { useTranslation } from '../i18n/client'
import { Footer } from './components/Footer/client'

interface PageProps {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: PageProps) {
  const { t } = useTranslation(lng, 'client-page')
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
      <Footer lng={lng} />
    </>
  )
}