import React, { useMemo, useState } from 'react';
import CouchPotateImg from '../assets/potato.webp';
import FooterQuote from "../components/FooterQuote";
import Navbar from "../components/Navbar";
import AchievementCard from '../components/AchievementCard';

const AchievementsPage = () => {
  const [selectedButton, setSelectedButton] = useState(0);

  const achievements = [ 
    {
      name: "Boba Breather",
      imageUrl: CouchPotateImg,
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Sucker",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    },
    {
      name: "Boba Baller",
      imageUrl: "string",
      completed: true,
      totalHabits: 5,
    }
  ]

  const buttons = ['Tracking', 'All', 'Not tracking?', 'Other filters...'];

  const handleClick = (index) => {
    setSelectedButton(index);
  };

    const achievementCards = useMemo(
      () =>
        achievements.map((element) => {
          return (
            <AchievementCard
              name={element.name}
              image={element.imageUrl}
              // key={presentation.id}
              // title={presentation.name}
              // description={presentation.description}
              // thumbnail={presentation.thumbnail}
              // numSlides={presentation.slides.length}
              // presId={presentation.id}
            />
          );
        }),
      []
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
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {achievementCards}
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