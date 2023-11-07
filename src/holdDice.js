export function holdDice() {
  event.preventDefault();
  gameScoreTally.scores[currentTurn].addScore(turnTotal);
  if (turnTotal != 0) {
    hideRolledMessages();
  }
  hideTurnMessages();
  checkWinningConditions();
}