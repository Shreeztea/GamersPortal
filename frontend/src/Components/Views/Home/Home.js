// Components/Views/Home/Home.js
import React from 'react';
import Header from '../../Layout/Header'; // Adjust the import path of the Header component
import Footer from '../../Layout/Footer'; // Assuming Footer is also in the Layout folder

const Home = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to WASD Arena</h1>
          <p className="text-lg mb-8">Your ultimate destination for competitive gaming tournaments.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Explore Tournaments</button>
        </div>
      </section>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
