import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App