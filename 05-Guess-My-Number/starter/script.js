'use strict';

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const isValidGuess = guess =>
  Number.isInteger(guess) && guess >= 1 && guess <= 20;

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

document.querySelector('.check').addEventListener('click', function () {
  if (score === 0) return;
  const guessField = document.querySelector('.guess').value;
  const guess = Number(guessField);

  // If there's no guess
  if (guessField === '') {
    document.querySelector('.message').textContent = 'No number🖋';
  } else if (!isValidGuess(guess)) {
    // if the guess is not within range (1 - 20)
    document.querySelector('.message').textContent = 'Invalid number🔧';
  } else if (guess === secretNumber) {
    // If user guess it correct
    document.querySelector('.message').textContent = 'You won!🎉';
    document.querySelector('.number').textContent = secretNumber;

    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else {
    // if user guess it wrong and the score is not 0
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lose!🎃';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too high📈';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too low📉';
    }
  }
});
