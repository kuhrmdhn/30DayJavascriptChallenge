// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// Source => https://www.codewars.com/kata/57f7b8271e3d9283300000b4

function evenOrOdd(str) {
  let result;
  const splitStr = str.split("");
  const even = Number(
    splitStr
      .filter((data) => data % 2 == 0)
      .reduce((acc, prev) => Number(acc) + Number(prev), 0)
  );
  const odd = Number(
    splitStr
      .filter((data) => data % 2 != 0)
      .reduce((acc, prev) => Number(acc) + Number(prev), 0)
  );

  switch (true) {
    case even > odd:
      result = "Even is greater than Odd";
      break;
    case even < odd:
      result = "Odd is greater than Even";
      break;
    default:
      result = "Even and Odd are the same";
      break;
  }
  return result;
}

//TEST
console.log(evenOrOdd("12"));
console.log(evenOrOdd("123"));
console.log(evenOrOdd("112"));