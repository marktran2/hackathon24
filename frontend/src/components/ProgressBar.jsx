import React from 'react';

const ProgressBar = ({ achievedGoals, totalGoals }) => {
  // Calculate the percentage of goals achieved
  const progress = (achievedGoals / totalGoals) * 100;

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div className="text-right">
          <span className="text-xs font-semibold inline-block">
            {achievedGoals}/{totalGoals}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;