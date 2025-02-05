let decNum = 10;
let binNum = "1010";

function decToBin(decNum) {
  let binNum = "";
  while (decNum > 0) {
    binNum = (decNum % 2) + binNum;
    decNum = Math.floor(decNum / 2);
  }
  return binNum;
}

function binToDec(binNum) {
  let decNum = 0;
  let i = 0;
  while (binNum > 0) {
    decNum += (binNum % 10) * Math.pow(2, i);
    binNum = Math.floor(binNum / 10);
    i++;
  }
  return decNum;
}

console.log(decToBin(decNum));
console.log(binToDec(binNum));
