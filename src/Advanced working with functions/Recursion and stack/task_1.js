'use strict';

/*Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.*/

function sumToUsingLoop(number) {
  let result = number;
  for (let i = number - 1; i != 0; i--) {
    result += i;
  }
  return result;
}

console.log(`Loop result = ${sumToUsingLoop(100)}`);

function sumToUsingRecursion(number) {
  let result = number;
  if (result == 0) {
    return result;
  } else {
    return result + sumToUsingRecursion(number - 1);
  }
}
console.log(`Recursion result = ${sumToUsingRecursion(100)}`);

function sumToArithmeticProgressionFormula(number) {
  return (number * (number + 1)) / 2;
}

console.log(
  `Arithmetic Progression Formula = ${sumToArithmeticProgressionFormula(100)}`
);
