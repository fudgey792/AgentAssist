import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerProfile from './pages/CustomerProfile';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer/:id" element={<CustomerProfile />} />
      </Routes>
    </>
  );
}

export default App;
