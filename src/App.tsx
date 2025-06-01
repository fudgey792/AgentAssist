import './App.css';
import CustomerCard from './components/CustomerCard';
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from './graphql/queries';
import type { Customer } from './types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerProfile from './pages/CustomerProfile';

function App() {
  // Run the query using Apollo's useQuery hook
  const { data, loading, error } = useQuery(GET_CUSTOMERS);

  // Handle loading state
  if (loading) return <p>Loading customers...</p>;

  // Handle error state
  if (error) return <p>Error fetching customers: {error.message}</p>;

  // Render the UI once data is available
  return (
    <div className="App">
      <h1>Agent Assist Dashboard</h1>
      {data.customers.map((customer: Customer) => (
        <CustomerCard key={customer.id} customer={customer} />
      ))}
    </div>
  );
}

export default App;
