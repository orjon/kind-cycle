import { NavLink } from 'react-router-dom'

import { categories } from '../content'

import '../styles/components/Categories.scss'

const iconColors = ['teal', 'red', 'yellow', 'green']

type CategoriesProps = {
  categoryIds: string[]
  link: string
}

const Categories = ({ categoryIds, link }: CategoriesProps) => {
  const categoryTiles = categoryIds.map((categoryId, index) => {
    const color = iconColors[index % iconColors.length]
    return (
      <div key={categoryId} className='location-category'>
        <NavLink
          className={`category-tile ${color}`}
          to={`/wastenot/${link}${categoryId}`}
        >
          <div className='icon-container'>
            <img
              className={`icon ${color}`}
              src={`/images/icons/categories/${categoryId}.webp`}
              alt={`${categories[categoryId].name} icon`}
            />
          </div>

          {/* <div className='name'>{categories[category.id].name}</div> */}
        </NavLink>
      </div>
    )
  })

  return <div className='Categories'>{categoryTiles}</div>
}

export default Categories
