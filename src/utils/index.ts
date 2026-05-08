import { locations, organisations } from '../content'
import { supportedLangs } from '../constants'
import { Location, LocationCategory } from '../types'

export const getLocationById = (locationId: string): Location | undefined =>
  locations.find((location) => location.id === locationId)

export const getLocationCategoryOrganisations = (
  locationId: string,
  categoryId: string
): string[] | undefined => {
  const location = locationId && getLocationById(locationId)
  if (!location) return undefined

  const category = location.categories.find(
    (cat: LocationCategory) => cat.id === categoryId
  )
  return category?.organisations?.filter(
    (id: string) => !organisations[id]?.disabled
  )
}

// Utility to get current language prefix from URL
export const getCurrentLanguagePrefix = (): string => {
  const pathname = window.location.pathname
  const segments = pathname.split('/').filter(Boolean)

  // Check if first segment is a supported language
  const firstSegment = segments[0]

  if (firstSegment && supportedLangs.includes(firstSegment)) {
    return `/${firstSegment}`
  }

  return '' // No language prefix (default)
}

// Utility to add language prefix to a path
export const addLanguagePrefix = (path: string): string => {
  const langPrefix = getCurrentLanguagePrefix()

  // If path already starts with the language prefix, return as is
  if (langPrefix && path.startsWith(langPrefix)) {
    return path
  }
  return `${langPrefix}${path}`
}

export const buildLangPath = (currentPath: string, langCode: string) => {
  const currentPrefix = getCurrentLanguagePrefix()
  const pathWithoutLang = currentPrefix
    ? currentPath.replace(currentPrefix, '')
    : currentPath
  return langCode === 'en' ? pathWithoutLang : `/${langCode}${pathWithoutLang}`
}

// Utility to get home path with current language prefix
export const getHomePathWithLanguage = (): string => {
  return addLanguagePrefix('/')
}
