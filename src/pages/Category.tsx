import { useParams, Navigate } from 'react-router-dom'

import LocationOrganisation from '../components/LocationOrganisation'

import CategoryHeader from '../components/CategoryHeader'

import { categories } from '../content'

import '../styles/pages/Category.scss'

const Category = () => {
  const { categoryId } = useParams()

  if (!categoryId) return <Navigate to='/' />

  const organisationList = categories[categoryId].genericOrganisations.map(
    (organisationId: string) => (
      <LocationOrganisation
        key={organisationId}
        organisationId={organisationId}
        colors={categories[categoryId].color}
      />
    )
  )

  return (
    <div className='Category page'>
      <div className='content-wrapper'>
        <CategoryHeader
          categoryId={categoryId}
          color={categories[categoryId].color.text}
        />
        <div className='organisations'>{organisationList}</div>
      </div>
    </div>
  )
}

export default Category
