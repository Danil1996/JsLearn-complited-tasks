'use strict';

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

function printNumbersWithInterval(from, to) {
  let timeToShowNumbers = setInterval(() => {
    if (from < to) {
      console.log(from);
      from++;
    }
    if (from == to) {
      console.log(from);
      clearInterval(timeToShowNumbers);
    }
  }, 1000);
}

printNumbersWithInterval(5, 10);

function printNumbersWithTimeout(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000);
    }
    from++;
  }, 1000);
}

// printNumbersWithTimeout(5, 10);
