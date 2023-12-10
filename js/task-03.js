'use strict'

// Напиши скрипт,
//     який під час набору тексту в 
//     інпуті input#name - input(подія input) 
//     підставляє його поточне значення в span#name - output 
//     як ім’я для привітання.
//     Обов’язково очищай значення в інпуті по краях від
// пробілів.Якщо інпут порожній або містить лише пробіли,
//     то замість імені 
// у спан має підставлятися рядок "Anonymous".

const inputTyping = document.querySelector('#name-input');
const outputTyping = document.querySelector('#name-output');

inputTyping.addEventListener('input', (event) => {
    const userName = event.target.value.trim();

    if (userName === "") {
        outputTyping.textContent = "Anonymous";
    } else {
        outputTyping.textContent = userName;
    }

});





  