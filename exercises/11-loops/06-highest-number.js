let numbers = [10000, -8, 10, 0.7]; // e.g.

/**
 * Create a variable called "highest".
 * Loop through the array using a for loop (or for ... of loop) and return the highest number.
 * Set "highest" to the highest number.
 */

// WRITE YOUR ANSWER BELOW THIS LINE
let highest = numbers[0];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
    if (numbers[i] > highest){
        highest = numbers[i]
    }
} 
console.log(highest)