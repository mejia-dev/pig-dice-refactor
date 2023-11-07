import { ScoreTally } from "../src/scoreTally.js";

describe('ScoreTally', () => {

  test('should create instance of scoreTally from constructor', () => {
    const scoreTally = new ScoreTally();
    expect(scoreTally.scores).toEqual({});
  });
})