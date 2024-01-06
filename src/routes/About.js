import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero/HeroImg2'
import AboutContent from '../components/about/AboutContent'


const About = () => {
  return (
    <div>
     <Navbar />
     <HeroImg2 heading = "ABOUT US" text = "Some of my best works"/>
     <AboutContent />
      <Footer />
    </div>
  )
}

export default About;