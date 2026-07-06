import { createContext, useContext, useState, type ReactNode } from "react"

interface NavStateContextValue {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  handleSetIsMenuOpen: (open: boolean) => void
  isLocationsOpen: boolean
  setIsLocationsOpen: (open: boolean) => void
  isLocationSelectorOpen: boolean
  setIsLocationSelectorOpen: (open: boolean) => void
  openLocationsMenu: () => void
}

const NavStateContext = createContext<NavStateContextValue | null>(null)

export const NavStateProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isLocationSelectorOpen, setIsLocationSelectorOpen] = useState(false)

  const handleSetIsMenuOpen = (open: boolean) => {
    setIsMenuOpen(open)
    if (!open) {
      setIsLocationsOpen(false)
    }
  }

  const openLocationsMenu = () => {
    handleSetIsMenuOpen(true)
    setIsLocationsOpen(true)
    setIsLocationSelectorOpen(true)
  }

  return (
    <NavStateContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        handleSetIsMenuOpen,
        isLocationsOpen,
        setIsLocationsOpen,
        isLocationSelectorOpen,
        setIsLocationSelectorOpen,
        openLocationsMenu,
      }}
    >
      {children}
    </NavStateContext.Provider>
  )
}

export const useNavState = () => {
  const context = useContext(NavStateContext)
  if (!context) {
    throw new Error("useNavState must be used within a NavStateProvider")
  }
  return context
}
