let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function add() {
  return numArr.reduce((sum, num) => sum + num, 0);
}

function multiply() {
  return numArr.reduce((product, num) => product * num, 1);
}

function subtract() {
  return numArr.reduce((difference, num) => difference - num);
}

function divide() {
  return numArr.includes(0)
    ? "Error: Division by zero"
    : numArr.reduce((quotient, num) => quotient / num);
}

console.log(add()); // Output: 55
console.log(multiply()); // Output: 3,628,800
console.log(subtract()); // Output: -53
console.log(divide()); // Output: ~0.000275
