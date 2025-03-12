import LocationOrganisation from './LocationOrganisation'

import { categories } from '../content'
import { LocationCategory as LocationCategoryType } from '../types/types'

type LocationCategoryProps = {
  locationCategory: LocationCategoryType
}

const LocationCategory = ({ locationCategory }: LocationCategoryProps) => {
  const category = categories[locationCategory.id]
  const organisations = locationCategory.organisations.map((organisationId) => {
    return (
      <LocationOrganisation
        key={organisationId}
        organisationId={organisationId}
      />
    )
  })

  return (
    <div className='LocationCategory'>
      <h3>{category.name}</h3>
      {organisations}
    </div>
  )
}

export default LocationCategory
