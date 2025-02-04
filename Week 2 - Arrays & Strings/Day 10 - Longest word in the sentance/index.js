let sentance = "The quick brown fox jumped over the lazy dog";
let words = sentance.split(" ");
let longestWord = words[0];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i];
  }
}

console.log(longestWord); // jumped
