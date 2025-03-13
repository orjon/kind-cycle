import { useParams, Navigate } from 'react-router-dom'

import LocationHeader from '../components/LocationHeader'
import CategoryHeader from '../components/CategoryHeader'

import '../styles/pages/LocationCategory.scss'

const LocationCategory = () => {
  const { locationId, categoryId } = useParams()

  if (!locationId || !categoryId) return <Navigate to='/' />

  return (
    <div className='LocationCategory page'>
      <LocationHeader locationId={locationId} />
      <CategoryHeader categoryId={categoryId} />
    </div>
  )
}

export default LocationCategory
