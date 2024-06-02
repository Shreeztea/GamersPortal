// src/components/Views/Tournaments/Tournaments.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tournaments = () => {
  const [activeTab, setActiveTab] = useState('ongoing');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const renderContent = (content) => {
    return (
      <div className="flex flex-wrap justify-between h-100 overflow-hidden">
        <Slider {...settings} className="w-full">
          {content.map((item, index) => (
            <div key={index} className="w-full p-2">
              <div className="bg-gray-700 p-3 rounded aspect-w-3 aspect-h-4">
                <div className="aspect-w-1 aspect-h-1 mb-1">
                  <img src={item.image} alt={item.title} className="object-cover w-full h-full rounded"/>
                </div>
                <div className="text-center">{item.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  const ongoingContent = [
    { title: 'Ongoing Tournament 1', image: 'https://via.placeholder.com/150' },
    { title: 'Ongoing Tournament 2', image: 'https://via.placeholder.com/150' },
    { title: 'Ongoing Tournament 3', image: 'https://via.placeholder.com/150' },
    { title: 'Ongoing Tournament 4', image: 'https://via.placeholder.com/150' },
  ];

  const upcomingContent = [
    { title: 'Upcoming Tournament 1', image: 'https://via.placeholder.com/150' },
    { title: 'Upcoming Tournament 2', image: 'https://via.placeholder.com/150' },
    { title: 'Upcoming Tournament 3', image: 'https://via.placeholder.com/150' },
  ];

  const pastContent = [
    { title: 'Past Tournament 1', image: 'https://via.placeholder.com/150' },
    { title: 'Past Tournament 2', image: 'https://via.placeholder.com/150' },
    { title: 'Past Tournament 3', image: 'https://via.placeholder.com/150' },
  ];

  const allContent = [
    { title: 'Most Recent Tournament 1', image: 'https://via.placeholder.com/100' },
    { title: 'Most Recent Tournament 2', image: 'https://via.placeholder.com/100' },
    { title: 'Most Recent Tournament 3', image: 'https://via.placeholder.com/100' },
    { title: 'Most Recent Tournament 4', image: 'https://via.placeholder.com/100' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Tournaments</h1>
      <div className="border-b-2 border-gray-700 mb-4">
        <div className="flex">
          <button
            className={`px-4 py-2 mx-2 rounded-t ${activeTab === 'ongoing' ? 'bg-gray-800 text-white border-x-2 border-t-2 border-gray-700' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => setActiveTab('ongoing')}
          >
            Ongoing
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-t ${activeTab === 'upcoming' ? 'bg-gray-800 text-white border-x-2 border-t-2 border-gray-700' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-t ${activeTab === 'past' ? 'bg-gray-800 text-white border-x-2 border-t-2 border-gray-700' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => setActiveTab('past')}
          >
            Past
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-t ${activeTab === 'all' ? 'bg-gray-800 text-white border-x-2 border-t-2 border-gray-700' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => setActiveTab('all')}
          >
            All
          </button>
        </div>
      </div>
      <div className="border-2 border-gray-700 bg-gray-800 text-white p-4 rounded-b-lg">
        {activeTab === 'ongoing' && renderContent(ongoingContent)}
        {activeTab === 'upcoming' && renderContent(upcomingContent)}
        {activeTab === 'past' && renderContent(pastContent)}
        {activeTab === 'all' && renderContent(allContent)}
      </div>
    </div>
  );
};

export default Tournaments;
