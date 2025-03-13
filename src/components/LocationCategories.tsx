import { NavLink } from 'react-router-dom'

// import LocationCategory from './LocationCategory'

import { Location } from '../types/types'

import { categories } from '../content'

import '../styles/components/LocationCategories.scss'

type LocationCategoriesProps = {
  location: Location
}

const LocationCategories = ({ location }: LocationCategoriesProps) => {
  const categoryTiles = location.categories.map((category) => {
    return (
      <div className='LocationCategory'>
        <NavLink
          className='category-link'
          to={`/wastenot/${location.id}/${category.id}`}
        >
          <div className='category-tile'>
            <div className='name'>{categories[category.id].name}</div>
          </div>
        </NavLink>
      </div>
    )
  })

  return <div className='LocationCategories'>{categoryTiles}</div>
}

export default LocationCategories
