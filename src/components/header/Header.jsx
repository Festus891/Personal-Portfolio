import React from 'react'
import './header.css'
import CTA from './CTA'
import myself from '../../asset/myself.png'
import HeaderSociial from './HeaderSociial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>Aderibigbe Festus</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>

        <div className="me">
          <img src={myself} alt="profile" />
        </div>

        <a href="#Contact" className='scroll_down'>Scroll Down</a>
        <HeaderSociial />
      </div>
    </header>
  )
}

export default Header