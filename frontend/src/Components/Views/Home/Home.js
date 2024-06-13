// Components/Views/Home/Home.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import useCustomHook from '../../../hooks/useCustomHook';
import { Slider } from '../../Common';
import Tournaments from '../Tournaments/Tournaments';
import BannerSlider from '../../Common/Slider/BannerSlider';

const Home = () => {
  const hookState = useCustomHook();
  return (
    <div className="bg-gray-950 text-white py-20 space-y-20">
      <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to WASD Arena</h1>
          <p className="text-lg mb-8">Your ultimate destination for competitive gaming tournaments.</p>
          {/* <Slider /> */}
          <BannerSlider/>
      </div>
        <Tournaments id="tournyone" title="Upcoming Tournament"/>
        <Tournaments id="tournytwo" title="Ongoing Tournament"/>
        <Tournaments id="tournythree" title="Past Tournament"/>

    </div>
  );
};

export default Home;
