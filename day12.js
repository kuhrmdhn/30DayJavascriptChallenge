// Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom"
// if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss"
// if it isn't divisible by any of them. Note: Your program should only return one value
// Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"

// Source => https://www.codewars.com/kata/55a8a36703fe4c45ed00005b

const multiple = (x) =>
  x % 5 === 0 && x % 3 === 0
    ? "BangBoom"
    : x % 3 === 0
    ? "Bang"
    : x % 5 === 0
    ? "Boom"
    : "Miss";

// TEST
console.log(multiple(30)); // must return "BangBoom"
console.log(multiple(3)); // must return "Bang"
console.log(multiple(98)); // must return "Miss"
console.log(multiple(65)); // must return "Boom"
console.log(multiple(23)); // must return "Miss"
console.log(multiple(15)); // must return "BangBoom"