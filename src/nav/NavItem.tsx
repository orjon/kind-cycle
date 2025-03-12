import { NavLink } from 'react-router-dom'

type NavItemProps = {
  label: string
  path: string
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavItem = ({ label, path, setIsMenuOpen }: NavItemProps) => {
  return (
    <NavLink className='NavItem' to={path} onClick={() => setIsMenuOpen(false)}>
      <div className='text'>{label}</div>
    </NavLink>
  )
}

export default NavItem
