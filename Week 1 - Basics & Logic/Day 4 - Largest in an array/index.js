let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let r = numArray.length;
let large = numArray[0];

for (i = 0; i <= r; i++) {
  if (large < numArray[i]) {
    large = numArray[i];
  }
}
console.log(`largest number in the array is ${large}`);
