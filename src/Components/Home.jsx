import React from 'react'

import Hero from './Banners/Hero.jsx'
import BannerA from './Banners/BannerA.jsx'
import BannerB from './Banners/BannerB.jsx'
import BannerC from './Banners/BannerC.jsx'

import '../styles/Home.scss'

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
