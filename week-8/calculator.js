let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;
  }

  input.value = result;
};
let clearInput = function () {
  input.value = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;

  processCalculatorWithAction(action);
};

let processCalculatorWithAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;
    let newValue = inputValue + action;

    input.value = newValue;
  }
};
for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}

let onBodyKeyUp = function (event) {
  let key = event.key;
  let action = key;
  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Escape') {
    action = 'AC';
  } else if (key === 'Backspace') {
    action = 'DEL';
  }

  let acceptedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '+',
    '-',
    '/',
    '*',
    '(',
    ')',
    '=',
    'AC',
    'DEL',
  ];

  if (acceptedKeys.includes(action)) {
    processCalculatorWithAction(action);
  }
};
document.body.addEventListener('keyup', onBodyKeyUp);
