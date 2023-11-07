export function ScoreTally() {
  this.scores = {};
}

ScoreTally.prototype.trackScore = function (playerScore) {
  this.scores[playerScore.playerNumber] = playerScore;
}
