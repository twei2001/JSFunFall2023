// e.g.
const isNumberEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else return false;
};

// e.g.
const isNumberTwoDigits = (num) => {
  if (`${num}`.length === 2) {
    return true;
  } else return false;
};

/**
 * "findFirst" should apply a callback on each number within an
 * array of numbers. It should return a single number.
 * It should return the first number where the callback returns true.
 *
 * Here is what you need to do:
 * - Right a loop that loops through each number in "arrayOfNum".
 * - Apply a callback on each number and store the result in a variable.
 * - If the result is true, return it. Otherwise, continue on the next number.
 *
 * @example
 * const isNumberEven = (num) => {
 *   if (num % 2 === 0) return true;
 *   else return false;
 * };
 * const isNumberTwoDigits = (num) => {
 *   if (`${num}`.length === 2) {
 *     return true;
 *   } else return false;
 * };
 * console.log( findFirst([1, 3, 7, 8, 20], isNumberEven) ) // 8
 * console.log( findFirst([4, 500, 30, 2], isNumberTwoDigits) ) // 30
 *
 * @param {array} arrayOfNum
 * @param {function} callback
 * @returns {number}
 */

const findFirst = (arrayOfNum, callback) => {
  // WRITE YOUR ANSWER IN HERE
};

/**
 * Uncomment me to test your answer in Quokka
 * console.log( findFirst([1, 3, 7, 8, 20], isNumberEven) )
 * console.log( findFirst([4, 500, 30, 2], isNumberTwoDigits) )
 */

// DO NOT DELETE BELOW. It is for the tests.

export { findFirst };
