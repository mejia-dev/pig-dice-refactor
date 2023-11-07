export function checkGameMode() {
  const gameModeSelected = document.querySelector("input[name='gameMode']:checked").value;
  if (gameModeSelected === "normal") {
    gameMode = 0;
  } else if (gameModeSelected === "two-dice") {
    gameMode = 1;
  }
}