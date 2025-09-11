import { useParams, Navigate } from 'react-router-dom'

import LocationOrganisation from '../components/LocationOrganisation'
import LocationHeader from '../components/LocationHeader'
import CategoryHeader from '../components/CategoryHeader'

import {
  getLocationCategoryOrganisations,
  getHomePathWithLanguage
} from '../utils'

import { categories } from '../content'

import '../styles/pages/LocationCategory.scss'

const LocationCategory = () => {
  const { locationId, categoryId } = useParams()

  if (!locationId || !categoryId)
    return <Navigate to={getHomePathWithLanguage()} />

  const category = categories[categoryId]

  const organisationList = getLocationCategoryOrganisations(
    locationId,
    categoryId
  )?.map((organisationId: string) => (
    <LocationOrganisation
      key={organisationId}
      organisationId={organisationId}
      colors={category.color}
    />
  ))

  return (
    <div className='LocationCategory page'>
      <div className='content-wrapper'>
        <LocationHeader locationId={locationId} />
        <CategoryHeader categoryId={categoryId} color={category.color.text} />
        {!category.localGroup && (
          <div className='organisations'>{organisationList}</div>
        )}
      </div>
    </div>
  )
}

export default LocationCategory
