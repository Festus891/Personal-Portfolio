import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";
import Service from "./components/Service/Service";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Porfolio";
import Footer from "./components/footer/Footer";
import HeaderFixed from "./components/HeaderFixed/HeaderFixed";
import Loader from "./components/loader/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <HeaderFixed />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      {/* <Service /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
