import React from 'react'
import './header.css'
import CTA from './CTA'
import myself from '../../asset/myself.png'
import HeaderSociial from './HeaderSociial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello, I'm</h2>
        <h1>Aderibigbe Festus</h1>
        <h5 className="text-light">I'm a <span>FRONTEND DEVELOPER</span> </h5>
        <CTA/>

        <div className="me">
          <img src={myself} alt="profile" />
        </div> 
        
        <HeaderSociial />
        <HeaderSociial />
      </div>
    </header>
  )
}

export default Header