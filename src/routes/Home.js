import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg from '../components/hero/HeroImg'
import Work from '../components/work/Work'

const Home = () => {
  return (
  <div>
    <Navbar/>
    <HeroImg />
    <Work />
    <Footer />
  </div>
  )
}

export default Home;