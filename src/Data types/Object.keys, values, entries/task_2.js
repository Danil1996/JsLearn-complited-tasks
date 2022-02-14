'use strict';

// Write a function count(obj) that returns the number of properties in the object:
// let user = {
//   name: 'John',
//   age: 30
// };
// alert( count(user) ); // 2
// Try to make the code as short as possible.
// P.S. Ignore symbolic properties, count only “regular” ones.

let user = {
  name: 'John',
  age: 30,
};
function count(obj) {
  return Object.values(obj).length;
}
console.log(count(user));
