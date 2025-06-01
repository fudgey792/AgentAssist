import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerProfile from './pages/CustomerProfile';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer/:id" element={<CustomerProfile />} />
    </Routes>
  );
}

export default App;
