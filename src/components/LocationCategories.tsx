import LocationCategory from './LocationCategory'

const LocationCategories = ({ location }) => {
  const locationCategories = location.categories.map((locationCategory) => {
    return (
      <LocationCategory
        key={locationCategory.id}
        locationCategory={locationCategory}
      />
    )
  })

  return <div className='LocationCategories'>{locationCategories}</div>
}

export default LocationCategories
