import React from "react";
import Header from "./components/header/Header";
// import Nav from './components/nav/Nav'
// import Testimonial from './components/testimonial/Testimonial'
import Experience from "./components/experience/Experience";
import Service from "./components/Service/Service";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Porfolio";
import Footer from "./components/footer/Footer";
import HeaderFixed from "./components/HeaderFixed/HeaderFixed";

const App = () => {
  return (
    <>
      <HeaderFixed />
      <Header />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Nav /> */}
    </>
  );
};

export default App;
