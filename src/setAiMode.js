export function setAiMode() {
  event.preventDefault();
  mode = event.target.id
  if (mode === "playWithHardAi") {
    aiMode = 2;
  } else {
    aiMode = 1;
  }
  changePlayerTurn();
}