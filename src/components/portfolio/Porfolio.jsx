import React from 'react'
import './Portfolio.css'
import img1 from '../../asset/ImageGetter.jpg'
import img2 from '../../asset/CountDownApp.jpg'
import img3 from '../../asset/Cloned-Whatsapp.jpg'
import data from './data'
import {animations, motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react';



const Porfolio = () => {

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
    <motion.section id='portfolio ' ref={ref} >
      <div className="portfolio_text">
         <h2>Portfolio</h2>
      </div>
      
      <h5>My Recent Projects</h5>
      

      <motion.div className="container portfolio_container" animate={animations}>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                    <img src={image} alt="project1" />
                </div>
                      <h3>{title}</h3>
                      <div className="portfolio_item-cta">
                        <a href={github} className='btn'>GitHub</a>
                        <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                      </div>
              </article>
            )
          })
        } 
      </ motion.div>
    </motion.section>
  )
}

export default Porfolio