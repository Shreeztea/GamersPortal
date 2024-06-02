// Components/Views/Home/Home.js
import React from 'react';
import useCustomHook from '../../../hooks/useCustomHook';
import { Slider } from '../../Common';
import Tournaments from '../Tournaments/Tournaments';

const Home = () => {
  const hookState = useCustomHook();
  return (
    <div className="bg-gray-950 text-white py-20 space-y-20">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to the Home Page</h1>
        <Slider />
      </div>
      <section className="bg-gray-800 text-white py-20 space-y-20">
        <Tournaments />
      </section>
    </div>
  );
};

export default Home;
