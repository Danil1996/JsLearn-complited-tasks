'use strict';

// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
// Rewrite it, to perform the same, but without if, in a single line.
// Make two variants of checkAge:
// Using a question mark operator ?
// Using OR ||

function checkAge_1(age) {
  return age >= 18 ? true : false;
}
console.log(checkAge_1(18));
console.log(checkAge_1(17));

function checkAge_2(age) {
  return age >= 18 || false;
}
console.log(checkAge_2(18));
console.log(checkAge_2(17));
