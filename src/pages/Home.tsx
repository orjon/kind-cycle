import { useTranslation } from 'react-i18next'
import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
import { path } from '../content'

import '../styles/pages/Home.scss'

function Home() {
  const { t } = useTranslation()

  return (
    <div className='Home page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='wasteNot'
          path={path.headers}
          altText='Icon of a pigeon holding an envelope'
        />
        <div className='title'>{t('home.title')}</div>
        <div className='description'>
          <SafeHtml html={t('sections.wasteNot')} />
        </div>
      </div>
    </div>
  )
}

export default Home
