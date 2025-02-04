let num1 = 1,
  num2 = 5;

function getRandomNumber(num1, num2) {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

console.log(getRandomNumber(num1, num2));
