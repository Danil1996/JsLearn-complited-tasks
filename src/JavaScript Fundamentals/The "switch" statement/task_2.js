'use strict';

// Rewrite the code below using a single switch statement:
//  let a = +prompt('a?', '');

//  if (a == 0) {
//    alert( 0 );
//  }
//  if (a == 1) {
//    alert( 1 );
//  }

//  if (a == 2 || a == 3) {
//    alert( '2,3' );
//  }

function whatIsTheNumber(number) {
  switch (number) {
    case 0:
      console.log(0);
      break;
    case 1:
      console.log(1);
      break;
    case 2:
    case 3:
      console.log(2, 3);
      break;
  }
}
whatIsTheNumber(0);
whatIsTheNumber(1);
whatIsTheNumber(2);
whatIsTheNumber(3);
