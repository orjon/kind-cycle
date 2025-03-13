type Settings = {
  [key: string]: boolean
}

const settings: Settings = {
  sideMenu: false,
  navShadow: false
}

export const getSettings = () => {
  return [
    settings.sideMenu ? 'sideMenu' : false,
    settings.navShadow ? 'navShadow' : false
  ]
    .filter(Boolean)
    .join(' ')
}
