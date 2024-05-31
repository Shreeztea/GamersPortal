// Components/Views/Home/Home.js
import React from 'react';
import Header from '../../Layout/Header'; // Adjust the import path of the Header component
import Footer from '../../Layout/Footer'; // Assuming Footer is also in the Layout folder
import { Button } from '../../Common';
import useCustomHook from '../../../hooks/useCustomHook';
import { Slider } from '../../Common';

const Home = () => {
  const hookState = useCustomHook();
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the Home Page</h1>
      <Slider />
    </div>
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to WASD Arena</h1>
          <p className="text-lg mb-8">Your ultimate destination for competitive gaming tournaments.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">Explore Tournaments</button>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
          <p>{hookState}</p>
          <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
        </div>
      </section>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
