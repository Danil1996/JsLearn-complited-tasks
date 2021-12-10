'use strict';

// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read(value1, value2) {
    this.a = value1;
    this.b = value2;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
console.log(calculator);
calculator.read(2, 3);
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());
