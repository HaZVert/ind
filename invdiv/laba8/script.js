let playerScore = 0;
let computerScore = 0;
let playerName = '';

document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('generateButton').addEventListener('click', generateNumber);

function startGame() {
  playerName = prompt("Введіть своє ім'я:");
  if (playerName) {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    }
  else {
      playerName = 'Bot';
      playerScore = 0;
    computerScore = 0;
    updateScore();
    }
}

function generateNumber() {
  const playerNumber = Math.floor(Math.random() * 10) + 1;
  const computerNumber = Math.floor(Math.random() * 10) + 1;

  if (playerNumber > computerNumber) {
    playerScore++;
  } else if (computerNumber > playerNumber) {
    computerScore++;
  }

  updateScore();
}

function updateScore() {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p>${playerName}: ${playerScore}</p>
    <p>Копм'ютер: ${computerScore}</p>
  `;

  if (playerScore === 3) {
    resultElement.innerHTML += `<p>${playerName} Переміг!</p>`;
    resetGame();
  } else if (computerScore === 3) {
    resultElement.innerHTML += `<p>Копм'ютер Переміг!</p>`;
    resetGame();
  }
}

function resetGame() {
  playerName = playerName;
  playerScore = 0;
  computerScore = 0;
}
