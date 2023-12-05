import "../assets/styles/index.scss";
import { PLAYERS, PLAY_MODES, WIN_LINES } from "../utils/constants";

const playfieldElement = document.querySelector(".game__playfield");
const cells = document.querySelectorAll(".game__cell");
const setupForm = document.querySelector(".game__setup");
const messageElement = document.querySelector(".game__message");
const playAgainButton = document.querySelector("#play_again");

let currentPlayer = null;
let isGameRunning = false;
let playMode = null;
let playfield = null;
let firstTurn = Boolean(Math.round(Math.random() * 1));

const initGame = () => {
  continueGameIfStored();

  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });
  setupForm.addEventListener("submit", handleSetupFormSubmit);
};

const handleSetupFormSubmit = (evt) => {
  evt.preventDefault();
  playMode = evt.target.opponent.value;
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
  setCurrentPlayer(PLAYERS.X);
  if (playMode !== PLAY_MODES.PLAYER && !firstTurn) makeTurn(playMode);
};

const continueGameIfStored = () => {
  const storedGame = JSON.parse(localStorage.getItem("game"));

  if (localStorage && storedGame) {
    startGame();

    playMode = storedGame.playMode;
    playfield = storedGame.playfield;
    firstTurn = storedGame.firstTurn;

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
    setCurrentPlayer(currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X);
    localStorage.setItem(
      "game",
      JSON.stringify({ playfield, currentPlayer, playMode, firstTurn })
    );
    if (
      playMode !== PLAY_MODES.PLAYER &&
      ((!firstTurn && currentPlayer === PLAYERS.X) ||
        (firstTurn && currentPlayer === PLAYERS.O))
    ) {
      playfieldElement.classList.add("game__playfield_blocked");
      setTimeout(() => {
        makeTurn(playMode);
        playfieldElement.classList.remove("game__playfield_blocked");
      }, 500);
    }
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
    if (checkLine(line, "full")) {
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
  playfieldElement.classList.add("game__playfield_blocked");
  playAgainButton.classList.remove("inactive");
  localStorage.removeItem("game");
};

const handlePlayAgainButtonClick = () => {
  setMessage("");
  setupForm.classList.remove("inactive");
  playfieldElement.classList.remove("game__playfield_blocked");
  playAgainButton.classList.add("inactive");
};

const clickRandomCell = () => {
  const randomIndex = Math.floor(Math.random() * cells.length);
  if (cells[randomIndex].textContent === "") {
    cells[randomIndex].click();
  } else clickRandomCell();
};

const checkOpponentLine = (line, player) => {
  const [a, b, c] = line;
  const opponent = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X;

  const cellA = playfield[a];
  const cellB = playfield[b];
  const cellC = playfield[c];

  if (cellA === opponent && cellB === opponent && cellC === "") return c;
  if (cellA === opponent && cellC === opponent && cellB === "") return b;
  if (cellB === opponent && cellC === opponent && cellA === "") return a;
};

const breakOpponentLine = () => {
  let targetCell;

  for (const line of WIN_LINES) {
    targetCell = checkOpponentLine(line, currentPlayer);
    if (targetCell) {
      console.log(targetCell);
      break;
    }
  }

  const clickTargetCell = () => {
    cells[targetCell].click();
  };

  return { targetCell, clickTargetCell };
};

const makeTurn = (playMode) => {
  const clickTargetCell = breakOpponentLine().clickTargetCell;

  if (playMode === PLAY_MODES.EASY) clickRandomCell();
  if (playMode === PLAY_MODES.MEDIUM) {
    if (breakOpponentLine().targetCell) {
      clickTargetCell();
    } else clickRandomCell();
  }
};

window.addEventListener("load", initGame);
playAgainButton.addEventListener("click", handlePlayAgainButtonClick);
