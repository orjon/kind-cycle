import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { locations } from '../content'

import '../styles/pages/LocationImages.scss'

function Location() {
  const { locationId } = useParams()
  const location = locationId && locations[locationId]
  if (!location) return <Navigate to='/' />

  const [image, setImage] = useState(null)

  useEffect(() => {
    import(`../assets/images/locations/${location.id}.webp`).then((image) =>
      setImage(image.default)
    )
  }, [location.name])

  return (
    <div className='Location page'>
      <div className='location-header'>
        {image && <img className='photo' src={image} alt={location.name} />}
        <div className='name'>
          {location.name} {location.postcode}
        </div>
      </div>
    </div>
  )
}

export default Location
