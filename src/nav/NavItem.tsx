import { NavLink } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { addLanguagePrefix } from '../utils'
import { ClickEvent, NavType } from '../types/types'

type NavItemProps = {
  nav_item: string
  label: string
  type: NavType
  path: string
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavItem = ({ nav_item, label, type, path, setIsMenuOpen }: NavItemProps) => {

  const handleNavClick = () => {
    trackEvent(ClickEvent.navigation, {
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
