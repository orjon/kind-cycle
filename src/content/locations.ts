import { categories as cat, organisations as org } from './index'
import { LocationsDirectory } from '../types/types'

export const locations: LocationsDirectory = {
  ferrylane: {
    id: 'ferrylane',
    name: 'Ferry Lane Estate',
    postcode: 'N17',
    categories: [
      { id: cat.neighbours.id, organisations: [] },
      { id: cat.household.id, organisations: [] },
      {
        id: cat.furniture.id,
        organisations: [
          org.britishHeartFoundation.id,
          org.olio.id,
          org.freecycle.id,
          org.facebookMarketplace.id
        ]
      },
      {
        id: cat.clothes.id,
        organisations: [
          org.traid.id,
          org.weCollectWeDonate.id,
          org.olio.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.encouragingReuse.id
        ]
      },
      {
        id: cat.babyItems.id,
        organisations: [
          org.lloydPark.id,
          org.pramDepot.id,
          org.olio.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.encouragingReuse.id
        ]
      },

      { id: cat.repair.id, organisations: [] }
      // { id: cat.food.id, organisations: [] },
    ]
  }
}
