import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import SOCIALS from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Javi Adame</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        <SOCIALS />

        <div className="me">
          <img src={ME} alt='me'/>
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header