import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Home from "../Home/Home"; // Import Home component

const User = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or any other necessary cleanup
    localStorage.removeItem("authToken"); // Example
    sessionStorage.removeItem("userSession"); // Example
    navigate("/");
  };

  return (
    <div>
      <Navbar isAdmin={false} handleLogout={handleLogout} />
      <Home /> {/* Display Home content on User page */}
    </div>
  );
};

export default User;
