// In this kata you will create a function that takes a list of non-negative integers and
// strings and returns a new list with the strings filtered out.

// Source => https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

const filter_list = (l) => l.filter((a) => typeof a === "number");

// TEST
console.log(filter_list([1, 2, "a", "b"])); // must return [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // must return [1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); // must return [1,2,123]