import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <Link to="/" className="nav-bar-home"><span className="nav-bar-home-icon">{<IoHomeOutline />}</span></Link>
  );
};

export default NavigationBar;