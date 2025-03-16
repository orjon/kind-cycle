import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import NavItem from './NavItem'

import { getSettings } from '../settings'

import navLocations from '../content/navLocations'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = navLocations.map((location) => {
    const { id, label, path } = location
    return (
      <NavItem
        key={id}
        label={label}
        path={path}
        setIsMenuOpen={setIsMenuOpen}
      />
    )
  })

  return (
    <div className={`Nav ${getSettings()}`}>
      <div
        className={`NavBurger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`BurgerMenu ${isMenuOpen ? 'open' : ''}`}>{navItems}</div>
      <NavLink to='/'>
        <div className='Logo'>
          <div className='LogoText'>Kind Cycle</div>
        </div>
      </NavLink>
      <div className='NavMenu'>{navItems}</div>
    </div>
  )
}

export default Nav
