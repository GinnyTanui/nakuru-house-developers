import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import About from './components/AboutUs'
import FeaturedApartments from './components/FeaturedApartments'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FeaturedApartments />
    </div>
  )
}

export default App