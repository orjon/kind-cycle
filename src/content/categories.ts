import { CategoriesDirectory } from '../types/types'
import { organisations as org } from './organisations'

export const categories: CategoriesDirectory = {
  babyItems: {
    id: 'babyItems',
    name: 'Baby Items',
    color: { text: 'teal', border: 'red ' },
    imageDescription: 'Icons of various baby items',
    description:
      'Babies grow quickly, and outgrown items take up space. <span class="bold">Donate gently used baby gear to families in need and free up room.</span>',
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
    name: 'Clothes',
    color: { text: 'green', border: 'yellow' },
    imageDescription: 'Icons of various clothes',
    description:
      'Clear out your closet and donate what you no longer wear. <span class="bold">Give your shoes and clothes a second life and let someone else enjoy them.</span>',
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
    name: 'Furniture',
    color: { text: 'green', border: 'yellow' },
    imageDescription: 'Icons of various furniture items',
    description:
      'If furniture you no longer need or love is taking up space, donate it and make someone\'s day – <span class="bold">they\'ll even pick it up from your doorstep!</span>',
    genericOrganisations: [
      org.britishHeartFoundation.id,
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id
    ]
  },
  repair: {
    id: 'repair',
    name: 'Repair It!',
    color: { text: 'teal', border: 'red ' },
    imageDescription: 'Icons of various repair tools',
    description:
      '<span class="bold">Fixing broken items</span> is an easy way to reduce waste while <span class="bold">saving the planet and your wallet.</span>',
    genericOrganisations: [
      org.haringeyFixers.id,
      org.northLondonWasteAuthority.id
    ]
  },
  // food: {
  //   id: 'food',
  //   name: 'Food',
  //   color: { text: 'green', border: 'yellow' },
  //   imageDescription: 'Icons of various food items',
  //   description: 'Food and pet food'
  // },
  household: {
    id: 'household',
    name: 'Household Goods',
    color: { text: 'teal', border: 'red ' },
    imageDescription: 'Icons of various household items',
    description:
      'What you don’t need, someone else will love. The household items you no longer want might be exactly what someone else is looking for!',
    genericOrganisations: [
      org.olio.id,
      org.freecycle.id,
      org.facebookMarketplace.id,
      org.encouragingReuse.id
    ]
  },
  neighbours: {
    id: 'neighbours',
    name: 'Share with Neighbours',
    color: { text: 'green', border: 'yellow' },
    imageDescription: 'Icons of various household items',
    description:
      'Sharing what you no longer need with your Ferry Lane neighbors: they’re local and can pick up items with ease. From small items no one would travel for to large items that would require costly transport, it’s all easier when your neighbors are nearby. You can even donate food your cat doesn’t like, fridge surplus before going on holiday, or extra pantry items.<br /><br /><span class="bold">Click or scan the QR code below to join the FLAG WhatsApp community and post your items there.</span> ',
    genericOrganisations: [],
    localGroup: true,
    whatsApp: {
      qrcode: 'ferrylane',
      link: 'https://chat.whatsapp.com/EHXIZBYNDn7BPRkrUUM3bY',
      label: 'Join the FLAG WhatsApp community link'
    }
  }
}
