import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import NavItem from './NavItem'
import LanguageSelector from '../components/LanguageSelector'
import { addLanguagePrefix } from '../utils'

import { getSettings } from '../settings'

import navLocations from '../content/navLocations'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'
import '../styles/components/LanguageSelector.scss'

const Nav = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = navLocations.map((location) => {
    const { id, path } = location
    return (
      <NavItem
        key={id}
        label={t(`navLocations.${id}`)}
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
      <NavLink to={addLanguagePrefix('/')}>
        <div className='Logo'>
          <div className='LogoText'>Kind Cycle</div>
        </div>
      </NavLink>
      <div className='NavMenu'>{navItems}</div>
      <LanguageSelector />
    </div>
  )
}

export default Nav
