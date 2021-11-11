'use strict';

// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;

console.log(rabbit.jumps); // null

delete animal.jumps;

console.log(rabbit.jumps); // undefined
