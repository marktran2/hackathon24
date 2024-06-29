import { createContext, useState } from "react";

const defaultAppContext = {
  currency: 0,
  habits: [],
};

export const AppContext = createContext(defaultAppContext);

const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency")
      ? parseInt(localStorage.getItem("currency"))
      : 0
  );
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) ?? []
  );

  return (
    <AppContext.Provider value={{ currency, setCurrency, habits, setHabits }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
