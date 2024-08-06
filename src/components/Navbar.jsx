import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAdmin, handleLogout }) => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="public/1000_F_377377117_9YJuLVY6ecXHjGT2QvwbeOedWUIuAWr9.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <a className="text-2xl font-bold">Eco-City</a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {isAdmin && (
            <Link
              to="/about"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              About
            </Link>
          )}
          {isAdmin && (
            <Link
              to="/dashboard"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Dashboard
            </Link>
          )}
          <Link to="/login">
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 transition-colors duration-300"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
