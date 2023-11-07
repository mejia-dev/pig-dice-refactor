export function playerTurn() {
  event.preventDefault();
  let diceRollTotal = rollDice(currentTurn);
  if (gameMode === 0) {
    displayRolledNumber(diceRollTotal, 0);
    if (diceRollTotal === "nothing") {
      turnTotal = 0;
      holdDice();
      return
    }
    turnTotal += diceRollTotal;
    displayTurnTotal(turnTotal);
  } else if (gameMode === 1) {
    let diceRollTotalB = rollDice(currentTurn);
    displayRolledNumber(diceRollTotal, diceRollTotalB);
    if (diceRollTotal === "nothing" && diceRollTotalB === "nothing") {
      resetScore();
    } else if (diceRollTotal === "nothing" || diceRollTotalB === "nothing") {
      turnTotal = 0;
      holdDice();
      return
    } else {
      turnTotal += diceRollTotal + diceRollTotalB;
      displayTurnTotal(turnTotal);
    }
  }
}