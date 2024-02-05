// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Source => https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = (str) => str.split("").filter((e) => "aiueoAIUEO".includes(e)).length;

// TEST
console.log(getCount("abracadabra")); // must return 5
console.log(getCount("aiueo")); // must return 5
console.log(getCount("ABCDE")); // must return 2
console.log(getCount("Hello World")); // must return 3
