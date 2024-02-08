// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls'
// comments, neutralizing the threat. Your task is to write a function that takes a string and return
// a new string with all vowels removed. For example, the string "This website is for losers LOL!"
// would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// Source => https://www.codewars.com/kata/52fba66badcd10859f00097e

const disemvowel = (str) => str.replace(/[aiueo]/gi, "");

// TEST
console.log(disemvowel("This website is for losers LOL!")); // must return "Ths wbst s fr lsrs LL!"
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")); // must return "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
console.log(disemvowel("What are you, a communist?")); // must return "Wht r y,  cmmnst?"
