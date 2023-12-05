import "../assets/styles/index.scss";
import { PLAYERS, PLAY_MODES, WIN_LINES } from "../utils/constants";

const cells = document.querySelectorAll(".game__cell");
const setupForm = document.querySelector(".game__setup");
const messageElement = document.querySelector(".game__message");
const playAgainButton = document.querySelector("#play_again");

let currentPlayer = null;
let isGameRunning = false;
let playMode = PLAY_MODES.player;
let playfield = null;

const initGame = () => {
  continueGameIfStored();

  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });
  setupForm.addEventListener("submit", handleSetupFormSubmit);
};

const handleSetupFormSubmit = (evt) => {
  evt.preventDefault();
  startNewGame();
};

const setCurrentPlayer = (player) => {
  currentPlayer = player;
  setMessage(`${currentPlayer}, it's your turn!`);
};

const setMessage = (message) => {
  if (message) {
    messageElement.classList.remove("inactive");
  } else {
    messageElement.classList.add("inactive");
  }

  messageElement.textContent = message;
};

const startGame = () => {
  isGameRunning = true;
  setupForm.classList.add("inactive");
};

const startNewGame = () => {
  startGame();
  playfield = Array(9).fill("");
  cells.forEach((cell) => (cell.textContent = ""));
  setCurrentPlayer(PLAYERS.x);
};

const continueGameIfStored = () => {
  const storedGame = JSON.parse(localStorage.getItem("game"));

  if (localStorage && storedGame) {
    startGame();
    playfield = storedGame.playfield;
    for (let i = 0; i < cells.length; i++) {
      cells[i].textContent = playfield[i];
    }
    setCurrentPlayer(storedGame.currentPlayer);
  }
};

const handleCellClick = (evt) => {
  const cell = evt.target;

  if (!isGameRunning || cell.textContent) return;

  cell.textContent = currentPlayer;
  playfield[cell.dataset.cellIndex] = currentPlayer;

  if (checkGameOver()) {
    finishGame();
  } else {
    setCurrentPlayer(currentPlayer === PLAYERS.x ? PLAYERS.o : PLAYERS.x);
    localStorage.setItem("game", JSON.stringify({ playfield, currentPlayer }));
  }
};

const checkLine = (line) => {
  const [a, b, c] = line;

  const cellA = playfield[a];
  const cellB = playfield[b];
  const cellC = playfield[c];

  if ([cellA, cellB, cellC].includes("")) {
    return false;
  } else return cellA === cellB && cellB === cellC;
};

const checkGameOver = () => {
  for (const line of WIN_LINES) {
    if (checkLine(line)) {
      setMessage(`The winner is ${currentPlayer} !`);
      return true;
    }
  }

  if (!playfield.includes("")) {
    setMessage("Draw!");
    return true;
  }
};

const finishGame = () => {
  isGameRunning = false;
  playAgainButton.classList.remove("inactive");
  localStorage.removeItem("game");
};

const handlePlayAgainButtonClick = () => {
  setMessage("");
  setupForm.classList.remove("inactive");
  playAgainButton.classList.add("inactive");
};

window.addEventListener("load", initGame);
playAgainButton.addEventListener("click", handlePlayAgainButtonClick);
