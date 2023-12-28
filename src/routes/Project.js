import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div> 
      <Navbar />
      <HeroImg2 heading = "PROJECTS." text = "I'm friendly front-end developer"/> {/*added two varibles and store data so that using props we can directly pass in project file in h1 and p tag */}
      <Work />
      <PricingCard />
      <Footer />
     
    </div>
  )
}

export default Project;