import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {MdHomeRepairService} from 'react-icons/md'
import {MdPermContactCalendar} from 'react-icons/md'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import { useState } from 'react'



const Nav = () => { 

  const[active, setActive] = useState('#')
  return (
    <nav>
        <a href="#" onClick={()=>setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=>setActive('#skills')} className={active === '#skills' ? 'active' : ''}><BiBook/></a>
        <a href="#service" onClick={()=>setActive('#service')} className={active === '#service' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
        <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}>< MdHomeRepairService/></a>
        <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact' ? 'active' : ''}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav