import React, { useContext, useMemo, useState } from 'react';
import CouchPotateImg from '../assets/potato.webp';
import Navbar from "../components/Navbar";
import AchievementCard from '../components/AchievementCard';
import { AppContext } from '../contexts/AppContext';

const AchievementsPage = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const { userCategories } = useContext(AppContext);

  //////////////////////////////////////
  // Temporary variables, TODO: get rid off later with local storage
  const achievements = {
    "diet": [
      {
        name: "Boba Breather",
        imageUrl: CouchPotateImg,
        totalHabits: 10,
      },
      {
        name: "Boba Sucker",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      },
      {
        name: "Boba Baller",
        imageUrl: "string",
        totalHabits: 5,
      }
    ],

    "fitness": [
      {
        name: "Old Year, Old Me!",
        imageUrl: "string",
        totalHabits: 25
      }
    ]
  }

  //////////////////////////////////////

  const buttons = ['Tracking', 'All'];

  const handleClick = (index) => {
    setSelectedButton(index);
  };

    const achievementCards = useMemo(
      () => {
        const displayCategories = (buttons[selectedButton] === 'Tracking') 
        ? Object.keys(achievements).filter(category => userCategories.includes(category))
        : Object.keys(achievements);

        return displayCategories.map(category => (
          <div key={category}>
            <h2 className="text-xl mx-auto max-w-7xl font-bold my-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {achievements[category].map((element, index) => (
                <AchievementCard
                  key={`${element.name}-${index}`}
                  name={element.name}
                  image={element.imageUrl}
                  totalHabits={element.totalHabits}
                />
              ))}
            </div>
          </div>
        ))
      },  
      [selectedButton]
    );

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
          {achievementCards}
        </main>
      </div>
    </>
  );
};

export default AchievementsPage;