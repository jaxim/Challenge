let arr = [5, 3, 8, 1, 9, 2, 7, 4, 6, 10, 3, 8, 1, 5, 7, 6, 2, 4, 9, 10, 3, 5];

function sortArray(arr) {
  let sortedArr = [];
  length = arr.length;
  for (let i = 0; i < length; i++) {
    let min = Math.min(...arr);
    sortedArr.push(min);
    arr.splice(arr.indexOf(min), 1);
  }
  return sortedArr;
}
console.log(sortArray(arr));
