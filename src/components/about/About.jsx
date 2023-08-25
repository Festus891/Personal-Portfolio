import React from 'react'
import './about.css'
import profile from '../../asset/profile.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <div className="text">
        <h2>About Me</h2>
      </div>

      <h5>Get to know me</h5>
      

      <div className="container about_container">
        <div className="about_me">
              <div className="about_me_image">
              <img src={profile} alt="profile" />
              </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
              <article className='about_card'>
                  <FaAward className='about_icon' />
                  <h5>Experience</h5>
                  <small>2+ years working</small>
                </article>
                <article className='about_card'>
                  <FiUsers className='about_icon' />
                  <h5>Clients</h5>
                  <small>200+ worldwide</small>
                </article>
                <article className='about_card'>
                  <VscFolderLibrary className='about_icon'/>
                  <h5>Project</h5>
                  <small>80+ project</small>
                </article>
          </div> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consectetur assumenda eum tempore inventore ab, pariatur sapiente. Eaque facere voluptas tenetur, doloribus assumenda provident voluptatibus ipsam magnam, sed beatae a?</p>

          <a href="#contact" className='btn btn-primary'>Hire Me</a>
        </div>
      </div>



    </section>
  )
}

export default About
