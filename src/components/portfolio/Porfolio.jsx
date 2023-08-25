import React from 'react'
import './Portfolio.css'
import img1 from '../../asset/ImageGetter.jpg'
import img2 from '../../asset/CountDownApp.jpg'
import img3 from '../../asset/Cloned-Whatsapp.jpg'
import data from './data'



const Porfolio = () => {

  return (
    <section id='portfolio ' >
      <div className="portfolio_text">
         <h2>Portfolio</h2>
      </div>
      
      <h5>My Recent Projects</h5>
      

      <div className="container portfolio_container">
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
      </div>
    </section>
  )
}

export default Porfolio