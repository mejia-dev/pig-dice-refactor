export function aiTurn() {
  if (aiMode === 1) {
    if (gameMode === 0) {
      let diceRollTotal = rollDice(currentTurn);
      displayRolledNumber(diceRollTotal, 0);
      if (diceRollTotal === "nothing") {
        turnTotal = 0;
        holdDice();
      } else {
        turnTotal += diceRollTotal;
        diceRollTotal = rollDice(currentTurn);
        displayRolledNumber(diceRollTotal, 0);
        if (diceRollTotal === "nothing") {
          turnTotal = 0;
          holdDice();
        } else {
          turnTotal += diceRollTotal;
          holdDice();
        }
      }
    } else if (gameMode === 1) {
      let diceRollTotal = rollDice(currentTurn);
      let diceRollTotalB = rollDice(currentTurn);
      displayRolledNumber(diceRollTotal, diceRollTotalB);
      if (diceRollTotal === "nothing" && diceRollTotalB === "nothing") {
        resetScore();
      } else if (diceRollTotal === "nothing" || diceRollTotalB === "nothing") {
        turnTotal = 0;
        holdDice();
        return;
      } else {
        turnTotal += diceRollTotal + diceRollTotalB;
        diceRollTotal = rollDice(currentTurn);
        diceRollTotalB = rollDice(currentTurn);
        displayRolledNumber(diceRollTotal, diceRollTotalB);
        if (diceRollTotal === "nothing" && diceRollTotalB === "nothing") {
          resetScore();
        } else if (diceRollTotal === "nothing" || diceRollTotalB === "nothing") {
          turnTotal = 0;
          holdDice();
          return;
        } else {
          turnTotal += diceRollTotal + diceRollTotalB;
          holdDice();
        }
      }
    }
  }
  else {
    if (gameMode === 0) {
      let diceRollTotal = rollDice(currentTurn);
      displayRolledNumber(diceRollTotal, 0);
      for (diceRollTotal = 0; diceRollTotal < 16; diceRollTotal) {
        let currentRollTotal = rollDice(currentTurn);
        displayRolledNumber(currentRollTotal, 0);
        if (currentRollTotal === "nothing") {
          turnTotal = 0;
          holdDice();
          return;
        } else {
          diceRollTotal += currentRollTotal;
          turnTotal = diceRollTotal;
        }
      }
      holdDice();
    } else if (gameMode === 1) {
      for (combinedDiceTotal = 0; combinedDiceTotal < 23; combinedDiceTotal) {
        let currentRollTotalA = rollDice(currentTurn);
        let currentRollTotalB = rollDice(currentTurn);
        displayRolledNumber(currentRollTotalA, currentRollTotalB);
        if (currentRollTotalA === "nothing" && currentRollTotalB === "nothing") {
          resetScore();
          return;
        } else if (currentRollTotalA === "nothing" || currentRollTotalB === "nothing") {
          turnTotal = 0;
          holdDice();
          return;
        } else {
          combinedDiceTotal += currentRollTotalA + currentRollTotalB;
          turnTotal = combinedDiceTotal;
        }
      }
      holdDice();
    }
  }
}