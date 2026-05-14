import AppRoutes from './Routes'

import Nav from './nav/Nav'
import ScrollToTop from './components/ScrollToTop'
import Analytics from './components/Analytics'
import { getSettings } from './settings'

import './styles/App.scss'

function App() {
  return (
    <div className='App'>
      <Analytics />
      <ScrollToTop />
      <Nav />
      <div className={`main-wrapper ${getSettings()}`}>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
