import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import AppRoutes from './Routes'

import Nav from './nav/Nav'
import ScrollToTop from './components/ScrollToTop'
import { getSettings } from './settings'
import { initGA, trackPageView } from './utils/analytics'


import './styles/App.scss'

// Initialize GA4
initGA(import.meta.env.VITE_GTM_ID)


function App() {
  const location = useLocation()

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname + location.search)
  }, [location])

  return (
    <div className='App'>
      <ScrollToTop />
      <Nav />
      <div className={`main-wrapper ${getSettings()}`}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
