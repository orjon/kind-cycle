import { useParams, Navigate } from 'react-router-dom'

import LocationCategories from '../components/LocationCategories'

import { locations } from '../content'

import '../styles/pages/Location.scss'

type LocationParams = {
  locationId: string
}

function Location() {
  const { locationId } = useParams<LocationParams>()
  const location = locationId && locations[locationId]
  if (!location) return <Navigate to='/' />

  // console.dir(location, { depth: null })

  return (
    <div className='Location page'>
      <h1>{location.name}</h1>
      <p>{location.description}</p>
      <LocationCategories locationCategories={location.categories} />
    </div>
  )
}

export default Location
