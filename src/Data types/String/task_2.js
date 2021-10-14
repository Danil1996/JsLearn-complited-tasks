'use strict';

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be case-insensitive:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(string) {
  if (string.toLowerCase().includes(`viagra`)) {
    return true;
  } else if (string.toLowerCase().includes(`xxx`)) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
