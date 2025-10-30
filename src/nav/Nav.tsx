import { useState, type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavType } from '../types/types'

import NavItem from './NavItem'
import LocationSelector from './LocationSelector'
import LanguageSelector from './LanguageSelector'
import { addLanguagePrefix } from '../utils'

import { getSettings } from '../settings'

import navLocations from '../content/navLocations'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'

const Nav = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navBarItems: ReactElement[] = navLocations
    .filter((location) => location.type === NavType.page)
    .map((location) => {
      const { id, path } = location
      return (
        <NavItem
          key={id}
          nav_item={id}
          label={t(`navLocations.${id}`)}
          path={path}
          setIsMenuOpen={setIsMenuOpen}
        />
      )
    })
  // Insert desktop LocationSelector after the first item
  navBarItems.splice(1, 0, <LocationSelector key='location-selector' />)

  const navBurgerItems: ReactElement[] = navLocations.map((location) => {
    const { id, path } = location
    return (
      <NavItem
        key={id}
        nav_item={id}
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
      <div className={`BurgerMenu ${isMenuOpen ? 'open' : ''}`}>
        {navBurgerItems}
      </div>
      <NavLink to={addLanguagePrefix('/')}>
        <div className='Logo'>
          <div className='LogoText'>Kind Cycle</div>
        </div>
      </NavLink>
      <div className='NavMenu'>{navBarItems}</div>
      <LanguageSelector />
    </div>
  )
}

export default Nav
