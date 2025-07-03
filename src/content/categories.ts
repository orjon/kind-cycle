import { CategoriesDirectory } from '../types/types'
import { organisations as org } from './organisations'

export const categories: CategoriesDirectory = {
  babyItems: {
    id: 'babyItems',
    color: { text: 'teal', border: 'red ' },
    genericOrganisations: [
      org.lloydPark.id,
      org.pramDepot.id,
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id,
      org.encouragingReuse.id
    ]
  },
  clothes: {
    id: 'clothes',
    color: { text: 'green', border: 'yellow' },
    genericOrganisations: [
      org.traid.id,
      // org.weCollectWeDonate.id,
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id,
      org.encouragingReuse.id
    ]
  },
  furniture: {
    id: 'furniture',
    color: { text: 'green', border: 'yellow' },
    genericOrganisations: [
      org.britishHeartFoundation.id,
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id
    ]
  },
  repair: {
    id: 'repair',
    color: { text: 'teal', border: 'red ' },
    genericOrganisations: [
      org.haringeyFixers.id,
      org.northLondonWasteAuthority.id
    ]
  },
  // food: {
  //   id: 'food',
  //   color: { text: 'green', border: 'yellow' },
  // },
  household: {
    id: 'household',
    color: { text: 'teal', border: 'red ' },
    genericOrganisations: [
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id,
      org.encouragingReuse.id
    ]
  },
  neighbours: {
    id: 'neighbours',
    color: { text: 'green', border: 'yellow' },
    genericOrganisations: [],
    localGroup: true,
    whatsApp: {
      qrcode: 'ferrylane',
      link: 'https://chat.whatsapp.com/EHXIZBYNDn7BPRkrUUM3bY'
    }
  }
}
