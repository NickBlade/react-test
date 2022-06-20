import React from 'react'
import ME from '../../assets/me.png'
import SOCIALS from './HeaderSocials'
import { MovingComponent } from 'react-moving-text';

const Header = () => {
  return (
    <header>
      <div className="container header-container">

        <MovingComponent
          type="fadeInFromTop"
          duration="1500ms"
          delay="0s"
          direction="alternate"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h5 class="subtitle">Hello</h5>
          <h1 class="title">I'm Javi Adame</h1>
      </MovingComponent>
      
      <MovingComponent
          type="fadeInFromLeft"
          duration="3500ms"
          delay="0s"
          direction="alternate"
          timing="ease"
          iteration="1"
          fillMode="none">
          <h5 className="undertitle">I help companies to design intuitive digital products and online experiences.</h5>
      </MovingComponent>


          <SOCIALS />



        <div className="me">
                <MovingComponent
                  type="fadeInFromBottom"
                  duration="2500ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <img src={ME} alt='me'/>
            </MovingComponent>
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header