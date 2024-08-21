import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
    const t = useTranslations('Footer')
  return (
    <div className='my-8 text-end font-mono'>
      <p className='bg-gray-700 text-white'>{t('copyright')}</p>
    </div>
  )
}
