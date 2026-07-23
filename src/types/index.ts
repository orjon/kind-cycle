export type LanguageOption = {
  code: string
  name: string
  flag: string
}

export enum NavType {
  location = "location",
  page = "page",
}

export enum NavLocations {
  // wastenot = 'wastenot',
  electricals = "electricals",
  locations = "locations",
  about = "about",
  contact = "contact",
}

export type NavMenuItem = {
  id: string
  type: NavType
  path?: string
}

export type Organisation = {
  id: string
  disabled?: boolean
  address?: string | null
  website?: { url: string; label?: string }
}

export type OrganisationsDirectory = {
  [key: string]: Organisation
}

export type LocationCategory = {
  id: string
  organisations?: string[]
}

export type Location = {
  id: string
  label: string
  disabled?: boolean
  postcode: string
  image?: string
  website?: string
  categories: LocationCategory[]
  whatsApp?: {
    name?: string
    label?: string
    qrcode?: string
    link?: string
  }
}

export type LocationsDirectory = {
  [key: string]: Location
}

export type Category = {
  id: string
  color: { text: string; border: string }
  genericOrganisations: string[]
  localGroup?: boolean
  whatsApp?: { qrcode: string; link: string }
}

export type CategoriesDirectory = {
  [key: string]: Category
}

export enum ClickEvent {
  navigation = "click-navigation",
  category = "click-category",
  organisation = "click-organisation-link",
  qrCode = "click-qr",
}
