import HeaderImage from '../components/HeaderImage'
import Categories from '../components/Categories'

import { categories, path, sections } from '../content'

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
        <div
          className='description'
          dangerouslySetInnerHTML={{ __html: sections.wasteNot }}
        />
        <Categories categoryIds={Object.keys(categories)} link='category/' />
      </div>
    </div>
  )
}

export default Home
