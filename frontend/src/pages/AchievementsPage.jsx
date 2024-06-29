import React, { useState } from 'react';
import FooterQuote from "../components/FooterQuote";
import Navbar from "../components/Navbar";

const AchievementsPage = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const buttons = ['Tracking', 'All', 'Not tracking?', 'Other filters...'];

  const handleClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <Navbar />
        <header className="bg-white shadow">
          <div className="flex flex-col space-y-6 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {"Achievements"} 🏆
            </h1>
            <div className="inline-flex">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`px-4 py-1 mr-4 border border-black font-bold rounded-full ${
                    selectedButton === index ? 'bg-black text-white' : 'bg-white text-black'
                  }`}
                >
                  {button}
                </button>
               ))}
            </div>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face" />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    Erin Lindford
                  </p>
                  <p className="text-slate-500 font-medium">
                    Product Engineer
                  </p>
                </div>
                <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
              </div>
            </div>
          </div>
        </main>
        <FooterQuote
          displayContent={
            "Taking care of your body today is the best investment you can make for a brighter, happier tomorrow. Every healthy choice brings you closer to the vibrant life you deserve."
          }
        />
      </div>
    </>
  );
};

export default AchievementsPage;