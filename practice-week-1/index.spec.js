describe('Practice Week 1 - JS basic', function () {
  it('add function should return the total of x + y', function () {
    let test1 = add(5, 4);
    expect(test1).toEqual(9);

    let test2 = add(999, 1);
    expect(test2).toEqual(1000);
  });

  it('add function should return the total of x - y', function () {
    expect(minus(10, 6)).toEqual(4);
    expect(minus(10, 99)).toEqual(-89);
  });

  it('check exam for student Fail or Pass ', function () {
    expect(checkscore(60)).toEqual('Pass');
    expect(checkscore(50)).toEqual('Pass');
    expect(checkscore(30)).toEqual('Fail');
  });

  it('add function should return the total of x / y', function () {
    expect(divide(10, 5)).toEqual(2);
  });

  it('add function should return the total of (x+y)/2', function () {
    expect(getAverage(5, 10)).toEqual(7.5);
  });

  it('What is your score?', function () {
    expect(getGrade(90)).toEqual('A');
    expect(getGrade(81)).toEqual('B');
    expect(getGrade(70)).toEqual('C');
    expect(getGrade(65)).toEqual('D');
    expect(getGrade(55)).toEqual('E');
    expect(getGrade(49)).toEqual('F');
  });

  it('What are number larger than 10?', function () {
    expect(getNumbersLargerThanTen([5, 12, 8, 15, 3])).toEqual([12, 15]);
  });

  it('Total of Array?', function () {
    expect(sum([1, 3, 5])).toEqual(9);
  });

  it('this is how we calculate (1 + 3 + 5) / 3', function () {
    expect(getArrayAverage([1, 3, 5])).toEqual(3);
  });

  it('uniqueItems should return the array that contains only the unique item', function () {
    expect(uniqueItems([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([
      1,
      3,
      'Lion',
      5,
      false,
    ]);
  });

  it('reverse should return the array in the reversed order', function () {
    expect(reverse([1, 3, 1, 'Lion', 'Lion', 5, false])).toEqual([
      false,
      5,
      'Lion',
      'Lion',
      1,
      3,
      1,
    ]);
  });

  it('reverse the order of letter of a sentence string', function () {
    expect(reverseSetence('Lion is the cage!')).toEqual(`!egac eht si noiL`);
  });
});
