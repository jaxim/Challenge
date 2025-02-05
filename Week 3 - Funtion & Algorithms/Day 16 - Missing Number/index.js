let arr = [1, 2, 4, 5, 7, 8, 10];

function missingNumber(arr) {
  let missing = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
}

console.log(missingNumber(arr));
