import { Routes, Route } from 'react-router-dom'
import Nav from './nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'

import './styles/App.scss'

function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='main-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wastenot' element={<Home />} />
          <Route path='/wastenot/:locationId' element={<Location />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
