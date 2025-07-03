import { Navigate, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { locations } from '../content'
import { getHomePathWithLanguage, addLanguagePrefix } from '../utils'

import '../styles/components/LocationHeader.scss'

type LocationHeaderProps = {
  locationId: string
}

const LocationHeader = ({ locationId }: LocationHeaderProps) => {
  const { t } = useTranslation()
  const location = locationId && locations[locationId]

  if (!location) return <Navigate to={getHomePathWithLanguage()} />

  return (
    <NavLink
      to={addLanguagePrefix(`/wastenot/${location.id}`)}
      className='LocationHeader'
    >
      <div className='location'>{t(`locations.${locationId}.name`)}</div>
    </NavLink>
  )
}

export default LocationHeader
