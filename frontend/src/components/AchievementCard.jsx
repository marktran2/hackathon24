import ProgressBar from '../components/ProgressBar';

const AchievementCard = ({
  name,
  image,
  numCompleted,
  totalHabits,
  openModal
}) => {
  const isComplete = numCompleted >= totalHabits;

  return (
    <div
      onClick={openModal}
      className="w-80 h-70 mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 transition ease-in-out delay-150 hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex justify-center items-center w-24 h-24 mt-4">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Achievement Symbol"
        />
      </div>
      <div className="text-center space-y-2 px-4">
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
