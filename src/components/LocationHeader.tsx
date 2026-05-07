import { Navigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { getHomePathWithLanguage, addLanguagePrefix, getLocationById } from '../utils'

import '../styles/components/LocationHeader.scss'

type LocationHeaderProps = {
  locationId: string
}

const LocationHeader = ({ locationId }: LocationHeaderProps) => {
  const { t } = useTranslation()
  const location = locationId && getLocationById(locationId)

  if (!location) return <Navigate to={getHomePathWithLanguage()} />

  return (
    <NavLink
      to={addLanguagePrefix(`/wastenot/${location.id}`)}
      className='LocationHeader'
    >
      <div className='location link-button'>{t(`locations.${locationId}.name`)}</div>
    </NavLink>
  )
}

export default LocationHeader
