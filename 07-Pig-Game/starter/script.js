'use strict';

// My project before learning the material in udemy
// selecting elements
const players = document.querySelectorAll('.player');
const currentScore0Element = document.querySelector('#current--0');
const currentScore1Element = document.querySelector('#current--1');
const totalScore0Element = document.querySelector('#score--0');
const totalScore1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNew = document.querySelector('.btn--new');
let isGameOver = false;

// starting conditions
currentScore0Element.textContent = 0;
currentScore1Element.textContent = 0;
totalScore0Element.textContent = 0;
totalScore1Element.textContent = 0;
diceElement.classList.add('hidden');

// all necessary functions here
const generateDiceRoll = () => Math.trunc(Math.random() * 6) + 1;
const getActivePlayer = function () {
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) return players[i];
  }
};
const getAllPlayer = function () {
  const currentPlayerElement = getActivePlayer();
  const inactivePlayerElement = isPlayer0(currentPlayerElement)
    ? players[1]
    : players[0];

  return [currentPlayerElement, inactivePlayerElement];
};
const getActiveStatus = function () {
  const currentPlayerElement = getActivePlayer();
  if (isPlayer0(currentPlayerElement)) {
    return [currentPlayerElement, 0];
  } else if (isPlayer1(currentPlayerElement)) {
    return [currentPlayerElement, 1];
  }
};
const setActivePlayer = player => player.classList.add('player--active');
const removeActivePlayer = player => player.classList.remove('player--active');

const isPlayer0 = player => player.classList.contains('player--0');
const isPlayer1 = player => player.classList.contains('player--1');
const getCurrentScore = function (playerId) {
  if (playerId === 0) {
    return Number(currentScore0Element.innerText);
  } else if (playerId === 1) {
    return Number(currentScore1Element.innerText);
  }
};
const getTotalScore = function (playerId) {
  if (playerId === 0) {
    return Number(totalScore0Element.innerText);
  } else if (playerId === 1) {
    return Number(totalScore1Element.innerText);
  }
};
const getAllScore = function (playerId) {
  if (playerId === 0) {
    return [
      Number(currentScore0Element.innerText),
      Number(totalScore0Element.innerText),
    ];
  } else if (playerId === 1) {
    return [
      Number(currentScore1Element.innerText),
      Number(totalScore1Element.innerText),
    ];
  }
};
const addCurrentScore = function (diceNumber) {
  const currentPlayerElement = getActivePlayer();
  if (isPlayer0(currentPlayerElement)) {
    currentScore0Element.textContent =
      Number(currentScore0Element.textContent) + diceNumber;
  } else if (isPlayer1(currentPlayerElement)) {
    currentScore1Element.textContent =
      Number(currentScore1Element.textContent) + diceNumber;
  }
};
const addTotalScore = function (totalScore) {
  const currentPlayerElement = getActivePlayer();
  if (isPlayer0(currentPlayerElement)) {
    totalScore0Element.textContent =
      Number(totalScore0Element.textContent) + totalScore;
  } else if (isPlayer1(currentPlayerElement)) {
    totalScore1Element.textContent =
      Number(totalScore1Element.textContent) + totalScore;
  }
};
const resetCurrentScore = function () {
  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;
};
const resetTotalScore = function () {
  totalScore0Element.textContent = 0;
  totalScore1Element.textContent = 0;
};
const resetAllScore = function () {
  resetCurrentScore();
  resetTotalScore();
};
const switchPlayer = function () {
  const [currentPlayerElement, inactivePlayerElement] = getAllPlayer();
  removeActivePlayer(currentPlayerElement);
  setActivePlayer(inactivePlayerElement);
  resetCurrentScore();
};

// Roll dice button:
// generate dice roll and display it,
// if it is a 1 then switch player
// if not then add dice roll to the current score of active player
buttonRoll.addEventListener('click', function () {
  if (isGameOver) return;
  const diceNumber = Number(generateDiceRoll());
  const dicePic = `dice-${diceNumber}.png`;

  diceElement.classList.remove('hidden');
  diceElement.src = dicePic;

  if (diceNumber === 1) {
    switchPlayer();
  } else {
    addCurrentScore(diceNumber);
  }
});

// Hold button:
// Add current score to total score
buttonHold.addEventListener('click', function () {
  if (isGameOver) return;
  const [playerElement, playerId] = getActiveStatus();
  const currentScore = getCurrentScore(playerId);

  addTotalScore(currentScore);
  const totalScore = getTotalScore(playerId);
  if (totalScore >= 100) {
    console.log(`Player ${playerId + 1} wins!!!`);
    isGameOver = true;
  } else {
    switchPlayer();
  }
});

// New game button:
// Set all scores to 0
// and set player 1 as starting player
buttonNew.addEventListener('click', function () {
  resetAllScore();
  removeActivePlayer(players[1]);
  setActivePlayer(players[0]);

  isGameOver = false;
});

/*
NOTE:
1. you should store a variable about current score and total score for each player in your codebase.
and don't just rely on the DOM value.

2. should implement how to select the player dynamically
- change / switch the index of the player number (primitive type) is a lot 
easier than directly switch the player object
3. use element.classList.toggle()
4. don't forget to apply the background when then player wins
5. Specify the condition to win the game
by removing the player---active class from the current player
(It's easier and more intuitive)

Alternative:
1. getElementbyId instead of query selector
2. in if-else clause, you might want to put the main case first
(in this case, the case that the dice rolled is not 1 might be put first.)
*/
