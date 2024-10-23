import React from 'react'
import Layout from './components/layout/Layout'
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import {Routes , Route} from 'react-router-dom';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
// import Certificate from './components/pages/Certification';
import Hotels from './components/pages/Hotels';
import NavGallery from './components/pages/NavGallery';
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/gallery' element={<NavGallery/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App