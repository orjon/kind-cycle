import HeaderImage from '../components/HeaderImage'

import { path } from '../content'

import '../styles/pages/Contact.scss'

function Contact() {
  return (
    <div className='Contact page'>
      <HeaderImage
        filename='contact'
        path={path.headers}
        altText='Icon of a pigeon holding an envelope'
      />
      <div className='title'>Contact</div>
    </div>
  )
}

export default Contact
