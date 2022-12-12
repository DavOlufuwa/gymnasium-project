import React from 'react'
import "./Footer.css"
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Github} alt="" />
        </div>
        <div className="logo-footer">
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Footer