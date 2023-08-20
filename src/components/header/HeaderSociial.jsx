import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'


 
const HeaderSociial = () => {
  return (
    <div className='header_socials'>
        <a href="Contact" target='_blank'> <BsLinkedin /> </a>
        <a href="#Contact" target='_blank'><FaGithub /></a>
        <a href="#Contact" target='_blank'><BsTwitter/></a>
        <a href="#contact" target='_blank' ><IoLogoWhatsapp /></a>
    </div>
  )
}

export default HeaderSociial