'use strict';

// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator() {
  (this.read = function (value1, value2) {
    this.a = value1;
    this.b = value2;
    return this;
  }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}
let firstExample = new Calculator();
console.log(firstExample.read(2, 3));
console.log(firstExample.sum());
console.log(firstExample.mul());
