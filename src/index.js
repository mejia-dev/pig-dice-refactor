import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { aiTurn } from './aiTurn.js';
import { changePlayerTurn } from './changePlayerTurn.js';
import { checkGameMode } from './checkGameMode.js';
import { checkWinningConditions } from './checkWinningConditions.js';
import { holdDice } from './holdDice.js';
import { PlayerScore } from './PlayerScore.js';
import { playerTurn } from './playerTurn.js';
import { resetScore } from './resetScore.js';
import { rollDice } from './rollDice';
import { ScoreTally } from './scoreTally.js';
import { setAiMode } from './setAiMode.js';



// Define Global Variables

let gameScoreTally = new ScoreTally;
let p1Score = new PlayerScore(1, 0);
let p2Score = new PlayerScore(2, 0);
gameScoreTally.trackScore(p1Score);
gameScoreTally.trackScore(p2Score);
let currentTurn = 2;
let turnTotal = 0;
let aiMode = 0;
let gameMode = 0;

// UI Logic

function displayScores() {
  let p1ScoreDisplay = document.getElementById("displayScoreP1");
  let p2ScoreDisplay = document.getElementById("displayScoreP2");
  let p1Score = gameScoreTally.scores[1].currentScore;
  let p2Score = gameScoreTally.scores[2].currentScore;
  p1ScoreDisplay.innerText = p1Score;
  p2ScoreDisplay.innerText = p2Score;
}

function displayRolledNumber(rolledNumberA, rolledNumberB) {
  let rolledNumberDisplay = document.getElementById("rolledNumberDisplay");
  rolledNumberDisplay.removeAttribute("class");
  if (gameMode === 0) {
    rolledNumberDisplay.innerText = "You rolled a " + rolledNumberA + ".";
    if (rolledNumberA === "nothing" && aiMode === 0) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "Player " + currentTurn + " rolled a 1, meaning they score nothing and it's the next player's turn.";
    } else if (rolledNumberA === "nothing" && aiMode != 0 && currentTurn === 1) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "You rolled a 1, meaning you score nothing and it's the AI player's turn.";
    } else if (rolledNumberA === "nothing" && aiMode != 0 && currentTurn === 2) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "AI rolled a 1, meaning it scored nothing and it's your turn.";
    }
  } else if (gameMode === 1) {
    rolledNumberDisplay.innerText = "You rolled a " + rolledNumberA + " with the first die and a " + rolledNumberB + " with the second.";

    // Player-only two dice messages
    if ((rolledNumberA === "nothing" && rolledNumberB === "nothing") && aiMode === 0) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "Player " + currentTurn + " rolled a 1 with both dice, meaning their score was reset to 0 and it's the next player's turn.";
    } else if ((rolledNumberA === "nothing" || rolledNumberB === "nothing") && aiMode === 0) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "Player " + currentTurn + " rolled a 1 with one of their dice, meaning they score nothing and it's the next player's turn.";
    }

    // AI two dice messages
    //// Player 1 (human) messages
    else if ((rolledNumberA === "nothing" && rolledNumberB === "nothing") && aiMode != 0 && currentTurn === 1) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "You rolled a 1 with both dice, meaning your score was reset to 0 and it's the AI player's turn.";
    } else if ((rolledNumberA === "nothing" || rolledNumberB === "nothing") && aiMode != 0 && currentTurn === 1) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "You rolled a 1 with one of your dice, meaning you score nothing and it's the AI player's turn.";
    }

    //// Player 2 (AI) messages
    else if ((rolledNumberA === "nothing" && rolledNumberB === "nothing") && aiMode != 0 && currentTurn === 2) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "AI rolled a 1 with both dice, meaning their score was reset to 0 and it's your turn.";
    } else if ((rolledNumberA === "nothing" || rolledNumberB === "nothing") && aiMode != 0 && currentTurn === 2) {
      rolledNumberDisplay.setAttribute("class", "red");
      rolledNumberDisplay.innerText = "AI rolled a 1 with one of their dice, meaning they score nothing and it's your turn.";
    }
  }
}

function hideRolledMessages() {
  let rolledNumberDisplay = document.getElementById("rolledNumberDisplay");
  rolledNumberDisplay.innerText = "";
}

function displayTurnTotal(turnTotal) {
  let turnTotalDisplay1 = document.getElementById("turnTotalDisplay1");
  let turnTotalDisplay2 = document.getElementById("turnTotalDisplay2");
  turnTotalDisplay1.innerHTML = "Your current total for this turn is " + turnTotal + ". Would you like to Roll Dice again, or Hold your current score?";
  turnTotalDisplay2.innerHTML = "Adding this total to your current score would bring you to " + (parseInt(turnTotal) + parseInt(gameScoreTally.scores[currentTurn].currentScore)) + ".";
}

function hideTurnMessages() {
  let turnTotalDisplay1 = document.getElementById("turnTotalDisplay1");
  let turnTotalDisplay2 = document.getElementById("turnTotalDisplay2");
  turnTotalDisplay1.innerHTML = "";
  turnTotalDisplay2.innerHTML = "";
}

function displayCurrentPlayerTurn() {
  let currentTurnDisplay = document.getElementById("currentPlayerTurn");
  let turn = currentTurn;
  currentTurnDisplay.innerText = "Player " + currentTurn + "'s Turn!";
}

function hideGameOptionsDiv() {
  let gameOptionsDiv = document.getElementById("divGameOptions");
  gameOptionsDiv.setAttribute("class", "hidden");
  let subTitle = document.getElementById("subTitle");
  subTitle.setAttribute("class", "hidden");
}

function showGame() {
  let gameDiv = document.getElementById("divGame");
  let scoresDiv = document.getElementById("divScores");
  gameDiv.removeAttribute("class");
  scoresDiv.removeAttribute("class");
}

function displayGameButtons(input) {
  let gameButtons = document.getElementById("gameButtons");
  if (input === true) {
    gameButtons.removeAttribute("class");
  } else if (input === false) {
    gameButtons.setAttribute("class", "hidden");
  }
}

function onMouseMove() {
  event.preventDefault();
  const pigWalker = document.getElementById("pigWalker");
  const moveSpeed = 20;
  let currentXPos = parseFloat(pigWalker.style.left) || 0;
  let pointerXPos = event.clientX;
  const distanceToX = pointerXPos - currentXPos;
  let newXPos = currentXPos + (distanceToX / moveSpeed);
  pigWalker.style.left = newXPos + 'px';
  if (pointerXPos < currentXPos) {
    pigWalker.setAttribute("class", "flipImage");
  } else if (pointerXPos > currentXPos) {
    pigWalker.removeAttribute("class");
  } else {
    return;
  }
}

window.addEventListener("load", function () {
  this.document.getElementById("playGame").addEventListener("click", changePlayerTurn);
  this.document.getElementById("playWithAi").addEventListener("click", setAiMode);
  this.document.getElementById("playWithHardAi").addEventListener("click", setAiMode);
  this.document.getElementById("hold").addEventListener("click", holdDice);
  this.document.getElementById("rollDice").addEventListener("click", playerTurn);
  this.document.addEventListener('mousemove', onMouseMove);
});