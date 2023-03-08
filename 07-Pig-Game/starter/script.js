'use strict';

const scores = [0, 0];

let currentScore = 0;
let activePlayer = 0;

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add('hidden');

const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

function rollDice() {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }
}

btnRoll.addEventListener('click', rollDice);
