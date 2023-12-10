'use strict'



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює колір фону елемента
//   < body > через інлайн - стиль по кліку на button.change - color 
//   і задає це значення 
// кольору текстовим вмістом для span.color.

const color = document.querySelector('.color');
const changingColor = document.querySelector('.change-color');

const clickButton = () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
};

changingColor.addEventListener('click', clickButton);


