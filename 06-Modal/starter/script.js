'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const showModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelectorAll('.show-modal').forEach(val => {
  val.addEventListener('click', showModal);
});
document.querySelector('.close-modal').addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.body.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    if (!model.classList.contains('hidden')) {
      hideModal();
    }
  }
});
