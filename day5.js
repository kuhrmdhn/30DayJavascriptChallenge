// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza,
// they are going to divide the costs:
// If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-)
// and Michael pays the rest.
// How much is Michael going to pay? Calculate the amount with two decimals, if necessary.

//Source => https://www.codewars.com/kata/5b043e3886d0752685000009

function michaelPays(costs) {
  let pays;
  const oneThirdCosts = costs / 3;
  switch (true) {
    case costs < 5:
      pays = costs;
      break;
    case oneThirdCosts < 10:
      pays = costs - oneThirdCosts;
      break;
    case oneThirdCosts >= 10:
      pays = costs - 10;
      break;
    default:
      pays = costs;
      break;
  }
  return Math.round(pays * 100) / 100;
}

// TEST
console.log(michaelPays(15)); //must return 10
console.log(michaelPays(4)); //must return 4
console.log(michaelPays(30)); //must return 20
console.log(michaelPays(80)); //must return 70
console.log(michaelPays(22)); //must return 14.67
console.log(michaelPays(5.9181)); //must return 3.95
console.log(michaelPays(28.789)); //must return 19.19
console.log(michaelPays(4.325)); //must return 4/33