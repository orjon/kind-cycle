import React from 'react'
import { NavLink } from 'react-router-dom'

import NavItem from './NavItem'

import '../../styles/Navbar.scss'

const navLocations = ['home', 'about', 'contact']

function Navbar() {
  const navItems = navLocations.map((location) => {
    return <NavItem key={location} to={location} />
  })

  return (
    <div className='Navbar'>
      <div className='NavBurger'>
        X{/* <NavBurgerMenu navLocations={navLocations} /> */}
      </div>
      <div className='Logo'>
        <NavLink to='/'>
          <div className='flexRow center'>
            <div className='LogoText'>kind-cycle</div>
          </div>
        </NavLink>
      </div>
      <div className='NavItems'>{navItems}</div>
    </div>
  )
}

export default Navbar
