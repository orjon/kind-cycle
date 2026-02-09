import { NavLocation, NavType } from '../types/types'
import { locations } from './locations'

const geographicLocations = locations.map((location) => ({
  id: location.id,
  active: location.active,
  type: NavType.location,
  path: `/wastenot/${location.id}`
}))

const navLocations: NavLocation[] = [
  { id: 'wastenot', type: NavType.page, path: '/wastenot' },
  { id: 'about', type: NavType.page, path: '/about' },
  { id: 'contact', type: NavType.page, path: '/contact' },
  ...geographicLocations
]

export default navLocations
