// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Source => https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  const arrOfStr = str.split(" ").filter((e) => e !== "");
  if (arrOfStr.join("") === "" || arrOfStr.join("").length >= 140) {
    return false;
  }
  const titleCase = arrOfStr.map(
    (e) => e[0].toUpperCase() + e.slice(1).toLowerCase()
  );
  return `#${titleCase.join("")}`;
}

// TEST
console.log(generateHashtag("")) // must return false
console.log(generateHashtag(" ".repeat(200))) // must return false
console.log(generateHashtag("Do We have A Hashtag")); // must return "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")); // must return "#Codewars"
console.log(generateHashtag("Codewars Is Nice")); // must return "#CodewarsIsNice"
console.log(generateHashtag("Codewars is nice")); // must return "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // must return "#CodeWars"
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138)) // Should Work
console.log(generateHashtag("a".repeat(140))); // must return false