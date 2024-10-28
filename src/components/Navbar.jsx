import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import company_logo from './../assets/company_logo.png';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-around bg-#FFFFFF p-4 shadow-md">
      <div onClick={() => navigate("/")} className="cursor-pointer">
        <img src={company_logo} alt="Girman Technologies" className="h-10 w-auto" />
      </div>

      <div className="flex space-x-4 text-black">
        <Link to="/" className="hover:text-gray-300">Search</Link>
        <Link to="https://girmantech.com" target="_blank" className="hover:text-gray-300">Website</Link>
        <Link to="https://www.linkedin.com/company/girmantech/" target="_blank" className="hover:text-gray-300">LinkedIn</Link>
        <a href="mailto:girish@girmantech.com" className="hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};
