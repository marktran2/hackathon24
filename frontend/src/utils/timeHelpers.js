export function greetingTime() {
  const time = new Date().getHours();
  if (time < 12) {
    return "Good Morning";
  } else if (time < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

export function dayHasPassedQuote() {
  const lastGeneratedQuote = localStorage.getItem("quoteLastGenerated");
  if (!lastGeneratedQuote) {
    return true;
  }
  const lastGeneratedQuoteDate = new Date(lastGeneratedQuote);
  const currentDate = new Date();
  return (
    currentDate.getTime() - lastGeneratedQuoteDate.getTime() >=
    1000 * 60 * 60 * 24
  );
}
