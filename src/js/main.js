import "../assets/styles/index.scss";
import { PLAYERS, PLAY_MODES, WIN_LINES } from "../utils/constants";

const playfieldElement = document.querySelector(".game__playfield");
const cells = document.querySelectorAll(".game__cell");
const setModeForm = document.querySelector(".game__setup");
const messageElement = document.querySelector(".game__message");
const playAgainButton = document.querySelector("#play_again");

let currentPlayer = null; // здесь будет значение текущего игрока - X или O
let isGameRunning = false; // запущена ли игра
let playMode = null; // режим игры (человек / компьютер разной сложности)
let playfield = null; // игровое поле
let firstTurn = false; // ходит ли игрок первый (используется для режима игры с компьютером)

// функция инициализации игры
const initGame = () => {
  continueGameIfStored(); // если в localStorage сохранена незаконченная партия, продолжим ее

  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });
  setModeForm.addEventListener("submit", handleSetModeFormSubmit);
};

// обработчик сабмита формы выбора режима
const handleSetModeFormSubmit = (evt) => {
  evt.preventDefault();
  playMode = evt.target.opponent.value;
  startNewGame();
};

// функция назначения текущего игрока
const setCurrentPlayer = (player) => {
  currentPlayer = player;
  setMessage(`${currentPlayer}, it's your turn!`);
};

// функция назначения сообщения-подсказки под игровым полем
const setMessage = (message) => {
  if (message) {
    messageElement.classList.remove("inactive");
  } else {
    messageElement.classList.add("inactive");
  }

  messageElement.textContent = message;
};

// функция запуска игры
const startGame = () => {
  isGameRunning = true;
  setModeForm.classList.add("inactive");
};

// функция запуска новой игры
const startNewGame = () => {
  firstTurn = !firstTurn; // при рестарте игры в режиме с компьютером будет чередоваться первый ход

  startGame();
  playfield = Array(9).fill("");
  cells.forEach((cell) => (cell.textContent = ""));
  setCurrentPlayer(PLAYERS.X);
  if (playMode !== PLAY_MODES.PLAYER && !firstTurn) makeTurn(playMode);
};

// функция запуска сохраненной игры
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

// обработчик клика по ячейке
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

// функция проверки линии, возможной для выигрыша, на вход принимает саму линию
// и тип проверки (all = проверка на заполненность линии одним игроком, opponents и
// current - проверка на частичную заполненность линии тем или иным игроком)
const checkLine = (line, type = "all") => {
  const [a, b, c] = line;
  const opponent = currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
  const target = type === "opponent" ? opponent : currentPlayer;

  const cellA = playfield[a];
  const cellB = playfield[b];
  const cellC = playfield[c];

  // используется для определения победителя
  if (type === "all") {
    if ([cellA, cellB, cellC].includes("")) {
      return false;
    } else return cellA === cellB && cellB === cellC;
  }

  // используется для алгоритмов AI
  if (type === "opponent" || type === "current") {
    if (cellA === target && cellB === target && cellC === "") return c;
    if (cellA === target && cellC === target && cellB === "") return b;
    if (cellB === target && cellC === target && cellA === "") return a;
  }
};

// функция проверки, закончена ли игра
const checkGameOver = () => {
  // проверка на победителя
  for (const line of WIN_LINES) {
    if (checkLine(line, "all")) {
      setMessage(`The winner is ${currentPlayer} !`);
      return true;
    }
  }
  // проверка на ничью
  if (!playfield.includes("")) {
    setMessage("Draw!");
    return true;
  }
};

// функция завершения игры
const finishGame = () => {
  isGameRunning = false;
  playfieldElement.classList.add("game__playfield_blocked");
  playAgainButton.classList.remove("inactive");
  localStorage.removeItem("game");
};

// обработчик клика по кнопке Play Again
const handlePlayAgainButtonClick = () => {
  setMessage("");
  setModeForm.classList.remove("inactive");
  playfieldElement.classList.remove("game__playfield_blocked");
  playAgainButton.classList.add("inactive");
};

// далее идут функции, отвечающие за режим игры с компьютером

// функция, вызывающая клик по случайной ячейке
const clickRandomCell = () => {
  const randomIndex = Math.floor(Math.random() * cells.length);
  if (cells[randomIndex].textContent === "") {
    cells[randomIndex].click();
  } else clickRandomCell();
};

// функция, вызывающая клик по наиболее выгодной ячейке для выигрыша, если имеется
const fillBeneficialCell = (type) => {
  let targetCell;

  for (const line of WIN_LINES) {
    targetCell = checkLine(line, type);
    if (targetCell) {
      break;
    }
  }

  const clickTargetCell = () => {
    cells[targetCell].click();
  };

  return { targetCell, clickTargetCell };
};

// функция, отвечающая за ход компьютера, принимает режим сложности
const makeTurn = (playMode) => {
  const clickOpponentCell = fillBeneficialCell("opponent").clickTargetCell;
  const clickBeneficialCell = fillBeneficialCell("current").clickTargetCell;

  if (playMode === PLAY_MODES.EASY) clickRandomCell(); // при легком - случайная ячейка
  if (playMode === PLAY_MODES.MEDIUM) {
    if (fillBeneficialCell("opponent").targetCell) {
      clickOpponentCell(); // при среднем - пытается помешать противнику,
    } else clickRandomCell(); // а потом случайная ячейка
  }
  if (playMode === PLAY_MODES.HARD) {
    if (cells[4].textContent === "") {
      cells[4].click(); // при сложном - если центральная ячейка свободна, выбирает ее
    } else if (fillBeneficialCell("current").targetCell) {
      clickBeneficialCell(); // если не хватает одной ячейки до выигрыша - выбирает ее
    } else if (fillBeneficialCell("opponent").targetCell) {
      clickOpponentCell(); // пытается помешать противнику
    } else clickRandomCell();
  }
};

// инициализация приложения
window.addEventListener("load", initGame);
playAgainButton.addEventListener("click", handlePlayAgainButtonClick);
