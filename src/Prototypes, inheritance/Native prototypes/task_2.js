'use strict';

// Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
// Please note that the arguments should be passed to the original function.

function f(a, b) {
  console.log(a + b);
}

Function.prototype.defer = function (milliseconds) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), milliseconds);
  };
};

f.defer(1000)(1, 2); // shows 3 after 1 second
