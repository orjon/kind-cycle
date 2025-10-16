import { NavLocation, NavType } from '../types/types'

const navLocations: NavLocation[] = [
  { id: 'wastenot', type: NavType.page, path: '/wastenot' },
  {
    id: 'broadwaterfarm',
    type: NavType.location,
    path: '/wastenot/broadwaterfarm'
  },
  { id: 'ferrylane', type: NavType.location, path: '/wastenot/ferrylane' },
  { id: 'haringey', type: NavType.location, path: '/wastenot/haringey' },
  { id: 'about', type: NavType.page, path: '/about' },
  { id: 'contact', type: NavType.page, path: '/contact' }
]

export default navLocations
