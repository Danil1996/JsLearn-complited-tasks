'use strict';

// Anagrams are words that have the same number of same letters, but in different order.
// For instance:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Write a function aclean(arr) that returns an array cleaned from anagrams.
// For instance:
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
// From every anagram group should remain only one word, no matter which one.

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function makeTheElementsTheSame(array) {
  let cleanArray = array.map((element) =>
    element.toLowerCase().split('').sort().join()
  );
  return cleanArray;
}

function unique(array) {
  let setArray = new Set(array);
  return setArray;
}

function aclean(array) {
  return unique(makeTheElementsTheSame(array));
}

console.log(aclean(arr));
