import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import bgImage from "../assets/bg_image.png";

export const Main = () => {
  return (
    <div
      className="h-screen bg-slate-900 bg-cover bg-center overflow-hidden bg-gradient-to-b from-white to-[#B1CBFF] opacity-75"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};
