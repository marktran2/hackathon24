import ProgressBar from '../components/ProgressBar';

const AchievementCard = ({
  name,
  image,
  totalHabits
}) => {
  const achievedGoals = 9;
  const isComplete = achievedGoals > totalHabits;

  return (
    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img className="block mx-auto h-24 sm:mx-0 sm:shrink-0" src={image} alt="Achievement Symbol" />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {name}
          </p>
            {isComplete ? 
              <p className="text-slate-500 font-medium">
                {"Complete!"}
              </p> :
              <ProgressBar achievedGoals={achievedGoals} totalGoals={totalHabits} />
            }
        </div>
      </div>
    </div>
  )
}

export default AchievementCard;