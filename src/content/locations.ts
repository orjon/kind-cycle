import { categories as cat, organisations as org } from './index'
import { LocationsDirectory } from '../types/types'

export const locations: LocationsDirectory = {
  ferrylane: {
    id: 'ferrylane',
    name: 'Ferry Lane Estate',
    postcode: 'N17',
    description:
      'Ferry Lane Estate is the first delivery location for the Waste Not campaign. Bold, eye-catching information panels promoting household item donations have been strategically installed in common dumping areas across the estate. <span class="bold">Explore our comprehensive guide on where and how to donate.</span>',
    categories: [
      { id: cat.neighbours.id, organisations: [] },
      {
        id: cat.household.id,
        organisations: [
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id,
          org.encouragingReuse.id
        ]
      },
      {
        id: cat.furniture.id,
        organisations: [
          org.britishHeartFoundation.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.clothes.id,
        organisations: [
          org.traid.id,
          org.clothesBanks.id,
          // org.weCollectWeDonate.id,
          org.encouragingReuse.id,
          org.olio.id
        ]
      },
      {
        id: cat.babyItems.id,
        organisations: [
          org.lloydPark.id,
          org.pramDepot.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.encouragingReuse.id,
          org.olio.id
        ]
      },
      {
        id: cat.repair.id,
        organisations: [org.haringeyFixers.id, org.northLondonWasteAuthority.id]
      }
      // { id: cat.food.id, organisations: [] },
    ]
  }
}
