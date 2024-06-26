// MainLayout.js
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderFixed from "./HeaderFixed/HeaderFixed";
import Footer from "./footer/Footer";
import ScrollTop from "./ScrollTop";
import Loader from "./loader/Loader";

const MainLayout = () => {
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
    <div>
      <ScrollTop />
      <HeaderFixed />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
