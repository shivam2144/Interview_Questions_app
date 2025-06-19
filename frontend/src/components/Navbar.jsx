import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data (e.g., tokens)
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 z-50  shadow-md">
      <div className="flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <UserCircleIcon className="h-8 w-8 text-white" />
          <Link to="/" className="font-bold text-xl hover:text-gray-200">
            Interview App
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:text-gray-300 transition duration-200"
          >
            Register
          </Link>
          

          {/* User Profile (Icon) */}
          <div className="flex items-center gap-2">
            <UserCircleIcon className="h-6 w-6" />
            <span className="hidden md:inline">Profile</span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span className="hidden md:inline">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
