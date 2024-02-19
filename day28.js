// There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.
// You've discovered the formula for the scoring system!
// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).
// Each player's score is calculated as follows:
// Each normal kill is worth 100 points
// Each assist is worth 50 points
// Each point of damage done is worth 0.5 points
// Each point of healing done is worth 1 point
// The longest kill streak is worth 2^N, where N is the number of kills of the streak
// Environmental kills are worth 500 points (These are counted separately from normal kills)
// For each of the above statistic, a Player object contains a respective "key:value" pairing. All values except the 'name' are integers.

// Source => https://www.codewars.com/kata/5865dd726b56998ec4000185

function scoring(arr) {
  const sumScore = (player) => {
    return {
      name: player.name,
      score:
        player.normKill * 100 +
        player.assist * 50 +
        player.damage * 0.5 +
        player.healing +
        2 ** player.streak +
        player.envKill * 500,
    };
  };
  return [...Array(arr.length)]
    .map((_, i) => sumScore(arr[i]))
    .sort((a, b) => b.score - a.score)
    .map((e) => e.name);
}

var player1 = {
  name: "JuanPablo",
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1,
};
var player2 = {
  name: "ProfX",
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0,
};

// TEST
console.log(scoring([player1, player2])); // must return ["juanPablo", "ProfX"]