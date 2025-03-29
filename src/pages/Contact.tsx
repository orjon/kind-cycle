import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'

import { path, sections } from '../content'

import '../styles/pages/Contact.scss'

function Contact() {
  return (
    <div className='Contact page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='contact'
          path={path.headers}
          altText='Icon of a pigeon holding an envelope'
        />
        <div className='title'>Contact</div>
        <div className='description'>
          <SafeHtml html={sections.contact} />
        </div>
      </div>
    </div>
  )
}

export default Contact
