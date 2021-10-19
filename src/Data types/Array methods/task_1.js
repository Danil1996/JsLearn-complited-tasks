'use strict';

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';

function camelize(string) {
  let splitString = string.split('-');
  let mapArray = splitString.map((item) => usFirst(item));
  return mapArray.join('');
}

console.log(camelize('background-color')) == 'backgroundColor';
console.log(camelize('list-style-image')) == 'listStyleImage';

function usFirst(string) {
  let firstLeter = string[0].toUpperCase();
  let newString = firstLeter + string.slice(1);
  return newString;
}
