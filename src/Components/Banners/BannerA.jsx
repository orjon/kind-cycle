import React from 'react'
import { ReactComponent as HouseIcon } from '../../assets/icons/house.svg'

import '../../styles/Banners/Banner.scss'
import '../../styles/Banners/BannerA.scss'

function BannerA() {
  return (
    <div className='BannerA banner'>
      <div className='content'>
        <div className='text'>Share with your neighbours</div>
        <div className='icon'>
          <HouseIcon alt='location icon' />
        </div>
      </div>
    </div>
  )
}

export default BannerA
