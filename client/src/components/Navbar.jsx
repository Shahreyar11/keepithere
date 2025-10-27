import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          keepItHere
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/login"
          className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
        >
          Log In
        </Link>

        <Link
          to="/signup"
          className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all duration-150 shadow-sm"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;