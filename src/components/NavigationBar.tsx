import React from 'react';
import { Link } from 'react-router-dom';
import { BiHome } from "react-icons/bi";
import './NavigationBar.css'
import { TbLogout } from "react-icons/tb";

const NavigationBar = () => {
  return ( 
    <div className="nav-bar">
      <Link to="/dashboard" className="nav-bar-icon">{<BiHome />}</Link>
      <Link to="/" className="nav-bar-icon">{<TbLogout />}</Link>
    </div>
  );
};

export default NavigationBar;