// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// Source => https://www.codewars.com/kata/54ba84be607a92aa900000f1

const isIsogram = (str) => [...new Set(str.toLowerCase())].length === str.length;

 // TEST
console.log(isIsogram("Dermatoglyphics")); // must return true
console.log(isIsogram("isogram")); // must return true
console.log(isIsogram("aba")); // must return false
console.log(isIsogram("moOse")); // must return false
console.log(isIsogram("isIsogram")); // must return false
console.log(isIsogram("")); // must return true