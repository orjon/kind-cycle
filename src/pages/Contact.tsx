import { useTranslation } from 'react-i18next'
import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
import { path } from '../content'

import '../styles/pages/Contact.scss'

function Contact() {
  const { t } = useTranslation()

  return (
    <div className='Contact page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='contact'
          path={path.headers}
          altText='Icon of a pigeon holding an envelope'
        />
        <div className='title'>{t('sections.contact.title')}</div>
        <div className='description'>
          <SafeHtml html={t('sections.contact.description')} />
          <br />
          <a href='mailto:kindcycle.uk@gmail.com' className='bold link'>
            kindcycle.uk@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
