'use strict';

// Modify the code of makeCounter() so that the counter can also decrease and set the number:

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.
// See the sandbox code for the complete usage example.

// P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

function makeCounter() {
  function counter() {
    return counter.count++;
  }
  counter.set = function (value) {
    return (counter.count = value);
  };
  counter.decrease = function () {
    return counter.count--;
  };
  counter.count = 0;
  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)
