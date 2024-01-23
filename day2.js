// Write a program that finds the summation of every number from 1 to num. The number will always be 
// a positive integer greater than 0. Your function only needs to return the result, what is shown 
// between parentheses in the example below is how you reach that result and it's not part of it, 
// see the sample tests.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//Source => https://www.codewars.com/kata/55d24f55d7dd296eb9000030/

const summation = (num) => {
    let result = 0
    for(let i = 1; i <= num; i++) {
        result += i
    }
    return result
}

//TEST
console.log(summation(1))
console.log(summation(2))
console.log(summation(8))