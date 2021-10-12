'use strict';

// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.
// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.
// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.
// Write the code which outputs prime numbers in the interval from 2 to n.
// For n = 10 the result will be 2,3,5,7.
// P.S. The code should work for any n, not be hard-tuned for any fixed value.

function oddNumbersInInterval(a, b) {
  newIteration: for (let i = a; i <= b; i++) {
    for (let j = a; j < i; j++) {
      if (i % j == 0) {
        continue newIteration;
      }
    }
    console.log(i);
  }
}
oddNumbersInInterval(2, 44);
