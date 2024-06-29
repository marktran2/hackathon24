const AchievementCard = ({
  name,
  image
}) => {
  return (
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto h-24 sm:mx-0 sm:shrink-0" src={image} alt="Achievement Symbol" />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {name}
          </p>
          <p class="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard;