let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistory = document.querySelector('.input-history');
let inputHistoryList = document.querySelector('.input-history-list');
let inputHistoryButton = document.querySelector('.input-history-button');
let onInputHistoryButtonClick = function () {
  if (inputHistory.classList.contains('open')) {
    inputHistory.classList.add('open');
    inputHistory.classList.remove('open');
  } else {
    inputHistory.classList.add('open');
  }
};

inputHistoryButton.addEventListener('click', onInputHistoryButtonClick);
let historyItemClick = function (event) {
  let target = event.target;

  // 4. Get the current text of target // 9/6=1.5
  let currentText = target.innerText;
  // 5. Split the current text into 2 parts: 9/6 and 1.5 using = as the separatory
  let parts = currentText.split('='); // array ['9/6', '1.5']
  // 6. Set the value of the first part 9/6 into inputEquation
  inputEquation.innerHTML = parts[0];

  // 7. Set the value of the 2nd part 1.5 into input.value
  input.value = parts[1];
};
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

    // 1. Create a string like 20*3=60
    let historyItemContent = inputValue + '=' + result;
    // 2. Create a div to hold that string

    let div = document.createElement('div');

    div.innerHTML = historyItemContent;
    div.addEventListener('click', historyItemClick);
    // 3. Append the div above into the inputHistory
    inputHistoryList.append(div);
  }
  // 1 create a function for history item click

  // 2. add click event to each item using the function above
  // 3. when the function is called,...

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
let setOperatorButtonsDisabled = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButton = operatorButtons[i];
    operatorButton.disabled = disabled;
  }
};
let isLastCharacterAnOperator = function (inputValue) {
  let operators = ['+', '-', '*', '/', '.'];
  let lastCharacter = inputValue[inputValue.length - 1];

  return operators.includes(lastCharacter);
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
  let inputHasOperatorAtTheEnd = isLastCharacterAnOperator(input.value);
  // let isValidInput = isLastCharacterAnOperator(input.value);
  // if (isValidInput) {
  //   //make button enabled
  //   for (let i = 0; i < operatorButtons.length; i++){
  //     let operatorButton = operatorButtons[i];
  //     operatorButton.disabled = true;
  //   }
  // } else {
  //   for (let i = 0; i < operatorButtons.length; i++) {
  //     let operatorButton = operatorButtons[i];
  //     operatorButton.disabled = false;
  //   }
  // }
  if (inputHasOperatorAtTheEnd) {
    setOperatorButtonsDisabled(true);
  } else {
    setOperatorButtonsDisabled(false);
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
