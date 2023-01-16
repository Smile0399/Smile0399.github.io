import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import 'react-tooltip/dist/react-tooltip.css'

import Header from './components/Header'
import Home from './pages/Home'
import Active from './pages/Active'
import Sold from './pages/Sold'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Update from './pages/Update'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Router>
        <div id='Top'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Active' element={<Active />}></Route>
            <Route path='/Sold' element={<Sold />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Testimonials' element={<Testimonials />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Update' element={<Update />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
