// Components/Layout/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="WASD Arena Logo" className="h-8 mr-4" />
        </div>
        {/* Search Bar */}
        <div className="flex mx-4 justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-20% py-2 px-4 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          {/* Shop Link */}
          <a href="https://efusionnepal.com/" target="_blank" rel="noopener noreferrer" className="mr-4 text-gray-300 hover:text-white">Shop</a>
          {/* Login/Signup */}
        <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-white rounded">
          Login/Signup
        </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
