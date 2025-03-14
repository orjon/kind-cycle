import { Navigate, NavLink } from 'react-router-dom'

import { locations } from '../content'

import '../styles/components/LocationHeader.scss'

type LocationHeaderProps = {
  locationId: string
}

const LocationHeader = ({ locationId }: LocationHeaderProps) => {
  const location = locationId && locations[locationId]

  if (!location) return <Navigate to='/' />

  return (
    <NavLink to={`/wastenot/${location.id}`} className='LocationHeader'>
      <div className='location'>
        {location.name} {location.postcode}
      </div>
    </NavLink>
  )
}

export default LocationHeader
