import React, { useState, useContext } from "react";
import { AppContext } from '../contexts/AppContext';
import { CgGym } from "react-icons/cg";
import { MdNoFood } from "react-icons/md";
import { FaSmokingBan } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

function HabitBlock({ habitId, displayString, streak, category, completed}) {
  const [dynamicCompleted, setDynamicCompleted] = useState(completed);
  const { updateCompleted } = useContext(AppContext);

  const toggleCompleted = (status) => {
    setDynamicCompleted(status)
    // console.log(status)
    // console.log(dynamicCompleted)
    updateCompleted(habitId, status)
  };

  return (
    <div
      className={`flex items-center justify-between p-4 my-3 rounded-lg border-2 cursor-pointer select-none ${
        (dynamicCompleted == 'attempting') ? "border-black hover:bg-gray-800 hover:text-white" :
        (dynamicCompleted == 'success') ? "bg-green-400 text-white" : "bg-red-400 text-white"
      }`}
      onClick={() => toggleCompleted('success')}
    >
      <h3 className="text-3xl flex items-center">
        {displayString}
        {category == 'fitness' ? <CgGym className="ml-2" /> : ""}
        {category == 'diet' ? <MdNoFood className="ml-2" /> : ""}
        {category == 'smoking' ? <FaSmokingBan className="ml-2" /> : ""}
        {category == 'screentime' ? <IoPhonePortraitOutline className="ml-2" /> : ""}
      </h3>
      <p className="text-gray-500">
         {streak < 5 ? `${"💩".repeat(streak)}` : `${streak}x💩`}
         <button
          className="ml-3 bg-red-500 text-white px-3 py-1 rounded"
          onClick={(e) => {
            e.stopPropagation()
            toggleCompleted('failed')
          }}
        >
          X
        </button>
      </p>
    </div>
  );
}

export default HabitBlock;
