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
  website?: string | null
}

export type OrganisationsDirectory = {
  [key: string]: Organisation
}

export type LocationCategory = {
  id: string
  organisations: string[]
}

export type Location = {
  name: string
  description?: string
  image?: string
  website?: string | null
  categories: LocationCategory[]
}

export type LocationsDirectory = {
  [key: string]: Location
}

export type Category = {
  id: string
  name: string
  description: string
}

export type CategoriesDirectory = {
  [key: string]: Category
}
