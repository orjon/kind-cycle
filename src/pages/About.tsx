import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'

import { path, sections } from '../content'

import '../styles/pages/About.scss'

function About() {
  return (
    <div className='About page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='kindCycle'
          path={path.logo}
          altText='KindCycle logo'
        />
        <div className='title'>About</div>
        <div className='description'>
          <SafeHtml html={sections.about} />
        </div>
      </div>
    </div>
  )
}

export default About
