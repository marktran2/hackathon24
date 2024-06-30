import { useContext } from 'react';
import ProgressBar from '../components/ProgressBar';
import { AppContext } from '../contexts/AppContext';

const AchievementCard = ({
  name,
  image,
  numCompleted,
  totalHabits,
  openModal
}) => {
  const isComplete = numCompleted >= totalHabits;
  const { achieved, setAchieved } = useContext(AppContext);

  if (!achieved.includes(name)) {
    setAchieved([...achieved, name])   
    localStorage.setItem('achieved', JSON.stringify([...achieved, name]))
  }

  return (
    <div onClick={openModal} className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer">
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
              <ProgressBar achievedGoals={numCompleted} totalGoals={totalHabits} />
            }
        </div>
      </div>
    </div>
  )
}

export default AchievementCard;