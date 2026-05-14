import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { initGA, trackPageViewGoogle } from '../utils/analytics-google'
import { trackPageViewUmami } from '../utils/analytics-umami'
import { initialEntryUrl } from '../utils'

initGA(import.meta.env.VITE_GTM_ID)

export default function Analytics() {
  const location = useLocation()
  const isFirstRender = useRef(true)

  useEffect(() => {
    const currentPath = location.pathname + location.search

    if (isFirstRender.current) {
      isFirstRender.current = false
      if (initialEntryUrl !== currentPath) {
        trackPageViewGoogle(initialEntryUrl)
        trackPageViewUmami(initialEntryUrl)
      }
    }

    trackPageViewGoogle(currentPath)
    trackPageViewUmami(currentPath)
  }, [location])

  return null
}
