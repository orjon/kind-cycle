import { NavMenuItem, NavType, NavLocations } from '../types'
// import { locations } from './locations'

// const geographicLocations = locations.map((location) => ({
//   id: location.id,
//   active: location.active,
//   type: NavType.location,
//   path: `/wastenot/${location.id}`
// }))

const locationMenuItem = {
  id: NavLocations.locations,
  type: NavType.page,
  path: '/location'
}

const menuItems: NavMenuItem[] = [
  { id: NavLocations.wastenot, type: NavType.page, path: '/wastenot' },
  { id: NavLocations.about, type: NavType.page, path: '/about' },
  { id: NavLocations.contact, type: NavType.page, path: '/contact' }
]
const burgerMenuItems: NavMenuItem[] = [...menuItems, locationMenuItem]

export { menuItems, burgerMenuItems }
