'use strict';

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

let arr = ['HTML', 'JavaScript', 'CSS'];

function copySorted(array) {
  let sortedArray = array.slice().sort();
  return sortedArray;
}

console.log(copySorted(arr));
console.log(arr);
