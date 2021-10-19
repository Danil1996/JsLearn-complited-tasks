'use strict';

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)

function filterRange(arr, a, b) {
  let filterArray = [];
  arr.filter((element) => {
    if (element > a && element < b) {
      filterArray.push(element);
      console.log(filterArray);
    }
  });
  return filterArray;
}
console.log(filterRange([2, 4, 5, 7, 11, 15, 44, 78], 10, 50));
