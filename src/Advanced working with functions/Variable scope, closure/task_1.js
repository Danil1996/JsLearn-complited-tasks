'use strict';

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(value_1) {
  return function (value_2) {
    return value_1 + value_2;
  };
}

console.log(sum(2)(3));
