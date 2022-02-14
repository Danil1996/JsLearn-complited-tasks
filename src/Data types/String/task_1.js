'use strict';

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
function usFirst(string) {
  let firstLeter = string[0].toUpperCase();
  let newString = firstLeter + string.slice(1);
  return newString;
}
console.log(usFirst('viktor'));
