// The Mormons are trying to find new followers and in order to do that they embark on missions.
// Each time they go on a mission, each Mormon converts a fixed number of people (reach) into followers.
// This continues and every freshly converted Mormon as well as every original Mormon go on another
// mission and convert the same fixed number of people each. The process continues until they reach a
// predefined target number of followers (target).
// Converted Mormons are unique so that there's no duplication amongst them.

// Source => https://www.codewars.com/kata/58373ba351e3b615de0001c3

function mormons(startingNumber, reach, target) {
  let mission = 0;
  let followers = startingNumber;
  while (followers < target) {
    mission += 1;
    followers += reach * followers;
  }
  return mission;
}

// TEST
console.log(mormons(10, 3, 9)); // must return 0
console.log(mormons(40, 2, 120)); // must return 1
console.log(mormons(40, 2, 121)); // must return 2
console.log(mormons(20000, 2, 7000000000)); // must return 12
