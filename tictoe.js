let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const gameBoardDivs = document.querySelectorAll('.cell');
const resultMessage = document.getElementById('result');

function checkWinner() {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      return gameBoard[a];
    }
  }
  if (!gameBoard.includes('')) {
    gameActive = false;
    return 'Draw';
  }
  return null;
}

function handleResult(result) {
  if (result === 'Draw') {
    resultMessage.textContent = 'It\'s a draw!';
  } else {
    resultMessage.textContent = `${result} wins!`;
  }
}

function playerMove(cellIndex) {
  if (gameActive && gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    gameBoardDivs[cellIndex].textContent = currentPlayer;
    const winner = checkWinner();
    if (winner) {
      gameActive = false;
      handleResult(winner);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function resetGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  resultMessage.textContent = '';
  gameBoardDivs.forEach(cell => {
    cell.textContent = '';
  });
}

