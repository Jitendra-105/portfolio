import React from 'react'
import './HeroImgStyles.css'
import introImg from '../../assets/introImg.jpg' // here introImg name was given by us and we can name anything and later this name will be provided in src using curly backet as done in line no.9
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className = 'intro-img' src={introImg} alt='introImg'></img> {/*in reactjs we always should use alt and we can name it anything */}
        </div>
        <div className='content'>
            <p>HI, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to  = '/Project' className= 'btn'>Projects</Link>
                <Link to  = '/Contact' className= 'btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg

