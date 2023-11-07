export function changePlayerTurn() {
  event.preventDefault();
  checkGameMode()
  showGame()
  hideGameOptionsDiv()
  displayScores()
  turnTotal = 0;
  if (currentTurn === 1) {
    currentTurn = 2;
    if (aiMode != 0) {
      displayGameButtons(false);
      aiTurn();
    }
    displayCurrentPlayerTurn();
    return;
  } else {
    currentTurn = 1;
    displayGameButtons(true);
    displayCurrentPlayerTurn();
    return;
  }
}