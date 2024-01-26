// Your task is to make a function that can take any non-negative integer as an argument and return
// it with its digits in descending order. Essentially, rearrange the digits to create the highest
// possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// Source => https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) =>
  Number(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

// TEST
console.log(descendingOrder(0)); // must return 0
console.log(descendingOrder(1)); // must return 1
console.log(descendingOrder(111)); // must return 111
console.log(descendingOrder(15)); // must return 51
console.log(descendingOrder(1021)); // must return 2110
console.log(descendingOrder(123456789)); // must return 987654321