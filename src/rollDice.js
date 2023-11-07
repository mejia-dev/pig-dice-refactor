export function rollDice() {
  event.preventDefault();
  let diceRoll = Math.floor(Math.random() * 6) + 1;
  if (diceRoll === 1) {
    return "nothing"
  } else if (diceRoll > 1) {
    return diceRoll;
  }
}