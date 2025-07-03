import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import HeaderImage from '../components/HeaderImage'
import { path } from '../content'
import { addLanguagePrefix } from '../utils'
import '../styles/pages/About.scss'

function About() {
  const { t } = useTranslation()

  return (
    <div className='About page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='kindCycle'
          path={path.logo}
          altText='KindCycle logo'
        />
        <div className='title'>{t('about.title')}</div>
        <div className='description'>
          <p>{t('about.description')}</p>
          <p>
            <Link to={addLanguagePrefix('/contact')} className='bold'>
              {t('about.contactLink')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
