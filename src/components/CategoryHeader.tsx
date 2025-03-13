import { Navigate } from 'react-router-dom'

import { categories } from '../content'

import '../styles/components/CategoryHeader.scss'

type CategoryHeaderProps = {
  categoryId: string
}

const CategoryHeader = ({ categoryId }: CategoryHeaderProps) => {
  const category = categoryId && categories[categoryId]

  if (!category) return <Navigate to='/' />

  return (
    <div className='CategoryHeader'>
      <div className='name'>{category.name}</div>
      <div className='description'>{category.description}</div>
    </div>
  )
}

export default CategoryHeader
