import { useState, type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavType } from '../types'

import NavItem from './NavItem'
import LocationSelector from './LocationSelector'
import LanguageSelector from './LanguageSelector'
import { addLanguagePrefix } from '../utils'

import { getSettings } from '../settings'

import { menuItems, burgerMenuItems } from '../content/navLocations'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'

const Nav = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navMenuItems: ReactElement[] = menuItems
    .filter((location) => location.type === NavType.page)
    .map((location) => {
      const { id, path, type } = location
      return (
        <NavItem
          key={id}
          nav_item={id}
          type={type}
          label={type === NavType.page ? t(`navLocations.${id}`) : t(`locations.${id}.name`)}
          path={path}
          setIsMenuOpen={setIsMenuOpen}
        />
      )
    })
  // Insert desktop LocationSelector after the first item
  navMenuItems.splice(1, 0, <LocationSelector key='location-selector' />)

  const navBurgerMenuItems: ReactElement[] = burgerMenuItems
    .map((location) => {
      const { id, path, type } = location
      return (
        <NavItem
          key={id}
          nav_item={id}
          type={type}
          label={type === NavType.page ? t(`navLocations.${id}`) : t(`locations.${id}.name`)}
          path={path}
          setIsMenuOpen={setIsMenuOpen}
        />
      )
    })

  console.log(navBurgerMenuItems)
  console.log(burgerMenuItems)

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
        {navBurgerMenuItems}
      </div>
      <NavLink to={addLanguagePrefix('/')}>
        <div className='Logo'>
          <div className='LogoText'>Kind Cycle</div>
        </div>
      </NavLink>
      <div className='NavMenu'>{navMenuItems}</div>
      <LanguageSelector />
    </div>
  )
}

export default Nav
