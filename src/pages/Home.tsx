import Hero from '../components/Hero.jsx'
import BannerA from '../components/BannerA.jsx'
import BannerB from '../components/BannerB.jsx'
import BannerC from '../components/BannerC.jsx'

import '../styles/pages/Home.scss'

function Home() {
  return (
    <div className='Home page'>
      <Hero />
      <BannerA />
      <BannerB />
      <BannerC />
    </div>
  )
}

export default Home
