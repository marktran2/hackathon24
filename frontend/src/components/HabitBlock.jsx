function HabitBlock({ habitId, displayString, streak }) {
  return (
    <>
      <div className="flex items-center justify-between p-4 my-3 rounded-lg border-2 cursor-pointer select-none border-black hover:bg-gray-800 hover:text-white">
        <h3 className="text-3xl">{displayString}</h3>
        <p className="text-gray-500">
          {streak < 5 ? `${"💩".repeat(streak)}` : `${streak}x💩`}
        </p>
      </div>
    </>
  );
}

export default HabitBlock;
