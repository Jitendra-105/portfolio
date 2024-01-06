import './AboutContentStyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import React1 from '../../assets/react.png'
import React2 from '../../assets/react2.webp'

const AboutContent = () => {
  return (
    <div className='About'>
        <div className='left'>
            <h1>Who Am I ?</h1>
            <p>I'm a React Fron-end Developer. I create responsive secure websites for my clients.</p>
            <Link to = '/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React1} className='img' alt = "react-one img" />
                </div>
                <div className='img-stack bottom'>
                    <img src={React2} className='img' alt = "react-one img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent