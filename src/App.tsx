import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerProfile from './pages/CustomerProfile';
import Dashboard from './pages/Dashboard';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer/:id" element={<CustomerProfile />} />
      </Routes>
    </>
  );
}

export default App;
