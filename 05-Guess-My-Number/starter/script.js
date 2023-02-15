'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const messageDom = document.querySelector('.message');
console.log(secretNumber);

const checkFunction = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messageDom.textContent = '🚫 No Number!';
  } else if (score > 1) {
    if (guess === secretNumber) {
      messageDom.textContent = 'Great you Won';
      document.body.style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      highScore = Math.max(highScore, score);
      document.querySelector('.highscore').textContent = highScore;
    } else if (guess > secretNumber) {
      messageDom.textContent = 'Too high';
      score--;
    } else {
      messageDom.textContent = 'Too low';
      score--;
    }
    document.querySelector('.score').textContent = score;
  } else {
    messageDom.textContent = 'Game OVER ';
    document.querySelector('.score').textContent = '0';
    document.body.style.backgroundColor = 'red';
    document.querySelector('.number').textContent = secretNumber;
  }
};

const againFunction = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageDom.textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.again').addEventListener('click', againFunction);

document.querySelector('.check').addEventListener('click', checkFunction);
