'use strict';

// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListUsingLoop(list) {
  let count = list;

  while (count) {
    console.log(count.value);
    count = count.next;
  }
}

printListUsingLoop(list);

function printListUsingRecursion(list) {
  let count = list;
  console.log(count.value);
  if (count.next) {
    printListUsingRecursion(list.next);
  }
}

printListUsingRecursion(list);
