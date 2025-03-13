import { useParams, Navigate } from 'react-router-dom'

import LocationHeader from '../components/LocationHeader'
import CategoryHeader from '../components/CategoryHeader'

import { getLocationCategoryOrganisations } from '../utils'

import '../styles/pages/LocationCategory.scss'

const LocationCategory = () => {
  const { locationId, categoryId } = useParams()

  if (!locationId || !categoryId) return <Navigate to='/' />

  const organisationList =
    getLocationCategoryOrganisations(locationId, categoryId)?.map(
      (organisation) => (
        <div key={organisation.id}>
          <h3>{organisation.name}</h3>
          <p>{organisation.about}</p>
        </div>
      )
    ) || []

  return (
    <div className='LocationCategory page'>
      <LocationHeader locationId={locationId} />
      <CategoryHeader categoryId={categoryId} />
      <div className='organisations'>{organisationList}</div>
    </div>
  )
}

export default LocationCategory
