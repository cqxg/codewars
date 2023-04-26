const peopleWithAgeDrink = (old) => {
  if (old >= 21) return "drink whisky";
  if (old >= 18) return "drink beer";
  if (old >= 14) return "drink coke";
  return "drink toddy";
};
