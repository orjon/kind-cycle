/// <reference types="vite-plugin-svgr/client" />
import HouseIcon from '../assets/icons/house.svg?react'

import '../styles/components/Banner.scss'
import '../styles/components/BannerA.scss'

function BannerA() {
  return (
    <div className='BannerA banner'>
      <div className='content'>
        <div className='text'>Share with your neighbours</div>
        <div className='icon'>
          <HouseIcon />
        </div>
      </div>
    </div>
  )
}

export default BannerA
