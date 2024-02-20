// Given two integers a and b, which can be positive or negative, find the sum of all the
// integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// Source => https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  return [...Array(Math.abs(b - a) + 1)]
    .map((_, i) => a + i)
    .reduce((acc, prev) => acc + prev, 0);
}

// TEST
console.log(getSum(1, 0)); // must return 1
console.log(getSum(1, 2)); // must return 3
console.log(getSum(0, 1)); // must return 1
console.log(getSum(1, 1)); // must return 1
console.log(getSum(-1, 0)); // must return -1
console.log(getSum(-1, 2)); // must return 2
