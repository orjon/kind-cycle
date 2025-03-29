import { useParams, Navigate } from 'react-router-dom'

import HeaderImage from '../components/HeaderImage'
import { SafeHtml } from '../components/SafeHtml'
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
      <div className='content-wrapper'>
        <HeaderImage
          filename='location'
          path={path.headers}
          altText='Icon of a pigeon holding an envelope'
        />
        <div className='title'>{location.name}</div>
        <div className='description'>
          <SafeHtml html={location.description} />
        </div>
        <Categories categoryIds={categoryIds} link={`${locationId}/`} />
      </div>
    </div>
  )
}

export default Location
