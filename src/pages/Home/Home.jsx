import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or any other necessary cleanup
    localStorage.removeItem('authToken'); // Example
    sessionStorage.removeItem('userSession'); // Example
    navigate('/');
  };

  return (
    <div>
      <Navbar isAdmin={false} handleLogout={handleLogout} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <p>Welcome to the user home page.</p>
      </div>
    </div>
  );
};

export default Home;
