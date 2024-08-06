import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home/Home';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    <Home/>
    navigate('/');
  };

  return (
    <div>
      <Navbar isAdmin={true} handleLogout={handleLogout} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p>Welcome to the admin panel.</p>
      </div>
    </div>
  );
};

export default Admin;
