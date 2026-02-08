import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
import Categories from '../components/Categories'

import { path } from '../content'
import { getHomePathWithLanguage, getLocationById } from '../utils'

import '../styles/pages/Location.scss'

const Location = () => {
  const { t } = useTranslation()
  const { locationId } = useParams()
  const location = locationId && getLocationById(locationId)
  if (!location) return <Navigate to={getHomePathWithLanguage()} />

  const categoryIds = location.categories.map((category) => category.id)

  return (
    <div className='Location page'>
      <div className='content-wrapper'>
        <HeaderImage filename='location' path={path.headers} altText='' />
        <div className='title'>{t(`locations.${locationId}.name`)}</div>
        <div className='description'>
          <SafeHtml html={t(`locations.${locationId}.description`)} />
        </div>
        <Categories categoryIds={categoryIds} link={`${locationId}/`} />
      </div>
    </div>
  )
}

export default Location
