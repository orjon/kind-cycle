import HeaderImage from '../components/HeaderImage'
import Categories from '../components/Categories'

import { categories, path } from '../content'

import '../styles/pages/Home.scss'

function Home() {
  return (
    <div className='Home page'>
      <HeaderImage
        filename='wasteNot'
        path={path.headers}
        altText='Icon of a pigeon holding an envelope'
      />
      <div className='title'>Waste Not!</div>
      {/* <LocationHeader locationId={locationId} /> */}
      <Categories categoryIds={Object.keys(categories)} link='' />
    </div>
  )
}

export default Home
