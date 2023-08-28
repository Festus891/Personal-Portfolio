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
          <a href="https://www.linkedin.com/in/aderibigbe-festus/" target='_blank'> <BsLinkedin /> </a>
          <a href="https://github.com/Festus891" target='_blank'><FaGithub /></a>
          <a href="https://twitter.com/AdeHimself12" target='_blank'><BsTwitter/></a>
          <a href="https://wa.me/+2348143430827" target='_blank' ><IoLogoWhatsapp /></a>
          <a href="Mailto:festus891@yahoo.com" target='_blank'><MdEmail /></a>
      </div>
        <div className='header_socials_right '>
           <a href="https://www.linkedin.com/in/aderibigbe-festus/" target='_blank'> <BsLinkedin /> </a>
           <a href="https://github.com/Festus891" target='_blank'><FaGithub /></a>
            <a href="https://twitter.com/AdeHimself12" target='_blank'><BsTwitter/></a>
            <a href="https://api.whatsapp.com/send?phone+23408143430827" target='_blank' ><IoLogoWhatsapp /></a>
            <a href="Mailto:festus891@yahoo.com" target='_blank'><MdEmail /></a>
      </div>
    </>
   
  )
}

export default HeaderSociial