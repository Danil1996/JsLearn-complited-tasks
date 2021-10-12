'use strict';

// Second task
// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

function resultValue(a, b) {
  let result = a + b < 4 ? 'below' : 'over';
  console.log(result);
}
resultValue(1, 2);
resultValue(2, 4);
resultValue(4, 0);
