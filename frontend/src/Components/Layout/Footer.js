import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">WASD Arena</h3>
          <p className="text-sm">Your ultimate destination for competitive gaming tournaments.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm hover:text-gray-400">About Us</a>
          <a href="#" className="text-sm hover:text-gray-400">Tournaments</a>
          <a href="#" className="text-sm hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
