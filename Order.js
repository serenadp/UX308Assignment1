let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput() {
  currentState = welcoming;
}

function welcoming() {
  let aReturn = [];
  currentState = choosingItem;

  aReturn.push("Welcome to Señor Salsa!");
  aReturn.push("Would you like tacos or burritos?");
  return aReturn;
}

function choosingItem(sInput) {
  let aReturn = [];
  sInput = sInput.toLowerCase();

  currentState = choosingSize;

  if (sInput.includes("taco")) {
    aReturn.push("Please choose size taco (small or large)");
  } else {
    aReturn.push("Please choose size burrito (small or large)");
  }

  return aReturn;
}

function choosingSize(sInput) {
  let aReturn = [];
  currentState = choosingFilling;

  aReturn.push("What filling would you like? (chicken, beef, veggie, steak)");
  return aReturn;
}

function choosingFilling(sInput) {
  let aReturn = [];
  currentState = upsellDrink;

  aReturn.push("Would you like a drink? (coke or sprite)");
  return aReturn;
}

function upsellDrink(sInput) {
  let aReturn = [];
  currentState = welcoming;

  aReturn.push("Drink added.");
  aReturn.push("Order confirmed. Please pick up your food in 20 minutes.");

  return aReturn;
}