import { NavLink } from 'react-router-dom'
import { trackEventGoogle } from '../utils/analytics-google'
import { addLanguagePrefix } from '../utils'
import { ClickEvent, NavType } from '../types'

type NavItemProps = {
  nav_item: string
  label: string
  type: NavType
  path: string
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavItem = ({ nav_item, label, type, path, setIsMenuOpen }: NavItemProps) => {

  const handleNavClick = () => {
    trackEventGoogle(ClickEvent.navigation, {
      nav_item,
      on_page: window.location.href
    })
    setIsMenuOpen(false)
  }

  const locationClass = type === NavType.location ? 'location' : ''

  return (
    <NavLink
      className={`NavItem NavLink ${locationClass}`}
      to={addLanguagePrefix(path)}
      onClick={handleNavClick}
    >
      <div className='text'>{label}</div>
    </NavLink>
  )
}

export default NavItem
