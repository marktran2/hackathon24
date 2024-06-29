import HabitBlock from "./HabitBlock";

function HabitList({ habits }) {
  return (
    <>
      {habits.map((habit) => (
        <HabitBlock
          key={habit.id}
          habitId={habit.id}
          displayString={habit.displayString}
          category={habit.category}
          streak={habit.streak}
        />
      ))}
    </>
  );
}

export default HabitList;
