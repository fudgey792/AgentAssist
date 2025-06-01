import React from "react";
import '../App.css';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/queries';
import type { Customer } from '../types';
import CustomerCard from "../components/CustomerCard";

function Dashboard() {

  const { data, loading, error } = useQuery(GET_CUSTOMERS);

  if (loading) return <p>Loading customers...</p>;

  if (error) return <p>Error fetching customers: {error.message}</p>;

  return (
    <div className="App">
      <h1>Agent Assist Dashboard</h1>
      {data.customers.map((customer: Customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
}

export default Dashboard;