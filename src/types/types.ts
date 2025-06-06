export type NavLocation = {
  id: string
  label: string
  path: string
}

export type Organisation = {
  id: string
  name: string
  about: string
  howItWorks: string
  address?: string | null
  website?: { url: string; label?: string }
}

export type OrganisationsDirectory = {
  [key: string]: Organisation
}

export type LocationCategory = {
  id: string
  organisations: string[]
}

export type Location = {
  id: string
  name: string
  postcode: string
  description: string
  image?: string
  website?: string
  categories: LocationCategory[]
}

export type LocationsDirectory = {
  [key: string]: Location
}

export type Category = {
  id: string
  name: string
  color: { text: string; border: string }
  imageDescription: string
  description: string
  genericOrganisations: string[]
  localGroup?: boolean
  whatsApp?: { name: string; qrcode: string; link: string; label: string }
}

export type CategoriesDirectory = {
  [key: string]: Category
}

export enum ClickEvent {
  navigation = 'click-navigation',
  category = 'click-category',
  organisation = 'click-organisation-link',
  qrCode = 'click-qr'
}
