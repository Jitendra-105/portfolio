import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero/HeroImg2'
import PricingCard from '../components/pricing/PricingCard'
import Work from '../components/work/Work'


const Project = () => {
  return (
    <div> 
      <Navbar />
      <HeroImg2 heading = "PROJECTS." text = "I'm friendly front-end developer"/>
      <Work />
      <PricingCard />
      <Footer />
     
    </div>
  )
}

export default Project;