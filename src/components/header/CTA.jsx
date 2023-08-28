import React from 'react' 
import CV from '../../asset/Festus_cv.pdf';



const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Cv</a>
        <a href="#contact" className='btn btn-primary'>Hire me</a>
    </div>
  )
}

export default CTA