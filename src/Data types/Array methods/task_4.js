'use strict';

let arr = [5, 2, 1, -10, 8];

function arraySort(array) {
  return array.sort((a, b) => b - a);
}
console.log(arraySort(arr)); // 8, 5, 2, 1, -10
