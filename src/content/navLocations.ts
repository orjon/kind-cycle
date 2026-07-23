import { NavMenuItem, NavType, NavLocations } from "../types"

const locationMenuItem = {
  id: NavLocations.locations,
  type: NavType.location,
}

const menuItems: NavMenuItem[] = [
  // { id: NavLocations.wastenot, type: NavType.page, path: '/wastenot' },
  {
    id: NavLocations.electricals,
    type: NavType.page,
    path: "/recycle-your-electricals",
  },
  { id: NavLocations.about, type: NavType.page, path: "/about" },
  // { id: NavLocations.contact, type: NavType.page, path: "/contact" },
]
const burgerMenuItems: NavMenuItem[] = [
  ...[...menuItems].reverse(),
  locationMenuItem,
]

export { menuItems, burgerMenuItems }
