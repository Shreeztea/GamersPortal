// src/App.js

import React from 'react';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Home from './Components/Views/Home/Home';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
