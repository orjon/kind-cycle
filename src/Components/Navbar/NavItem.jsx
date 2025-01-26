import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({ to }) {
  let link = to

  if (link === 'home') {
    link = ''
  }

  return (
    <NavLink to={`/${link}`} className='NavItem'>
      <div className='gap5'>{to}</div>
    </NavLink>
  )
}

export default NavItem
