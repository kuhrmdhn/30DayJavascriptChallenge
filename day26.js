// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more
// than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// Source => https://www.codewars.com/kata/5264d2b162488dc400000001

const spinWords = (s) => s.split(" ").map((e) => (e.length >= 5 ? e.split("").reverse().join("") : e)).join(" ");

// TEST
console.log(spinWords("Welcome")); // must return "emocleW"
console.log(spinWords("Hey fellow warriors")); // must return "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // must return "This is a test"
console.log(spinWords("This is another test")); // must return "This is rehtona test"
console.log(spinWords("You are almost to the last test")); // must return "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // must return "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // must return "ylsuoireS this is the last one"
