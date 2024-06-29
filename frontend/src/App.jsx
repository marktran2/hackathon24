import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";
import AchievementsPage from "./pages/AchievementsPage";

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
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
