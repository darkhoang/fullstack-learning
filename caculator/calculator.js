let onBodyKeyUp = function (event) {
  let key = event.key;
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
  ];
  if (acceptedKeys.includes(key)) {
    processCalculatorWithAction(key);
  }
};
