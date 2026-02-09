import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { getHomePathWithLanguage, getLocationById } from '../utils'

import '../styles/pages/LocationImages.scss'

function Location() {
  const { t } = useTranslation()
  const { locationId } = useParams()

  const location = locationId && getLocationById(locationId)
  if (!location) return <Navigate to={getHomePathWithLanguage()} />

  const [image, setImage] = useState(null)

  useEffect(() => {
    import(`../assets/images/locations/${location.id}.webp`).then((image) =>
      setImage(image.default)
    )
  }, [location.id])

  return (
    <div className='Location page'>
      <div className='location-header'>
        {image && (
          <img
            className='photo'
            src={image}
            alt={t(`locations.${locationId}.name`)}
          />
        )}
        <div className='name'>
          {t(`locations.${locationId}.name`)} {location.postcode}
        </div>
      </div>
    </div>
  )
}

export default Location
