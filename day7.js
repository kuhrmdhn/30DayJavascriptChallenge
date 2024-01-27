// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals,
// saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 
// 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for 
// a flower of a given number of petals. The number of petals is always greater than 0.

// Source => https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

function howMuchILoveYou(nbPetals) {
  const petals = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  if (nbPetals > petals.length) {
    const adjustedIndex = (nbPetals % petals.length) - 1;
    return adjustedIndex < 0
      ? petals[adjustedIndex + petals.length]
      : petals[adjustedIndex];
  }
  return petals[nbPetals - 1];
}

// TEST
console.log(howMuchILoveYou(7)) // must return "I love you"
console.log(howMuchILoveYou(3)) // must return "a lot"
console.log(howMuchILoveYou(6)) // must return "not at all"
console.log(howMuchILoveYou(420)) // must return "not at all"
console.log(howMuchILoveYou(332)) // must return "a little"
console.log(howMuchILoveYou(121)) // must return "I love you"