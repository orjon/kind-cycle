import { LocationCategory } from '../types/types'

import { locations } from '../content'

export const getLocationCategoryOrganisations = (
  locationId: string,
  categoryId: string
) => {
  return locations[locationId].categories.find(
    (category: LocationCategory) => category.id === categoryId
  )?.organisations
}
