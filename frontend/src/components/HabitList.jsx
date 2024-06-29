import HabitBlock from "./HabitBlock";

function HabitList({ habits }) {
  return (
    <>
      {habits.map((habit) => (
        <HabitBlock
          key={habit.id}
          habitId={habit.id}
          displayString={habit.displayString}
          streak={habit.streak}
        />
      ))}
    </>
  );
}

export default HabitList;
