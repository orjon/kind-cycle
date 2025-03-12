import LocationCategory from './LocationCategory'

import { LocationCategory as LocationCategoryType } from '../types/types'

type LocationCategoriesProps = {
  locationCategories: LocationCategoryType[]
}

const LocationCategories = ({
  locationCategories
}: LocationCategoriesProps) => {
  const categories = locationCategories.map((category) => {
    return <LocationCategory key={category.id} locationCategory={category} />
  })

  return <div className='LocationCategories'>{categories}</div>
}

export default LocationCategories
