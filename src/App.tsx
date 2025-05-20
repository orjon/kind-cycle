import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import LocationCategory from './pages/LocationCategory'
import Category from './pages/Category'
import ScrollToTop from './components/ScrollToTop'
import { getSettings } from './settings'
import { initGA, trackPageView } from './utils/analytics'

import './styles/App.scss'

// Initialize GA4 with your measurement ID
// Replace 'G-XXXXXXXXXX' with your actual GA4 measurement ID
initGA('G-XXXXXXXXXX')

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wastenot' element={<Home />} />
          <Route path='/wastenot/:locationId' element={<Location />} />
          <Route
            path='/wastenot/:locationId/:categoryId'
            element={<LocationCategory />}
          />
          <Route path='/wastenot/category/:categoryId' element={<Category />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
