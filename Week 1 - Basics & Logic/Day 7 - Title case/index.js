let string = "this is a string";
let titleCase = string
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCase);
