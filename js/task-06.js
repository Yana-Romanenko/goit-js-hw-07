'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  
  if (amount >= 1 && amount <= 100) {
    const boxes = [];

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      const color = getRandomHexColor();

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = color;

      boxes.push(box);
    }
    
    boxesEl.append(...boxes);

    inputEl.value = '';
  } else {
    console.log('Invalid input value. Please enter a number between 1 and 100.');
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}


