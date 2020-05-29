const padLeft = require("./padLeft.js").padLeft;
const numbers = require("./padLeft.js").numbers;

const result = numbers.forEach(number => {
  console.log(padLeft(number, 5, '_'));
});
