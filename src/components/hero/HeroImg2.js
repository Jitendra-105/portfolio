import React, { Component } from 'react'
// import React from 'react' ---- this will be used when we are passing the values using props instead of class method
import './HeroImg2.css'

// const HeroImg2 = () => { commented this line as we need to pass the value store in our variable so we need to use  class method }
class HeroImg2 extends Component {
    render() {

        return (
          <div className='hero-img'>
              <div className='heading'>
                  <h1>{this.props.heading}</h1>
                  <p>{this.props.text}</p>
              </div>
          </div>
        )
    }
}

// const HeroImg2 = (props) => { 
//     return (
//                   <div className='hero-img'>
//                       <div className='heading'>
//                           <h1>{props.heading}</h1>
//                           <p>{props.text}</p>
//                       </div>
//                   </div>
//                 )
// }



export default HeroImg2;