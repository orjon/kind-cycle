import { useTranslation } from 'react-i18next'
import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
import { path } from '../content'

import '../styles/pages/WasteNot.scss'

function WasteNot() {
  const { t } = useTranslation()

  return (
    <div className='WasteNot page'>
      <div className='content-wrapper'>
        <HeaderImage filename='wasteNot' path={path.headers} altText='' />
        <div className='title'>{t('sections.wasteNot.title')}</div>
        <div className='description'>
          <SafeHtml html={t('sections.wasteNot.description')} />
        </div>
      </div>
    </div>
  )
}

export default WasteNot
