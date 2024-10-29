import React from "react";
import logo from "./../assets/Group 1.png";
import logo_name from "./../assets/Group 141.png";
import { Search } from "../components/Search";

import { Input } from "./../components/ui/input";
import "./../styles/Home.css";
export const Home = () => {
  return (
    <div style={{marginTop: "200px"}} className="home-container">
      <div className="flex-column">
        <div className="logo-container">
          <img src={logo} alt="logo" className="home-logo" />
          <img src={logo_name} alt="logo name" className="home-logo-name" />
        </div>
        <Search onSearch={() => {}} />
    
      </div>
    </div>
  );
};
