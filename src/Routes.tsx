import {
  Routes,
  Route,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
  Navigate
} from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
const Home = lazy(() => import('./pages/WasteNot'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Location = lazy(() => import('./pages/Location'))
const RedirectToLocation = lazy(() => import('./pages/RedirectToLocation'))
const LocationCategory = lazy(() => import('./pages/LocationCategory'))
const Category = lazy(() => import('./pages/Category'))
const Neighbours = lazy(() => import('./pages/Neighbours'))
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

    document.documentElement.lang = langToUse
    i18n.changeLanguage(langToUse) // synchronous with preloaded translations
  }, [lang, i18n, navigate, location])

  return <Outlet />
}

// Redirects: /:locationId -> /en/wastenot/:locationId
const locationShortcutRedirects = locations.map((location) => (
  <Route key={location.id} path={location.id} element={<Navigate to={`/en/wastenot/${location.id}`} replace />} />
))

// QR code URL corrections:
// /wastenot/frederickmesser/panel -> /en/wastenot/sirfrederickmesser/panel
// /wastenot/northumberland -> /en/wastenot/northumberlandgrove
const qrcodeCorrections = [
  <Route key='frederickmesser-panel' path='/wastenot/frederickmesser/panel' element={<Navigate to='/en/wastenot/sirfrederickmesser/panel' replace />} />,
  <Route key='northumberland' path='/northumberland' element={<Navigate to='/en/wastenot/northumberlandgrove' replace />} />
]

const AppRoutes = () => {

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route
          path='/leaflet'
          element={<Navigate to='/en/wastenot/broadwaterfarm' replace />}
        />

        <Route path='/tag' element={<Navigate to='/en/wastenot' replace />} />

        {qrcodeCorrections}
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
    </Suspense>
  )
}

export default AppRoutes