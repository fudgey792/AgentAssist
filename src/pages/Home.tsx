import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <h2>Agent Assist Dashboard</h2>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
}

export default Home;