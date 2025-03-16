import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { categories, path } from '../content'

import '../styles/components/Categories.scss'

const iconColors = ['teal', 'red', 'yellow', 'green']

type CategoriesProps = {
  categoryIds: string[]
  link: string
}

const Categories = ({ categoryIds, link }: CategoriesProps) => {
  const [categoryImages, setCategoryImages] = useState<Record<string, string>>(
    {}
  )

  useEffect(() => {
    categoryIds.forEach((categoryId) => {
      const category = categories[categoryId]
      const imageKey = `${category.id}`
      import(`${path.categories}${imageKey}.webp`)
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
  }, [categoryIds])

  console.log(categoryImages)

  const categoryTiles = categoryIds.map((categoryId, index) => {
    const color = iconColors[index % iconColors.length]
    return (
      <div key={categoryId} className='location-category'>
        <NavLink
          className={`category-tile ${color}`}
          to={`/wastenot/${link}${categoryId}`}
        >
          {categoryImages[categoryId] && (
            <div className='icon-container'>
              <img
                className={`icon ${color}`}
                src={categoryImages[categoryId]}
                alt={`${categories[categoryId].name} icon`}
              />
            </div>
          )}
          {/* <div className='name'>{categories[category.id].name}</div> */}
        </NavLink>
      </div>
    )
  })

  return <div className='Categories'>{categoryTiles}</div>
}

export default Categories
