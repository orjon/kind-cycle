import {
  Routes,
  Route,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
  Navigate
} from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Nav from './nav/Nav'
import Home from './pages/WasteNot'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import RedirectToLocation from './pages/RedirectToLocation'
import LocationCategory from './pages/LocationCategory'
import Category from './pages/Category'
import Neighbours from './pages/Neighbours'
import ScrollToTop from './components/ScrollToTop'
import { getSettings } from './settings'
import { initGA, trackPageView } from './utils/analytics'
import { supportedLangs } from './constants'

import './styles/App.scss'

// Initialize GA4
initGA(import.meta.env.VITE_GTM_ID)

const AppWrapper = () => {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const langToUse = lang ?? 'en'

    if (!supportedLangs.includes(langToUse)) {
      // redirect to default language without changing URL structure
      const strippedPath = location.pathname.replace(/^\/[^/]+/, '')
      navigate(`/en${strippedPath}`, { replace: true })
      return
    }

    i18n.changeLanguage(langToUse) // synchronous with preloaded translations
  }, [lang, i18n, navigate, location])

  return <Outlet />
}

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
          <Route
            path='/broadwaterfarm'
            element={<Navigate to='/wastenot/broadwaterfarm' replace />}
          />
          <Route
            path='/ferrylane'
            element={<Navigate to='/wastenot/ferrylane' replace />}
          />
          <Route
            path='/haringey'
            element={<Navigate to='/wastenot/haringey' replace />}
          />
          <Route path='/:lang?' element={<AppWrapper />}>
            <Route index element={<Home />} />
            <Route path='wastenot' element={<Home />} />
            <Route path='wastenot/:locationId' element={<Location />} />
            <Route
              path='wastenot/:locationId/leaflet'
              element={<RedirectToLocation />}
            />
            <Route
              path='wastenot/:locationId/poster'
              element={<RedirectToLocation />}
            />
            <Route
              path='wastenot/:locationId/panel'
              element={<RedirectToLocation />}
            />
            <Route
              path='wastenot/:locationId/neighbours'
              element={<Neighbours />}
            />
            <Route
              path='wastenot/:locationId/:categoryId'
              element={<LocationCategory />}
            />

            <Route
              path='wastenot/category/:categoryId'
              element={<Category />}
            />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
