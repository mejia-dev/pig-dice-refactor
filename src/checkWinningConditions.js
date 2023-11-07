export function checkWinningConditions() {
  let winMessageHolder = document.getElementById("winMessage");
  if (aiMode === 0) {
    if (gameMode === 0) {
      if (gameScoreTally.scores[currentTurn].currentScore >= 100) {
        winMessageHolder.setAttribute("class", "green");
        winMessageHolder.innerText = "Player " + currentTurn + " wins!";
        displayGameButtons(false);
        displayScores();
      } else {
        changePlayerTurn();
      }
    } else if (gameMode === 1) {
      if (gameScoreTally.scores[currentTurn].currentScore >= 200) {
        winMessageHolder.setAttribute("class", "green");
        winMessageHolder.innerText = "Player " + currentTurn + " wins!";
        displayGameButtons(false);
        displayScores();
      } else {
        changePlayerTurn();
      }
    }
  } else {
    if (gameMode === 0) {
      if (gameScoreTally.scores[currentTurn].currentScore >= 100) {
        if (currentTurn === 1) {
          winMessageHolder.setAttribute("class", "green");
          winMessageHolder.innerText = "Player wins!";
          displayGameButtons(false);
          displayScores();
        } else {
          winMessageHolder.setAttribute("class", "red")
          winMessageHolder.innerText = "AI wins!";
          displayGameButtons(false);
          displayScores();
        }
      } else {
        changePlayerTurn();
      }
    } else if (gameMode === 1) {
      if (gameScoreTally.scores[currentTurn].currentScore >= 200) {
        if (currentTurn === 1) {
          winMessageHolder.setAttribute("class", "green");
          winMessageHolder.innerText = "Player wins!";
          displayGameButtons(false);
          displayScores();
        } else {
          winMessageHolder.setAttribute("class", "red")
          winMessageHolder.innerText = "AI wins!";
          displayGameButtons(false);
          displayScores();
        }
      } else {
        changePlayerTurn();
      }
    }
  }
}