// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// Source => https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = (s) => s.split(" ").map((e) => e.length).sort((a, b) => a - b)[0];

// TEST
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // must return 3
console.log(findShort("turns out random test cases are easier than writing out basic ones")); // must return 3
console.log(findShort("Let's travel abroad shall we")); // must return 2