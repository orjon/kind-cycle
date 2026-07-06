import { type ReactElement } from "react"
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { NavType } from "../types"

import NavItem from "./NavItem"
import LocationSelector from "./LocationSelector"
import LanguageSelector from "./LanguageSelector"
import { useNavState } from "./NavStateContext"
import { addLanguagePrefix } from "../utils"

import { getSettings } from "../settings"

import { menuItems } from "../content/navLocations"

import BurgerMenu from "./BurgerMenu"

import "../styles/nav/Nav.scss"
import "../styles/nav/NavBurger.scss"

const Nav = () => {
  const { t } = useTranslation()
  const { isMenuOpen, handleSetIsMenuOpen } = useNavState()

  const navMenuItems: ReactElement[] = menuItems
    .filter((location) => location.type === NavType.page)
    .map((location) => {
      const { id, path, type } = location
      return (
        <NavItem
          key={id}
          nav_item={id}
          type={type}
          label={t(`navLocations.${id}`)}
          path={path!}
          setIsMenuOpen={handleSetIsMenuOpen}
        />
      )
    })

  navMenuItems.splice(1, 0, <LocationSelector key="location-selector" />)

  return (
    <div className={`Nav ${getSettings()}`}>
      <div
        className={`NavBurger ${isMenuOpen ? "open" : ""}`}
        onClick={() => handleSetIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <BurgerMenu />
      <NavLink to={addLanguagePrefix("/")}>
        <div className="Logo">
          <div className="LogoText">Kind Cycle</div>
        </div>
      </NavLink>
      <div className="NavMenu">{navMenuItems}</div>
      <LanguageSelector onOpen={() => handleSetIsMenuOpen(false)} />
    </div>
  )
}

export default Nav
