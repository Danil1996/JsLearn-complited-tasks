'use strict';

// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

// After you do it, such code should work:

function f() {
  console.log('Hello!');
}

Function.prototype.defer = function (millisecond) {
  setTimeout(this, millisecond);
};
f.defer(2030); // shows "Hello!" after 1 second
