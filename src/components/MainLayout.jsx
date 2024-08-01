// MainLayout.js
import React, { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import HeaderFixed from "./HeaderFixed/HeaderFixed";
import Footer from "./footer/Footer";
import ScrollTop from "./ScrollTop";
import Loader from "./loader/Loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
