import React, { useContext, useMemo, useState } from 'react';
import Navbar from "../components/Navbar";
import AchievementModal from '../components/Modals/AchievementModal';
import AchievementCard from '../components/AchievementCard';
import { AppContext } from '../contexts/AppContext';
import achievementsData from '../utils/achievements';

const AchievementsPage = () => {
  const [selectedButton, setSelectedButton] = useState(0);
  const { userCategories } = useContext(AppContext);

  const buttons = ['Tracking', 'All'];

  const handleClick = (index) => {
    setSelectedButton(index);
  };

    const achievementCards = useMemo(
      () => {
        const displayCategories = (buttons[selectedButton] === 'Tracking') 
        ? Object.keys(achievementsData).filter(category => Object.keys(userCategories).includes(category))
        : Object.keys(achievementsData);

        return displayCategories.map(category => (
          <div key={category}>
            <h2 className="text-xl mx-auto max-w-7xl font-bold my-4">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {achievementsData[category].map((element, index) => (
                <AchievementCardWithModal
                  key={`${element.name}-${index}`}
                  name={element.name}
                  image={element.imageUrl}
                  totalHabits={element.totalHabits}
                  quote={element.quote}
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
                    selectedButton === index ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
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

const AchievementCardWithModal = ({ name, image, totalHabits, quote }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <AchievementCard
        name={name}
        image={image}
        totalHabits={totalHabits}
        openModal={() => setShowModal(true)}
      />
      <AchievementModal
        name={name}
        image={image}
        quote={quote}
        open={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default AchievementsPage;