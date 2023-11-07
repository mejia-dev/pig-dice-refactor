import { ScoreTally } from "../src/scoreTally.js";
import { PlayerScore } from "../src/PlayerScore.js";

describe('ScoreTally', () => {

  test('should create instance of scoreTally from constructor', () => {
    const scoreTally = new ScoreTally();
    expect(scoreTally.scores).toEqual({});
  });
  
  test('should add playerScore to scores of the specified playerNumber', () => {
    const scoreTally = new ScoreTally();
    const playerScore = new PlayerScore(1,5);
    scoreTally.trackScore(playerScore);
    expect(scoreTally.scores[playerScore.playerNumber].currentScore).toEqual(5);

  });
})