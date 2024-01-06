import './WorkCard.css'
import React from 'react'
// import introImage from '../assets/introImg.jpg'
// import { NavLink } from 'react-router-dom'

import WorkCard from './WorkCard';
import WorkData from './WorkData';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Project</h1>
            <div className='project-container'>
                {WorkData.map((value, index) => {
                    return (
                        <WorkCard 
                        
                        key={index}
                        imgsrc = {value.imgsrc}
                        title   = {value.title}
                        text = {value.text}
                        view = {value.view}
                        
                        />
                    )
                })}
            </div>
        </div>

    )
}

export default Work;