'use strict';

// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”
// The schema:

function checkLogin(login) {
  if (login === 'Admin') {
    console.log('Login is correct');
    return true;
  } else {
    console.log("I don't know you");
    return false;
  }
}

function chekPassword(password) {
  if (password === 123) {
    console.log('Password is correct');
    return true;
  } else {
    console.log('Password is not correct');
    return false;
  }
}

function getAccess(login, password) {
  if (checkLogin(login) === true) {
    if (chekPassword(password) === true) {
      console.log('Congratulasions you have access');
    } else {
      console.log('Access denied');
    }
  } else {
    console.log('Access denied');
  }
}

getAccess('Admin', 123);
getAccess('Pete', 124);
