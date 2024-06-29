import React, { useState, useContext } from "react";
import { AppContext } from '../contexts/AppContext';

function HabitBlock({ habitId, displayString, streak, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { updateCompleted } = useContext(AppContext);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
    updateCompleted(habitId )
  };

  return (
    <div
      className={`flex items-center justify-between p-4 my-3 rounded-lg border-2 cursor-pointer select-none ${
        isCompleted ? "bg-gray-400 text-white" : "border-black hover:bg-gray-800 hover:text-white"
      }`}
      onClick={toggleCompleted}
    >
      <h3 className="text-3xl">{displayString}</h3>
      <p className="text-gray-500">
        {streak < 5 ? `${"💩".repeat(streak)}` : `${streak}x💩`}
      </p>
    </div>
  );
}

export default HabitBlock;
