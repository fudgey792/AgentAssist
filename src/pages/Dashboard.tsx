import React from "react";
import './Dashboard.css';
/*import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import type { Customer } from '../types';
import CustomerCard from "../components/CustomerCard";
import { useState } from "react";*/

const Dashboard = () => {

  /*const { data, loading, error } = useQuery(GET_CUSTOMERS);
  const [displayed, setDisplayed] = useState(false);

  const handleClick = () => {
    setDisplayed(!displayed);
  };

  if (loading) return <p>Loading customers...</p>;

  if (error) return <p>Error fetching customers: {error.message}</p>;

  return (
    <div className="App">
      <h1>Agent Assist Dashboard</h1>
      <button onClick={handleClick}>{displayed ? "Hide" : "My Customers" }</button>
      {displayed ? data.customers.map((customer: Customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      )) : null}
    </div>
  );*/
  
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Agent Assist Dashboard</h2>
        <nav>
          <ul>
            <li className="active"><span>🏠</span> Dashboard</li>
              <li><span>👤</span> Customers</li>
              <li><span>📁</span> Support Cases</li>
              <li><span>📝</span> Activity Logs</li>
              <li><span>⏰</span> Recent Activity</li>
              <li><span>⚙️</span> Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="main-content">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="top-bar-header">Welcome Back!</div>
          <input type="text" className="search-input" placeholder="Search" />
          <div className="top-bar-icons">
            <span>🔔</span>
            <span>👤</span>
          </div>
        </header>
        {/* Main Grid */}
        <section className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-header">Customers</div>
            <div className="dashboard-card-body">{/* Render customers here */}</div>
            <div className="dashboard-card-footer"><u>View All</u></div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">Support cases</div>
            <div className="dashboard-card-body"> {/* Support cases here */}</div>
            <div className="dashboard-card-footer"><u>View All</u></div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">Activity logs</div>
            <div className="dashboard-card-body"> {/* Activity logs here */}</div>
            <div className="dashboard-card-footer"><u>View All</u></div>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-card-header">Recent Activity</div>
            <div className="dashboard-card-body"> {/* Recent activity here */}</div>
            <div className="dashboard-card-footer"><u>View All</u></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;