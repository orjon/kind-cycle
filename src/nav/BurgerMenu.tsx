import { type ReactElement, type RefObject, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"

import { NavType, NavLocations } from "../types"

import NavItem from "./NavItem"
import { useNavState } from "./NavStateContext"
import { addLanguagePrefix } from "../utils"

import { burgerMenuItems } from "../content/navLocations"
import { locations } from "../content/locations"

import "../styles/nav/Nav.scss"
import "../styles/nav/NavBurger.scss"

interface BurgerMenuProps {
  toggleRef: RefObject<HTMLDivElement | null>
}

const BurgerMenu = ({ toggleRef }: BurgerMenuProps) => {
  const burgerMenuRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    isMenuOpen,
    handleSetIsMenuOpen,
    isLocationsOpen,
    setIsLocationsOpen,
  } = useNavState()

  const handleToggleLocations = () => {
    const nextOpen = !isLocationsOpen
    setIsLocationsOpen(nextOpen)
    if (nextOpen) {
      navigate(addLanguagePrefix("/wastenot"))
    }
  }

  const navBurgerMenuItems: ReactElement[] = burgerMenuItems.map((item) => {
    const { id, path, type } = item

    if (id === NavLocations.locations) {
      return (
        <div key="locations-expander" className="LocationsExpander">
          <div
            className={`NavItem LocationsToggle ${isLocationsOpen ? "open" : ""}`}
            onClick={handleToggleLocations}
          >
            <div className="text">{t(`navLocations.${id}`)}</div>
          </div>
          <div className={`LocationSubItems ${isLocationsOpen ? "open" : ""}`}>
            {locations.map((location) => {
              const { id } = location
              return (
                <NavItem
                  key={id}
                  nav_item={id}
                  type={NavType.location}
                  label={t(`locations.${id}.name`)}
                  path={`/wastenot/${id}`}
                  setIsMenuOpen={handleSetIsMenuOpen}
                />
              )
            })}
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
        path={path!}
        setIsMenuOpen={handleSetIsMenuOpen}
      />
    )
  })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideMenu =
        burgerMenuRef.current && !burgerMenuRef.current.contains(target)
      const isOutsideToggle =
        !toggleRef.current || !toggleRef.current.contains(target)

      if (isOutsideMenu && isOutsideToggle) {
        handleSetIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [handleSetIsMenuOpen, toggleRef])

  return (
    <div
      ref={burgerMenuRef}
      className={`BurgerMenu ${isMenuOpen ? "open" : ""}`}
    >
      {navBurgerMenuItems}
    </div>
  )
}

export default BurgerMenu
