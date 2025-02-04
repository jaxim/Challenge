let iString = "Hello, I am a string. I am a very good string";
let count = 0;

for (let i = 0; i < iString.length; i++) {
  if (iString[i] === "a") {
    count++;
  }
}
console.log(`count of a is ${count}`);
