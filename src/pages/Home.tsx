import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
import { path, sections } from '../content'

import '../styles/pages/Home.scss'

function Home() {
  return (
    <div className='Home page'>
      <div className='content-wrapper'>
        <HeaderImage
          filename='wasteNot'
          path={path.headers}
          altText='Icon of a pigeon holding an envelope'
        />
        <div className='title'>Waste Not!</div>
        <div className='description'>
          <SafeHtml html={sections.wasteNot} />
        </div>
      </div>
    </div>
  )
}

export default Home
