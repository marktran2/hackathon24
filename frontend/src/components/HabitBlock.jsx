import React, { useState, useContext } from "react";
import { AppContext } from '../contexts/AppContext';
import { CgGym } from "react-icons/cg";
import { MdNoFood } from "react-icons/md";

function HabitBlock({ habitId, displayString, streak, category, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { updateCompleted } = useContext(AppContext);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
    updateCompleted(habitId)
    console.log(category)
  };

  return (
    <div
      className={`flex items-center justify-between p-4 my-3 rounded-lg border-2 cursor-pointer select-none ${
        isCompleted ? "bg-gray-400 text-white" : "border-black hover:bg-gray-800 hover:text-white"
      }`}
      onClick={toggleCompleted}
    >
      <h3 className="text-3xl flex items-center">
        {displayString}
        {category == 'diet' ? <CgGym className="ml-2" /> : ""}
        {category == 'fitness' ? <MdNoFood className="ml-2" /> : ""}
      </h3>
      <p className="text-gray-500">
         {streak < 5 ? `${"💩".repeat(streak)}` : `${streak}x💩`}
      </p>
    </div>
  );
}

export default HabitBlock;
