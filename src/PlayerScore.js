// Business Logic for PlayerScore constructor

export function PlayerScore(playerNumber, currentScore) {
  this.playerNumber = playerNumber;
  this.currentScore = currentScore;
}

PlayerScore.prototype.addScore = function (input) {
  this.currentScore += input;
}