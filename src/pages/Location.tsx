import { useParams, Navigate } from 'react-router-dom'

import HeaderImage from '../components/HeaderImage'
import Categories from '../components/Categories'

import { locations, path } from '../content'

import '../styles/pages/Location.scss'

const Location = () => {
  const { locationId } = useParams()
  const location = locationId && locations[locationId]
  if (!location) return <Navigate to='/' />

  const categoryIds = location.categories.map((category) => category.id)

  return (
    <div className='Location page'>
      <HeaderImage
        filename='location'
        path={path.headers}
        altText='Icon of a pigeon holding an envelope'
      />
      <div className='location'>{location.name}</div>
      {/* <LocationHeader locationId={locationId} /> */}
      <Categories categoryIds={categoryIds} link={`${locationId}/`} />
    </div>
  )
}

export default Location
