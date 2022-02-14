'use strict';

// Let’s try 5 array operations.
// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
// The array in the process:
// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

let arrayOfMusic = ['Jazz', 'Blues'];
console.log(`1: ${arrayOfMusic}`);
arrayOfMusic.push('Rock-n-Roll');
console.log(`2: ${arrayOfMusic}`);
arrayOfMusic[middleOfArray(arrayOfMusic)] = 'Classics';
console.log(`3: ${arrayOfMusic}`);
console.log(arrayOfMusic.shift());
console.log(`4: ${arrayOfMusic}`);
arrayOfMusic.unshift('Rap', 'Reggae');
console.log(`5: ${arrayOfMusic}`);

function middleOfArray(array) {
  let arrayLength = array.length;
  return Math.trunc(arrayLength / 2);
}
