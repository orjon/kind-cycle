import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import NavItem from './NavItem'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'

const navLocations = {
  wastenot: { label: 'Waste Not', path: 'wastenot' },
  ferrylane: { label: 'Ferry Lane', path: 'wastenot/ferrylane' },
  about: { label: 'About', path: 'about' },
  contact: { label: 'Contact', path: 'contact' }
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = Object.entries(navLocations).map(
    ([location, { label, path }]) => {
      return (
        <NavItem
          key={location}
          label={label}
          to={path}
          setIsMenuOpen={setIsMenuOpen}
        />
      )
    }
  )

  return (
    <div className='Nav'>
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
          <div className='LogoText'>kind-cycle</div>
        </div>
      </NavLink>
      <div className='NavMenu'>{navItems}</div>
    </div>
  )
}

export default Nav
