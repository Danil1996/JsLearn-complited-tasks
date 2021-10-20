'use strict';

// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:
// function unique(arr) {
//   /* your code */
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use Set to store unique values.

let values = [
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

function unique(array) {
  let setArray = new Set(array);
  return setArray;
}
console.log(unique(values));
