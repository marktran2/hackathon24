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

  const [userCategories, setUserCategories] = useState(
    localStorage.getItem("userCategories")
      ? parseInt(localStorage.getItem("userCategories"))
      : []
  );

  const addHabit = (newHabit) => {
    var habitsList = JSON.parse(localStorage.getItem("habits")) ?? []
    habitsList.push(newHabit)
    localStorage.setItem('habits', JSON.stringify(habitsList))
    setHabits([...habits, newHabit])

    // Add category to user's list if they don't have it yet
    if (!userCategories.include(newHabit.category)) {
      localStorage.setItem('userCategories', JSON.stringify([...userCategories, newHabit.category]))
      setUserCategories([...userCategories, newHabit.category]);
    }
  }

  const updateCompleted = (habitId) => {
    var habitsList = JSON.parse(localStorage.getItem("habits"))
    var habit = habitsList[habitId]
    if (habit.completed == false) {
      habit.completed = true
      habit.streak += 1
    } else {
      habit.completed = false
      habit.streak -= 1
    }

    habitsList[habitId] = habit

    localStorage.setItem('habits', JSON.stringify(habitsList))
    setHabits(habitsList)
  }

  return (
    <AppContext.Provider value={{ currency, setCurrency, habits, setHabits, addHabit, updateCompleted }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
