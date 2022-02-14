'use strict';
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
// For instance:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = /* ... your code */
// alert( names ); // John, Pete, Mary

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };
let users = [john, pete, mary];

function getNamesOfUsers(array) {
  let names = '';
  array.forEach((users) => {
    for (const key in users) {
      if (typeof users[key] === 'string') {
        names += ` ${users[key]}`;
      }
    }
  });
  return names;
}

let names = getNamesOfUsers(users); // John, Pete, Mary

console.log(names);
