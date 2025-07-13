import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { trackEvent } from '../utils/analytics'
import { addLanguagePrefix } from '../utils'
import { ClickEvent } from '../types/types'

import '../styles/components/Categories.scss'

const iconColors = ['teal', 'red', 'yellow', 'green']

type CategoriesProps = {
  categoryIds: string[]
  link: string
}

const Categories = ({ categoryIds, link }: CategoriesProps) => {
  const { t, i18n } = useTranslation()

  const categoryTiles = categoryIds.map((categoryId, index) => {
    const color = iconColors[index % iconColors.length]

    const trackClick = () => {
      trackEvent(ClickEvent.category, {
        category: t(`categories.${categoryId}.name`),
        on_page: window.location.href
      })
    }

    return (
      <div key={categoryId} className='location-category'>
        <NavLink
          className={`category-tile ${color}`}
          to={addLanguagePrefix(`/wastenot/${link}${categoryId}`)}
          onClick={trackClick}
        >
          <div className='icon-container'>
            <img
              className={`icon ${color}`}
              src={`/images/icons/categories/${categoryId}-${i18n.language}.webp`}
              alt={`${t(`categories.${categoryId}.name`)} icon`}
            />
          </div>

          {/* <div className='name'>{t(`categories.${categoryId}.name`)}</div> */}
        </NavLink>
      </div>
    )
  })

  return <div className='Categories'>{categoryTiles}</div>
}

export default Categories
