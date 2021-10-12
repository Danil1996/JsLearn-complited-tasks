'use strict';

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (const key in obj) {
    if (key) {
      console.log("object isn't empty");
      return;
    }
  }
  console.log('object is empty');
}
let user = {};
// user.name = 'Danya';
isEmpty(user);
