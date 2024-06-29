import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
import AchievementsPage from "./pages/AchievementsPage";
import AppProvider from "./contexts/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingPage />}>
          <Dashboard />
        </Suspense>
      ),
    },
    {
      path: "/achievements",
      element: (
        <Suspense fallback={<LoadingPage />}>
          <AchievementsPage />
        </Suspense>
      ),
    },
  ]);
  return (
    <AppProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppProvider>
  );
}

export default App;
