import { useParams, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import LocationHeader from '../components/LocationHeader'
import NeighboursHeader from '../components/NeighboursHeader'
import QRCode from '../components/QRCode'

import { getHomePathWithLanguage } from '../utils'

import { categories, locations, path } from '../content'

import '../styles/pages/Neighbours.scss'

const Neighbours = () => {
  const { t } = useTranslation()
  const { locationId } = useParams()
  const categoryId = categories.neighbours.id

  if (!locationId) return <Navigate to={getHomePathWithLanguage()} />

  const category = categories[categoryId]
  const location = locations[locationId]

  return (
    <div className='Neighbours page'>
      <div className='content-wrapper'>
        <LocationHeader locationId={locationId} />
        <NeighboursHeader categoryId={categoryId} color={category.color.text} />

        {location.whatsApp && (
          <QRCode
            filename={location.whatsApp.qrcode!}
            path={path.qrcode}
            link={location.whatsApp.link!}
            altText={t(`neighbourhoods.${locationId}.whatsApp.label`)}
          />
        )}
      </div>
    </div>
  )
}

export default Neighbours
