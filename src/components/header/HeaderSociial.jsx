import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'


 
const HeaderSociial = () => {
  return (
    <>
        <div className='header_socials_left '>
          <a href="Contact" target='_blank'> <BsLinkedin /> </a>
          <a href="#Contact" target='_blank'><FaGithub /></a>
          <a href="#Contact" target='_blank'><BsTwitter/></a>
          <a href="#contact" target='_blank' ><IoLogoWhatsapp /></a>
          <a href="#Contact" target='_blank'><MdEmail /></a>
      </div>
        <div className='header_socials_right '>
          <a href="Contact" target='_blank'> <BsLinkedin /> </a>
          <a href="#Contact" target='_blank'><FaGithub /></a>
          <a href="#Contact" target='_blank'><BsTwitter/></a>
          <a href="#contact" target='_blank' ><IoLogoWhatsapp /></a>
          <a href="#Contact" target='_blank'><MdEmail /></a>
      </div>
    </>
   
  )
}

export default HeaderSociial