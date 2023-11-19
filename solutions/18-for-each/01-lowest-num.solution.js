let lowestNumber = Infinity; // This is the highest possible number in JavaScript
const numbers = [1, 10, -2, 3, 4]; // e.g.

/**
 * Using ".forEach", loop through the array "numbers"
 * and set "lowestNumber" equal to the lowest number in the array.
 *
 * Your answer should still work if there are different numbers inside the array "numbers".
 */

// WRITE YOUR ANSWER BELOW THIS LINE

// Solution 1
const findLowestNumber = (num) => {
  if (num < lowestNumber) {
    lowestNumber = num;
  }
};

numbers.forEach(findLowestNumber);

// Solution 2
numbers.forEach((num) => {
  if (num < lowestNumber) lowestNumber = num;
});
