//Create a function that takes an integer as an argument and returns "Even"
//for even numbers or "Odd" for odd numbers.
// Source => https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

const evenOrOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");

//TEST
console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));