import { Routes, Route } from 'react-router-dom'
import Nav from './nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import LocationCategory from './pages/LocationCategory'
import Category from './pages/Category'
import { getSettings } from './settings'

import './styles/App.scss'

function App() {
  return (
    <div className='App'>
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
