import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import company_logo from './../assets/company_logo.png';
import { Search } from './Search';
import "./../styles/Navbar.css"


export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isResult = location.pathname === '/results';

  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="logo-container cursor-pointer">
        <img src={company_logo} alt="Girman Technologies" className="logo" />
      </div>

      {isResult ? (
        <div className="nav-links"><Search /></div>
      ) : (
        <div className="nav-links">
          <Link to="/" className="">Search</Link>
          <Link to="https://girmantech.com" target="_blank" className="">Website</Link>
          <Link to="https://www.linkedin.com/company/girmantech/" target="_blank" className="">LinkedIn</Link>
          <a href="mailto:girish@girmantech.com" className="">Contact</a>
        </div>
      )}
    </nav>
  );
};
