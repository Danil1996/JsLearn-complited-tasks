'use strict';

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

function getAverageAge(array) {
  let avarageAge = 0;
  let amount = array.length;
  array.forEach((element) => {
    avarageAge += element.age;
  });
  return avarageAge / amount;
}
console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
