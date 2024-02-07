// Write the definition of the function "say" such that calling this:
// say("Hello")("World")
// returns "Hello World"

// Source => https://www.codewars.com/kata/53a20af2e0afd3e2cd000333

const say = (str1) => (str2) => `${str1} ${str2}`;

// TEST
console.log(say("Hello")("World")); // must return "Hello World"
console.log(say("Full")("Stack")); // must return "Full Stack"
console.log(say("Back")("End")); // must return "Back End"
console.log(say("Front")("End")); // must return "Front End"