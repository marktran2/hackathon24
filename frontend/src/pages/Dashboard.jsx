import FooterQuote from "../components/FooterQuote";
import Navbar from "../components/Navbar";
import { greetingTime } from "../utils/timeHelpers";

const Dashboard = () => {
  greetingTime();
  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <Navbar />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {greetingTime()} 👋
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
        {/* TODO: add chatgpt quote here (positive quote) */}
        <FooterQuote
          displayContent={
            "Taking care of your body today is the best investment you can make for a brighter, happier tomorrow. Every healthy choice brings you closer to the vibrant life you deserve."
          }
        />
      </div>
    </>
  );
};

export default Dashboard;
