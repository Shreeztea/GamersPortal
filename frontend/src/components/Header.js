import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">GamersPortal</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="text-white hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
