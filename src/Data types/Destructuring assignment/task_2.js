'use strict';

// There is a salaries object:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Create the function topSalary(salaries) that returns the name of the top-paid person.
// If salaries is empty, it should return null.
// If there are multiple top-paid persons, return any of them.
// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

let salaries = {
  John: 9000,
  Pete: 300,
  Mary: 700,
  Danya: 15000,
};

function topSalary(object) {
  let maxSalary = 0;
  let employee = null;
  for (let [key, value] of Object.entries(object)) {
    if (maxSalary < value) {
      maxSalary = value;
      employee = key;
    }
  }
  return employee;
}

console.log(topSalary(salaries));
