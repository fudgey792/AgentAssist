import React from 'react';
import CustomerCard from './components/CustomerCard';
import type { Customer } from './types';

const mockCustomer: Customer = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  createdAt: '2024-05-01',
};

function App() {
  return (
    <div className="App">
      <h1>Agent Assist Dashboard</h1>
      <CustomerCard customer={mockCustomer} />
    </div>
  );
}

export default App;