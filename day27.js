// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean 
// and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// TEST
console.log(XO("xo")); // must return true
console.log(XO("xxOo")); // must return true
console.log(XO("xxxm")); // must return false
console.log(XO("Oo")); // must return false
console.log(XO("ooom")); // must return false
console.log(XO("zpzpzpp")); // must return true
console.log(XO("zzoo")); // must return false
