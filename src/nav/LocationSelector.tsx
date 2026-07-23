import { useEffect, useRef } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "../styles/nav/LocationSelector.scss"
import { addLanguagePrefix } from "../utils"
import { trackEventGoogle } from "../utils/analytics-google"
import { ClickEvent } from "../types"
import { locations } from "../content/locations"
import { useNavState } from "./NavStateContext"

interface LocationOption {
  id: string
  name: string
  path: string
}

const locationOptions: LocationOption[] = locations
  .filter((location) => !location.disabled)
  .map((location) => ({
    id: location.id,
    name: location.label,
    path: `/wastenot/${location.id}`,
  }))

const LocationSelector = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isLocationSelectorOpen, setIsLocationSelectorOpen } = useNavState()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    const nextOpen = !isLocationSelectorOpen
    setIsLocationSelectorOpen(nextOpen)
    if (nextOpen) {
      navigate(addLanguagePrefix("/wastenot"))
    }
  }

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside =
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      if (isOutside) {
        setIsLocationSelectorOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setIsLocationSelectorOpen])

  const handleLocationChange = (nav_item: string) => {
    trackEventGoogle(ClickEvent.navigation, {
      nav_item,
      on_page: window.location.href,
    })
    setIsLocationSelectorOpen(false)
  }

  const locations = locationOptions.map((location) => (
    <NavLink
      key={location.id}
      className={`LocationOption NavLink`}
      to={addLanguagePrefix(location.path)}
      onClick={() => handleLocationChange(location.id)}
    >
      <span className="LocationSelector__name">{location.name}</span>
    </NavLink>
  ))

  return (
    <div className="LocationSelector NavItem" ref={dropdownRef}>
      <div
        className="LocationSelector__button"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isLocationSelectorOpen}
      >
        {t("navLocations.locations")}
      </div>

      <div className={`LocationList ${isLocationSelectorOpen ? "open" : ""}`}>
        {locations}
      </div>
    </div>
  )
}

export default LocationSelector
