function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // In case k is larger than array length
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

const rotatedArray = rotateArray(array, k);
console.log(rotatedArray); // Output: [5, 6, 7, 1, 2, 3, 4]
