import { NavLink } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { addLanguagePrefix } from '../utils'
import { ClickEvent } from '../types/types'

type NavItemProps = {
  label: string
  path: string
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavItem = ({ label, path, setIsMenuOpen }: NavItemProps) => {
  const handleNavClick = () => {
    trackEvent(ClickEvent.navigation, {
      nav_item: label,
      on_page: window.location.href
    })
    setIsMenuOpen(false)
  }

  return (
    <NavLink
      className='NavItem'
      to={addLanguagePrefix(path)}
      onClick={handleNavClick}
    >
      <div className='text'>{label}</div>
    </NavLink>
  )
}

export default NavItem
