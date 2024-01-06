import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HeroImg2 from '../components/hero/HeroImg2'
import Form from '../components/form/Form'


const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "CONTACTS." text = "Let's chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact;