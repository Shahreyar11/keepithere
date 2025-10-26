import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-emerald-600">keepItHere</h1>

        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-emerald-600 font-medium transition-colors duration-150"
        >
          Log In
        </a>

        <a
          href="#"
          className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-all duration-150 shadow-sm"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
