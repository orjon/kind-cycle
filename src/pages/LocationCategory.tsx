import { useParams, Navigate } from 'react-router-dom'

import LocationOrganisation from '../components/LocationOrganisation'

import LocationHeader from '../components/LocationHeader'
import CategoryHeader from '../components/CategoryHeader'

import { getLocationCategoryOrganisations } from '../utils'

import { categories } from '../content'

import '../styles/pages/LocationCategory.scss'

const LocationCategory = () => {
  const { locationId, categoryId } = useParams()

  if (!locationId || !categoryId) return <Navigate to='/' />

  const organisationList = getLocationCategoryOrganisations(
    locationId,
    categoryId
  )?.map((organisationId: string) => (
    <LocationOrganisation
      key={organisationId}
      organisationId={organisationId}
      colors={categories[categoryId].color}
    />
  ))

  return (
    <div className='LocationCategory page'>
      <div className='content-wrapper'>
        <LocationHeader locationId={locationId} />
        <CategoryHeader
          categoryId={categoryId}
          color={categories[categoryId].color.text}
        />
        <div className='organisations'>{organisationList}</div>
      </div>
    </div>
  )
}

export default LocationCategory
