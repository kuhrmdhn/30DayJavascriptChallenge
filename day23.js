// Every book has n pages with page numbers 1 to n. The summary is made by adding up the number of
// digits of all page numbers.
// Task: Given the summary, find the number of pages n the book has.
// Example
// If the input is summary=25, then the output must be n=17: The numbers 1 to 17 have 25 digits in 
// total: 1234567891011121314151617.

// Source => https://www.codewars.com/kata/622de76d28bf330057cd6af8

function amountOfPages(summary) {
  let digits = "";
  let pages = 1;
  while (digits.length < summary) {
    digits += pages;
    pages++;
  }
  return pages - 1;
}

// TEST
console.log(amountOfPages(5)); // must return 5
console.log(amountOfPages(25)); // must return 17
console.log(amountOfPages(1095)); // must return 401
console.log(amountOfPages(185)); // must return 97
console.log(amountOfPages(660)); // must return 256
