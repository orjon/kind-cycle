import { useState, type ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavType, NavLocations } from '../types'

import NavItem from './NavItem'
import LocationSelector from './LocationSelector'
import LanguageSelector from './LanguageSelector'
import { addLanguagePrefix } from '../utils'

import { getSettings } from '../settings'

import { menuItems, burgerMenuItems } from '../content/navLocations'
import { locations } from '../content/locations'

import '../styles/nav/Nav.scss'
import '../styles/nav/NavBurger.scss'

const Nav = () => {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)

  const handleSetIsMenuOpen = (open: boolean) => {
    setIsMenuOpen(open)
    if (!open) setIsLocationsOpen(false)
  }

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
          setIsMenuOpen={handleSetIsMenuOpen}
        />
      )
    })
  // Insert desktop LocationSelector after the first item
  navMenuItems.splice(1, 0, <LocationSelector key='location-selector' />)

  const navBurgerMenuItems: ReactElement[] = burgerMenuItems
    .map((item) => {
      const { id, path, type } = item

      if (id === NavLocations.locations) {
        return (
          <div key='locations-expander' className='LocationsExpander'>
            <div
              className={`NavItem LocationsToggle ${isLocationsOpen ? 'open' : ''}`}
              onClick={() => setIsLocationsOpen(!isLocationsOpen)}
            >
              <div className='text'>{t(`navLocations.${id}`)}</div>
            </div>
            <div className={`LocationSubItems ${isLocationsOpen ? 'open' : ''}`}>
              {locations.map((loc) => (
                <NavItem
                  key={loc.id}
                  nav_item={loc.id}
                  type={NavType.location}
                  label={t(`locations.${loc.id}.name`)}
                  path={`/wastenot/${loc.id}`}
                  setIsMenuOpen={handleSetIsMenuOpen}
                />
              ))}
            </div>
          </div>
        )
      }

      return (
        <NavItem
          key={id}
          nav_item={id}
          type={type}
          label={t(`navLocations.${id}`)}
          path={path}
          setIsMenuOpen={handleSetIsMenuOpen}
        />
      )
    })

  return (
    <div className={`Nav ${getSettings()}`}>
      <div
        className={`NavBurger ${isMenuOpen ? 'open' : ''}`}
        onClick={() => handleSetIsMenuOpen(!isMenuOpen)}
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
