let iString = "MalayaLam";

console.log("Orginal string: ", iString);

let i = iString.length;
let palString = "";

for (i; i >= 0; i--) {
  var rString = iString.charAt(i);
  palString += rString;
}

console.log("Reversed string: ", palString);
