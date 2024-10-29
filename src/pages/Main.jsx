import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import bgImage from "../assets/bg_image.png";

export const Main = () => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #FFFFFF 31%, #B1CBFF 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",

        justifyContent: "center",
      }}
    >
      <Navbar />

      <Outlet />
      <div style={{marginBottom: "20px"}}></div>
    </div>
  );
};
