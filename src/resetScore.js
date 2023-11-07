export function resetScore() {
  gameScoreTally.scores[currentTurn].currentScore = 0;
  changePlayerTurn();
}
