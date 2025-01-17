// import FooterQuote from "../components/FooterQuote";
import HabitList from "../components/HabitList";
import Navbar from "../components/Navbar";
import { dayHasPassedQuote, greetingTime } from "../utils/timeHelpers";
import WavingAnimal from "../assets/Subject2.png";
import WavingRabbit from "../assets/Subject3.png";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import HabitSettingButton from "../components/HabitSettingButton";
import { getAIQuote } from "../services/openAIService";

// localStorage.setItem("habits", JSON.stringify([
//   {
//     id: 1,
//     displayString: "Exercise",
//     streak: 5,
//   },
//   {
//     id: 2,
//     displayString: "Meditate",
//     streak: 3,
//   },
//   {
//     id: 3,
//     displayString: "Read",
//     streak: 2,
//   },
//   {
//     id: 4,
//     displayString: "Drink Water",
//     streak: 1,
//   },
//   {
//     id: 5,
//     displayString: "Sleep",
//     streak: 0,
//   },
//   {
//     id: 6,
//     displayString: "Journal",
//     streak: 1,
//   },
//   {
//     id: 7,
//     displayString: "Wake up before 5am",
//     streak: 10,
//   },
// ]));

const Dashboard = () => {
  const [quote, setQuote] = useState(localStorage.getItem("quote") ?? "");
  const { habits } = useContext(AppContext);

  const updateQuote = (quote) => {
    localStorage.setItem("quote", quote);
    localStorage.setItem("quoteLastGenerated", new Date().toUTCString());
    setQuote(quote);
  };

  localStorage.setItem(
    "quoteLastGenerated",
    new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3).toUTCString()
  );
  useEffect(() => {
    if (!dayHasPassedQuote()) {
      return;
    }
    const getQuote = async () => {
      const quote = await getAIQuote();
      updateQuote(quote.content);
    };
    getQuote();
  }, []);
  // localStorage.setItem(
  //   "quoteLastGenerated",
  //   new Date(new Date() - 1000 * 60 * 60 * 24).toUTCString()
  // );

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
                    <p className="text-3xl opacity-60">{quote}</p>
                  </blockquote>
                </figure>
              </div>
              <div className="w-[50%]">
                <h2 className="text-2xl font-semibold">Your Tracked Habits</h2>
                <p className="text-gray-500">
                  {"Here's what you're working towards."}
                </p>
                <div className="h-96 overflow-y-scroll border border-gray-800 border-opacity-25 rounded-xl p-6 mt-10">
                  <HabitList habits={habits} />
                </div>
                <div className="mt-auto flex justify-end py-2">
                  <HabitSettingButton />
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
