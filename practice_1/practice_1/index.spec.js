it('1) add function should return the total of x - y', function () {
  let test1 = minus(10, 5);
  expect(test1).toEqual(5);
});

it('2) if a student passed or failed an exam based on their score', function () {
  let test1 = checkExamResult(50);
  expect(test1).toEqual('Pass');
});

it('3) function that will return the result of dividing x / y', function () {
  let test1 = divide(10, 5);
  expect(test1).toEqual(2);
});

it('4) function that will return the average of two numbers (x + y) / 2', function () {
  let test1 = getAverage(5, 10);
  expect(test1).toEqual(7.5);
});

it('5) function that takes a number and return a grade A, B, C, D, F', function () {
  let test1 = getGrade(69);
  expect(test1).toEqual('D');
});

it('6) function that takes an array of numbers and returns a new array containing numbers larger than 10', function () {
  let test1 = getNumbersLargerThanTen([5, 12, 8, 15, 3]);
  expect(test1).toEqual([12, 15]);
});

it('7) function to calculates the sum of all numbers in an array', function () {
  let test1 = sum([1, 3, 5]);
  expect(test1).toEqual(9);
});

it('8) function to calculates the average of all numbers in an array', function () {
  let test1 = getArrayAverage([1, 3, 5]);
  expect(test1).toEqual(3);
});

it('9) function to remove duplicates from an array and return the unique items in the array', function () {
  let test1 = uniqueItems([1, 3, 1, 'Lion', 'Lion', 5, false]);
  expect(test1).toEqual([1, 3, 'Lion', 5, false]);
});

it('10)function to reverse the items of an array', function () {
  let test1 = reverse([1, 3, 1, 'Lion', 'Lion', 5, false]);
  expect(test1).toEqual([false, 5, 'Lion', 'Lion', 1, 3, 1]);
});

it('11) function to reverse the order of letter of a sentence string', function () {
  let test1 = reverseSentence('Lion is the cage!');
  expect(test1).toEqual('!egac eht si noiL');
});

it('12) function that takes on an array items and returns a list of items without any items with the same value next to each other', function () {
  let test1 = uniqueInOrder([1, 2, 2, 3, 3]);
  expect(test1).toEqual([1, 2, 3]);
});

it('13) function that will calculate the sum of all numbers up to a given number, starting from 1', function () {
  let test1 = addFromOneUntil(10);
  expect(test1).toEqual(55);
});

it('14) function that counts the occurrences of a specified character in a given string sentence', function () {
  let test1 = countCharacters('a', 'Today is a beautiful day!');
  expect(test1).toEqual(4);
});

it('15) function that takes an array of numbers and returns the largest number in the array numbers', function () {
  let test1 = getLargestNumber([5, 12, 8, 15, 3]);
  expect(test1).toEqual(15);
});

it('16) function that remove all the occurrences of a specified item in a given array items', function () {
  let test1 = removeNumber(5, [3, 5, 7, 9, 5, 10]);
  expect(test1).toEqual([3, 7, 9, 10]);
});

it('17) function that takes an array of numbers and returns the 2nd largest number in the array numbers', function () {
  let test1 = getSecondLargestNumber([5, 12, 8, 15, 3]);
  expect(test1).toEqual(12);
});
