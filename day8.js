// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Source => https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(names) {
  switch(names.length) {
      case 0: return "no one likes this";
      case 1: return `${names[0]} likes this`;
      case 2: return `${names.join(" and ")} like this`;
      case 3: return `${names[0]}, ${names.slice(1,3).join(" and ")} like this`;
      default : return `${names.slice(0,2).join(", ")} and ${names.length - 2} others like this`;
  }
}


// TEST 
console.log(likes([]))  // must return "no one likes this"
console.log(likes(["Peter"])) //must return "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // must return "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])) // must return "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // must return "Alex, Jacob and 2 others like this"