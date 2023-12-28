import './NavbarStyles.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'      // we must import icons name first or else we will get as fabars not defined and also we must add category like here category is fa in 'react-icons' 

const Navbar = () => {

    const [click, setClick] = useState(false);  // false means the button is not clicked yet
    const handleClick = () => setClick(!click); // If click is currently false, the function call setClick(!click) will set click to true.
                                                // If click is currently true, the function call setClick(!click) will set click to false.
    const [color, setColor] = useState ("false");
    const changeColor = () => {

         if(window.scrollY >=1) { // here >=1 means if scroll on y axis  is scroll down by 1px 
            setColor(true);
        } else {
            setColor (false)
        }
    }
    window.addEventListener("scroll", changeColor);  // scroll is a event like click and changcolor is a function we used above
    return (
        // <div className='header'> {/*commented this line and we write it below as we needed to change the navbar color once it is scrolled down}
        <div className={color ? "header header-bg" : "header"}>  {/*here we check if color is header then and header-bg and if not let be header*/}
            <Link to='/'>
                <h2>Portfolio</h2>
            </Link>
            {/* <ul className='nav-menu'> } commented this as need to show and hide navbar option -> refer below code */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
             {/* <ul className='nav-menu'>  */}
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Project'>Project</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : (<FaBars size={20} style={{ color: 'white' }} />)} {/*here we have use if and else that means if hamburger button is clicked then close icon should be visible and vice versa*/}
            </div>
        </div>
    )
}

export default Navbar