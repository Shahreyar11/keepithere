import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">keepItHere</h1>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
