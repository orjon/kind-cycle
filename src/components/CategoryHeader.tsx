import { Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import HeaderImage from './HeaderImage'

import { categories, path } from '../content'
import { getHomePathWithLanguage } from '../utils'

import '../styles/components/CategoryHeader.scss'

type CategoryHeaderProps = {
  categoryId: string
  color: string
}

const CategoryHeader = ({ categoryId, color }: CategoryHeaderProps) => {
  const { t } = useTranslation()
  const category = categoryId && categories[categoryId]

  if (!category) return <Navigate to={getHomePathWithLanguage()} />

  return (
    <div className='CategoryHeader'>
      {/* <div className='details'> */}
      <HeaderImage
        filename={category.id}
        path={path.headers}
        altText={t(`categories.${categoryId}.imageDescription`)}
      />
      <div className={`title ${color}`}>
        {t(`categories.${categoryId}.name`)}
      </div>
      <div
        className='description'
        dangerouslySetInnerHTML={{
          __html: t(`categories.${categoryId}.description`)
        }}
      />
    </div>
    // </div>
  )
}

export default CategoryHeader
