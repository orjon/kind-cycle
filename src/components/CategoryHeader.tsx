import { Navigate } from 'react-router-dom'

import HeaderImage from './HeaderImage'

import { categories, path } from '../content'

import '../styles/components/CategoryHeader.scss'

type CategoryHeaderProps = {
  categoryId: string
  color: string
}

const CategoryHeader = ({ categoryId, color }: CategoryHeaderProps) => {
  const category = categoryId && categories[categoryId]

  if (!category) return <Navigate to='/' />

  return (
    <div className='CategoryHeader'>
      {/* <div className='details'> */}
      <HeaderImage
        filename={category.id}
        path={path.headers}
        altText={category.imageDescription}
      />
      <div className={`title ${color}`}>{category.name}</div>
      <div
        className='description'
        dangerouslySetInnerHTML={{ __html: category.description }}
      />
    </div>
    // </div>
  )
}

export default CategoryHeader
