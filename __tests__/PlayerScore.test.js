import { PlayerScore } from "../src/PlayerScore.js";

describe('PlayerScore', () => {

  test('should create instance of PlayerScore from constructor', () => {
    const playerScore = new PlayerScore(1,2);
    expect(playerScore.playerNumber).toEqual(1);
    expect(playerScore.currentScore).toEqual(2);
  });
  
  test('should add to currentScore property from addScore prototype input', () => {
    const playerScore = new PlayerScore(1,2);
    playerScore.addScore(2);
    expect(playerScore.currentScore).toEqual(4);
  });
})