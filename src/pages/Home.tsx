import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import { MdSupportAgent } from "react-icons/md";

const Home = () => {
    
    return (
        <div className="home-container">
            <div className="home-icon"><MdSupportAgent /></div>
            <h2>Agent Assist Dashboard</h2>
            <p>A lightweight dashboard designed to simulate what a call centre agent might use</p>
            <Link to="/dashboard" className="home-button">Sign In</Link>
        </div>
    );
}

export default Home;