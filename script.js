let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  if (attemptsLeft <= 0) {
    message.textContent = `Game Over! The number was ${secretNumber}.`;
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").textContent = attemptsLeft;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}. You win!`;
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }

  if (attemptsLeft === 0 && guess !== secretNumber) {
    message.textContent = `💥 Game Over! The correct number was ${secretNumber}.`;
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
}
