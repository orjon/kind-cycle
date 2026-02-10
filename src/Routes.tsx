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
import Home from './pages/WasteNot'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import RedirectToLocation from './pages/RedirectToLocation'
import LocationCategory from './pages/LocationCategory'
import Category from './pages/Category'
import Neighbours from './pages/Neighbours'
import { supportedLangs } from './constants'
import { locations } from './content'

import './styles/App.scss'

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

const locationShortcutRedirects = locations.map((location) => (
  <Route key={location.id} path={location.id} element={<Navigate to={`/wastenot/${location.id}`} replace />} />
))

const AppRoutes = () => {

  return (
    <Routes>
      <Route
        path='/leaflet'
        element={<Navigate to='/en/wastenot/broadwaterfarm' replace />}
      />
      <Route path='/tag' element={<Navigate to='/en/wastenot' replace />} />

      {locationShortcutRedirects}

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
  )
}

export default AppRoutes
