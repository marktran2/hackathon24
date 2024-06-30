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
      ? JSON.parse(localStorage.getItem("userCategories"))
      : {}
  );

  const [achieved, setAchieved] = useState(
    localStorage.getItem("achieved")
      ? JSON.parse(localStorage.getItem("achieved"))
      : []
  );

  const addHabit = (newHabit) => {
    var habitsList = JSON.parse(localStorage.getItem("habits")) ?? []
    habitsList.push(newHabit)
    localStorage.setItem('habits', JSON.stringify(habitsList))
    setHabits([...habits, newHabit]);

    // Add category to user's list if they don't have it yet
    if (!Object.keys(userCategories).includes(newHabit.category)) {
      localStorage.setItem('userCategories', JSON.stringify({
        ...userCategories,
        [newHabit.category]: 0
      }))
      setUserCategories({
        ...userCategories,
        [newHabit.category]: 0
      })
    }
  }

  const updateCompleted = (habitId, status) => {
    var habitsList = JSON.parse(localStorage.getItem("habits"))
    var habit = habitsList[habitId]
    if (status == 'success' && habit.completed != 'success') {
      habit.streak += 1
    } else if (status == 'failed' && habit.completed != 'failed') {
      habit.streak -= 1
      var userCategory = JSON.parse(localStorage.getItem("userCategories"))
      userCategory[habit.category] += 1
      localStorage.setItem('userCategories', JSON.stringify(userCategory))
      setUserCategories({...userCategory})
    }

    habit.completed = status

    habitsList[habitId] = habit

    localStorage.setItem('habits', JSON.stringify(habitsList))
    setHabits(habitsList)
  }

  const calculateCurrency = () => {
    let sum = 0;
    for (const [category, count] of Object.entries(userCategories)) {
      sum += count;
    }

    return sum;
  }

  const [ notiClick, setNotiClick ] = useState(false);

  return (
    <AppContext.Provider value={{ currency, setCurrency, habits, setHabits, addHabit, updateCompleted, userCategories, calculateCurrency, notiClick, setNotiClick, achieved, setAchieved}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
