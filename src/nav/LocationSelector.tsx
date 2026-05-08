import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import '../styles/nav/LocationSelector.scss'
import { addLanguagePrefix } from '../utils'
import { trackEvent } from '../utils/analytics'
import { ClickEvent } from '../types'
import { locations } from '../content/locations'

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
    path: `/wastenot/${location.id}`
  }))

const LocationSelector = () => {
  const { t } = useTranslation()
  const [isLocationListOpen, setisLocationListOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setisLocationListOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLocationChange = (nav_item: string) => {
    trackEvent(ClickEvent.navigation, {
      nav_item,
      on_page: window.location.href
    })
    setisLocationListOpen(false)
  }

  const locations = locationOptions

    .map((location) => (
      <NavLink
        key={location.id}
        className={`LocationOption NavLink`}
        to={addLanguagePrefix(location.path)}
        onClick={() => handleLocationChange(location.id)}
      >
        <span className='LocationSelector__name'>{location.name}</span>
      </NavLink>
    ))

  return (
    <div className='LocationSelector NavItem' ref={dropdownRef}>
      <div
        className='LocationSelector__button'
        onClick={() => setisLocationListOpen(!isLocationListOpen)}
        aria-haspopup='listbox'
        aria-expanded={isLocationListOpen}
      >
        {t('navLocations.locations')}
      </div>

      <div className={`LocationList ${isLocationListOpen ? 'open' : ''}`}>
        {locations}
      </div>
    </div>
  )
}

export default LocationSelector
