import { Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import HeaderImage from './HeaderImage'

import { categories, path } from '../content'
import { getHomePathWithLanguage } from '../utils'

import '../styles/components/CategoryHeader.scss'

type CategoryHeaderProps = {
  categoryId: string
  color: string
}

const NeighboursHeader = ({ categoryId, color }: CategoryHeaderProps) => {
  const { t } = useTranslation()
  const { locationId } = useParams()
  const category = categoryId && categories[categoryId]

  if (!category) return <Navigate to={getHomePathWithLanguage()} />

  return (
    <div className='NeighboursHeader'>
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
          __html: t(`neighbourhoods.${locationId}.description`)
        }}
      />
    </div>
  )
}

export default NeighboursHeader
