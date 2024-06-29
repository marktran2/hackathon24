// import FooterQuote from "../components/FooterQuote";
import HabitList from "../components/HabitList";
import Navbar from "../components/Navbar";
import { greetingTime } from "../utils/timeHelpers";
import WavingAnimal from "../assets/Subject2.png";
import WavingRabbit from "../assets/Subject3.png";

const Dashboard = () => {
  const habits = [
    {
      id: 1,
      displayString: "Exercise",
      streak: 5,
    },
    {
      id: 2,
      displayString: "Meditate",
      streak: 3,
    },
    {
      id: 3,
      displayString: "Read",
      streak: 2,
    },
    {
      id: 4,
      displayString: "Drink Water",
      streak: 1,
    },
    {
      id: 5,
      displayString: "Sleep",
      streak: 0,
    },
    {
      id: 6,
      displayString: "Journal",
      streak: 1,
    },
    {
      id: 7,
      displayString: "Wake up before 5am",
      streak: 10,
    },
  ];
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 overflow-hidden">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {greetingTime()} 👋
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-black">
            {/* Your content */}
            <div className=" w-full flex items-center justify-between my-14">
              <div className="max-w-[40%]">
                <div className="flex flex-row">
                  <img src={WavingAnimal} className="h-20 mr-10" />
                  <img src={WavingRabbit} className="h-20" />
                </div>
                <h2 className="text-3xl font-semibold">
                  Welcome to CleanSlate!
                </h2>
                <p className="text-gray-500">
                  {"Kill off your existing bad habits and live a better life."}
                </p>
                <figure className="mt-10">
                  <blockquote className="text-center font-semibold">
                    <p className="text-3xl opacity-60">
                      {
                        '"Taking care of your body today is the best investment you can make for a brighter, happier tomorrow. Every healthy choice brings you closer to the vibrant life you deserve."'
                      }
                    </p>
                  </blockquote>
                </figure>
              </div>
              <div className="w-[50%]">
                <h2 className="text-2xl font-semibold">Your Goals</h2>
                <p className="text-gray-500">
                  {"Here's what you're working towards."}
                </p>
                <div className="h-96 overflow-y-scroll border border-gray-800 border-opacity-25 rounded-xl p-6 mt-10">
                  <HabitList habits={habits} />
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* TODO: add chatgpt quote here (positive quote) */}
        {/* <FooterQuote
          displayContent={
            "Taking care of your body today is the best investment you can make for a brighter, happier tomorrow. Every healthy choice brings you closer to the vibrant life you deserve."
          }
        /> */}
      </div>
    </>
  );
};

export default Dashboard;
