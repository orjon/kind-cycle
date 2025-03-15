import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { Location } from '../types/types'

import { categories } from '../content'

import '../styles/components/LocationCategories.scss'

const iconColors = ['teal', 'red', 'yellow', 'green']

type LocationCategoriesProps = {
  location: Location
}

const LocationCategories = ({ location }: LocationCategoriesProps) => {
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>(
    {}
  )

  useEffect(() => {
    location.categories.forEach((category) => {
      iconColors.forEach((color) => {
        const imageKey = `${category.id}-${color}`
        import(`../assets/categories/${imageKey}.svg`)
          .then((image) => {
            setCategoryImages((prev) => ({
              ...prev,
              [imageKey]: image.default
            }))
          })
          .catch((err) =>
            console.error(`Failed to load image for ${category.id}:`, err)
          )
      })
    })
  }, [location.id])

  console.log(categoryImages)

  const categoryTiles = location.categories.map((category, index) => {
    const color = iconColors[index % iconColors.length]
    return (
      <div key={category.id} className='location-category'>
        <NavLink
          className={`category-tile ${color}`}
          to={`/wastenot/${location.id}/${category.id}`}
        >
          {categoryImages[`${category.id}-${color}`] && (
            <div className='icon-container'>
              <img
                className={`icon ${color}`}
                src={categoryImages[`${category.id}-${color}`]}
                alt={category.id}
              />
            </div>
          )}
          <div className='name'>{categories[category.id].name}</div>
        </NavLink>
      </div>
    )
  })

  return <div className='LocationCategories'>{categoryTiles}</div>
}

export default LocationCategories
