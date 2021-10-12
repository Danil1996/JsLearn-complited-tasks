'use strict';

// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.

function age(age) {
  if (age >= 14 && age <= 90) {
    console.log('Taaddaaa!!!');
  } else {
    console.log('NO');
  }
}
age(14);
age(13);
age(90);
age(91);
