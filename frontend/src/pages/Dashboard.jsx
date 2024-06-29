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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
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
        <FooterQuote />
      </div>
    </>
  );
};

export default Dashboard;
