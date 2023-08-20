import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Testimonial from './components/testimonial/Testimonial'
import Experience from './components/experience/Experience'
import Service from './components/Service/Service'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Portfolio from './components/portfolio/Porfolio'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App;