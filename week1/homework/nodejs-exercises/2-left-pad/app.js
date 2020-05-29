const leftPad = require('left-pad')
const numbers = ["12", "846", "2", "1236", "12345678"];

leftPad('foo', 5)
// => "  foo"

leftPad('foobar', 6)
// => "foobar"

leftPad(1, 2, '0')
// => "01"

leftPad(17, 5, 0)
// => "00017"

numbers.forEach(number => {
  console.log(leftPad(number, 8, " "));
})
