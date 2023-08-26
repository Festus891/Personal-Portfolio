import React, { useEffect } from 'react'
import './about.css'
import profile from '../../asset/profile.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {animations, motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'



const About = () => {
  const {ref, inView} = useInView()
  const animations =useAnimation();

  useEffect(()=>{
    if(inView){
      animations.start({
        x: 0,
        transition: {
          type: 'spring', duration: 4, bounce:0.4
        }
      })
    }

    if(!inView){
      animations.start({x: "-100vw"})
    }
      console.log("use effect hook, inView=" ,inView)
  }, [inView])
  return (
    <motion.section id='about' ref={ref}>
      <div className="text">
        <h2>About Me</h2>
      </div>

      <h5>Get to know me</h5>
      

      <motion.div className="container about_container" animate={animations}>
        <div className="about_me">
              <div className="about_me_image">
              <img src={profile} alt="profile" />
              </div>
        </div>

        <motion.div className="about_content" >
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
        </motion.div>
      </motion.div>



    </motion.section>
  )
}

export default About