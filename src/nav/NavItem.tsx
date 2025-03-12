import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({ label, to, setIsMenuOpen }) {
  return (
    <NavLink
      className='NavItem'
      to={`/${to}`}
      onClick={() => setIsMenuOpen(false)}
    >
      <div className='text'>{label}</div>
    </NavLink>
  )
}

export default NavItem
