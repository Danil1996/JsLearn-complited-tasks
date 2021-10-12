'use strict';

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

function ageWithoutNo(age) {
  if (age < 14 || age > 90) {
    console.log('first variant');
  } else {
    console.log('NO_1');
  }
}
ageWithoutNo(14);
ageWithoutNo(13);
ageWithoutNo(91);
ageWithoutNo(90);

function ageWithNo(age) {
  if (!(age >= 14 && age <= 90)) {
    console.log('second variant');
  } else {
    console.log('NO_2');
  }
}
ageWithNo(90);
ageWithNo(91);
ageWithNo(14);
ageWithNo(13);
