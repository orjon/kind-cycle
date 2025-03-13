import { useParams, Navigate } from 'react-router-dom'

import LocationHeader from '../components/LocationHeader'
import LocationCategories from '../components/LocationCategories'

import { locations } from '../content'

import '../styles/pages/Location.scss'

const Location = () => {
  const { locationId } = useParams()
  const location = locationId && locations[locationId]
  if (!location) return <Navigate to='/' />

  return (
    <div className='Location page'>
      <LocationHeader locationId={locationId} />
      <LocationCategories location={location} />
    </div>
  )
}

export default Location
