import { categories as cat, organisations as org } from './index'
import { LocationsDirectory } from '../types/types'

export const locations: LocationsDirectory = {
  ferrylane: {
    id: 'ferrylane',
    postcode: 'N17',
    whatsApp: {
      name: 'Ferrylane WhatsApp group',
      qrcode: 'ferrylane',
      link: 'https://chat.whatsapp.com/EHXIZBYNDn7BPRkrUUM3bY'
    },
    categories: [
      {
        id: cat.neighbours.id
      },
      {
        id: cat.household.id,
        organisations: [
          org.collectNDonate.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id,
          org.encouragingReuse.id,
          org.freegle.id,
          org.loveJunk.id
        ]
      },
      {
        id: cat.furniture.id,
        organisations: [
          org.britishHeartFoundation.id,
          org.sueRyder.id,
          org.jacksSofaDrops.id,
          org.collectNDonate.id,
          org.footprintForGood.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.clothes.id,
        organisations: [
          org.communityClothingCollection.id,
          org.collectMyClothes.id,
          org.redonate.id,
          org.collectNDonate.id,
          org.help2Collect.id,
          org.iCollectClothes.id,
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
          org.help2Collect.id,
          org.lloydPark.id,
          org.pramDepot.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.encouragingReuse.id,
          org.olio.id,
          org.freegle.id
        ]
      },
      {
        id: cat.repair.id,
        organisations: [
          org.haringeyFixers.id,
          org.footprintForGood.id,
          org.northLondonWasteAuthority.id
        ]
      }
      // { id: cat.food.id, organisations: [] },
    ]
  },
  haringey: {
    id: 'haringey',
    postcode: '',
    categories: [
      {
        id: cat.neighboursHaringey.id
      },
      {
        id: cat.household.id,
        organisations: [
          org.collectNDonate.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id,
          org.freegle.id,
          org.loveJunk.id
        ]
      },
      {
        id: cat.furniture.id,
        organisations: [
          org.britishHeartFoundation.id,
          org.sueRyder.id,
          org.jacksSofaDrops.id,
          org.collectNDonate.id,
          org.footprintForGood.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.clothes.id,
        organisations: [
          org.communityClothingCollection.id,
          org.collectMyClothes.id,
          org.redonate.id,
          org.collectNDonate.id,
          org.help2Collect.id,
          org.iCollectClothes.id,
          org.traid.id,
          org.clothesBanks.id
        ]
      },
      {
        id: cat.babyItems.id,
        organisations: [
          org.prayHaringey.id,
          org.help2Collect.id,
          org.lloydPark.id,
          org.pramDepot.id,
          org.freegle.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.repair.id,
        organisations: [
          org.haringeyFixers.id,
          org.footprintForGood.id,
          org.northLondonWasteAuthority.id
        ]
      }
      // { id: cat.food.id, organisations: [] },
    ]
  },
  broadwaterfarm: {
    id: 'broadwaterfarm',
    postcode: '',
    categories: [
      {
        id: cat.neighboursBroadwaterfarm.id
      },
      {
        id: cat.household.id,
        organisations: [
          org.collectNDonate.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id,
          org.freegle.id,
          org.loveJunk.id
        ]
      },
      {
        id: cat.furniture.id,
        organisations: [
          org.britishHeartFoundation.id,
          org.sueRyder.id,
          org.jacksSofaDrops.id,
          org.collectNDonate.id,
          org.footprintForGood.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.clothes.id,
        organisations: [
          org.communityClothingCollection.id,
          org.collectMyClothes.id,
          org.redonate.id,
          org.collectNDonate.id,
          org.help2Collect.id,
          org.iCollectClothes.id,
          org.traid.id,
          org.clothesBanks.id
        ]
      },
      {
        id: cat.babyItems.id,
        organisations: [
          org.prayHaringey.id,
          org.help2Collect.id,
          org.lloydPark.id,
          org.pramDepot.id,
          org.freegle.id,
          org.freecycle.id,
          org.facebookMarketplace.id,
          org.olio.id
        ]
      },
      {
        id: cat.repair.id,
        organisations: [
          org.haringeyFixers.id,
          org.footprintForGood.id,
          org.northLondonWasteAuthority.id
        ]
      }
      // { id: cat.food.id, organisations: [] },
    ]
  }
}
