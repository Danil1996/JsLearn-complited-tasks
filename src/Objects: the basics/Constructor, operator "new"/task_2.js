'use strict';

// Create a constructor function Accumulator(startingValue).
// Object that it creates should:
// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue) {
  this.accumulator = startingValue;
  this.read = function (number) {
    console.log(`accumulator = ${this.accumulator}`);
    console.log(
      `${this.accumulator} + ${number} = ${this.accumulator + number}`
    );
    this.accumulator += number;
  };
}

let accumulator = new Accumulator(1);

accumulator.read(2);
accumulator.read(3);
