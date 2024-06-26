// MainLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import HeaderFixed from "./HeaderFixed/HeaderFixed";
import Footer from "./footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <HeaderFixed />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
