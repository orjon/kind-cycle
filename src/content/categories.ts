import { CategoriesDirectory } from '../types/types'

export const categories: CategoriesDirectory = {
  babyItems: {
    id: 'babyItems',
    name: 'Baby & Children Items',
    description:
      'Babies grow fast, and all those outgrown items just take up space. Why not donate gently used baby gear and free up room while helping families in need?'
  },
  clothes: {
    id: 'clothes',
    name: 'Clothes',
    description:
      'Clear out your closet and donate unwanted clothes that no longer fit or suit you. Give them a second chance to be worn and loved by someone else!'
  },
  furniture: {
    id: 'furniture',
    name: 'Furniture',
    description:
      'Free up space and donate unwanted furniture that no longer suits your home, giving it a new purpose while helping a new household!'
  },
  repair: {
    id: 'repair',
    name: 'Repair',
    description: 'Items that could be repaired'
  },
  food: {
    id: 'food',
    name: 'Food',
    description: 'Food and pet food'
  },
  household: {
    id: 'household',
    name: 'Household items',
    description: 'Household items; Kitchen appliances, ornamental items, etc.'
  }
}
