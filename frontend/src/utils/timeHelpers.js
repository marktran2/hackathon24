export function greetingTime() {
  const time = new Date().getHours();
  console.log(time);
  if (time < 12) {
    return "Good Morning";
  } else if (time < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}
