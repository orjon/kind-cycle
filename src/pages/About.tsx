import HeaderImage from '../components/HeaderImage'

import { path } from '../content'

import '../styles/pages/About.scss'

function About() {
  return (
    <div className='About page'>
      <HeaderImage
        filename='kindCycle'
        path={path.logo}
        altText='KindCycle logo'
      />
      <div className='title'>About</div>
    </div>
  )
}

export default About
