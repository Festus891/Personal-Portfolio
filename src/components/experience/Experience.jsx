import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';

const Experience = () => {

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
      animations.start({x: '100vw'})
    }
      console.log("use effect hook, inView=" ,inView)
  }, [inView])

  return (
    <motion.section id='skills' ref={ref}>
      <div className="skills_text">
        <h2>My Skills </h2>
      </div>
      <h5>My Stacks</h5>
      

      <motion.div className="container experience_container" animate={animations}>
        <motion.div className="experience_frontend">
            <h3>Frontend Development </h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                      <h4>HTML</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill  className='experience_details_icon'/>
                    <div>
                        <h4>CSS</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                      <h4>JAVACRIPT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon'/>
                    <div>
                      <h4>REACT</h4>
                      <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Tailwind</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Bootstrap</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Github</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Version Control/Git</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                
            </div>
        </motion.div>
    {/* END OF FRONTEND  */}
        <motion.div className="experience_backend">
        <h3>Additional Skills</h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Figma</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Interactive Design</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Responsive Design</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Graphics designing</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience_details_icon' />
                    <div>
                        <h4>Corel Draw</h4>
                        <small className="text-light">Experienced</small>
                    </div>
                </article>
            </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Experience