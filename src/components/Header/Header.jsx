import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
        <div className="header">
            {/* Mottos */}
            <img src={Logo} alt="" className='logo'/>

            {/* Nav-links */}
            <ul className='h-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}

export default Header