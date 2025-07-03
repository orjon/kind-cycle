import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LocationOrganisation from '../components/LocationOrganisation'
import LocationHeader from '../components/LocationHeader'
import CategoryHeader from '../components/CategoryHeader'
import QRCode from '../components/QRCode'

import {
  getLocationCategoryOrganisations,
  getHomePathWithLanguage
} from '../utils'

import { categories, path } from '../content'

import '../styles/pages/LocationCategory.scss'

const LocationCategory = () => {
  const { t } = useTranslation()
  const { locationId, categoryId } = useParams()

  if (!locationId || !categoryId)
    return <Navigate to={getHomePathWithLanguage()} />

  const category = categories[categoryId]

  const organisationList = getLocationCategoryOrganisations(
    locationId,
    categoryId
  )?.map((organisationId: string) => (
    <LocationOrganisation
      key={organisationId}
      organisationId={organisationId}
      colors={category.color}
    />
  ))

  return (
    <div className='LocationCategory page'>
      <div className='content-wrapper'>
        <LocationHeader locationId={locationId} />
        <CategoryHeader categoryId={categoryId} color={category.color.text} />
        {!category.localGroup && (
          <div className='organisations'>{organisationList}</div>
        )}
        {category.whatsApp && (
          <QRCode
            filename={category.whatsApp.qrcode}
            path={path.qrcode}
            link={category.whatsApp.link}
            altText={t(`categories.${categoryId}.whatsApp.label`)}
          />
        )}
      </div>
    </div>
  )
}

export default LocationCategory
