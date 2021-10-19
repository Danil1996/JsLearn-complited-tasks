'use strict';

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:
// function unique(arr) {
//   /* your code */
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(array) {
  let uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueArray.includes(array[i]) === false) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];
console.log(unique(strings));
