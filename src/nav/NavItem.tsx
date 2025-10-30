import { NavLink } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { addLanguagePrefix } from '../utils'
import { ClickEvent } from '../types/types'

type NavItemProps = {
  nav_item: string
  label: string
  path: string
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavItem = ({ nav_item, label, path, setIsMenuOpen }: NavItemProps) => {
  const handleNavClick = () => {
    trackEvent(ClickEvent.navigation, {
      nav_item,
      on_page: window.location.href
    })
    setIsMenuOpen(false)
  }

  return (
    <NavLink
      className='NavItem NavLink'
      to={addLanguagePrefix(path)}
      onClick={handleNavClick}
    >
      <div className='text'>{label}</div>
    </NavLink>
  )
}

export default NavItem
