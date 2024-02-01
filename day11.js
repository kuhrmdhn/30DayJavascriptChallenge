// Your job is to create a simple password validation function, as seen on many websites.
// The rules for a valid password are as follows:
// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

// Source => https://www.codewars.com/kata/56a921fa8c5167d8e7000053

const password = (str) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/.test(str) ? true : false;

// TEST
console.log(password("Abcd1234"));  // must return true
console.log(password("Abcd123")); // must return false
console.log(password("abcd1234")); // must return false
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); // must return true
console.log(password("ABCD1234")); // must return false
console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,")); // must return true
console.log(password("!@#$%^&*()-_+={}[]|:;?/>.<,")); // must return false