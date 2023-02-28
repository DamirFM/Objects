// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */



// BEGIN (write your solution here)
export default function scr(text, word) {
  if (text.length === 0) {
    return false
  }
  const lower = text.toLowerCase();
  // here we are transforming a sentence in to the array of words
  const array = lower.split('')
  // In this step will create the object
  const result = {};

  for (const name of array) {
    // here we will enumerate elements and check 
    // if existing object has the indicated property 
    if (Object.hasOwn(result, name)) {
      result[name] += 1;
    } else {
      result[name] = 1;
    }

  }
  console.log(result)
  for (const char of word.toLowerCase()) {
    const count = _.get(result, char, 0);
    if (count === 0) {
      return false;
    }
    result[char] -= 1;
  }
  return true;

}




// END

// END
