// A function that counts the number of words in a sentence, 
// and returns an object. In the object, the properties are the words 
// (reduced to lowercase), and the values are the number of times the word occurs in the sentence. 
// Words in a sentence can be in different registers. 
// Before counting, they must be reduced to lowercase so that duplicates are not skipped.

import _ from 'lodash';

// BEGIN (write your solution here)
export default function countWords (text) {
  // before counting we have to make your sentence 
  // lowercase otherwise we will receive duplicates
  const lower = text.toLowerCase(); 
  // here we are transforming a sentence in to the array of words
  const array = _.words(lower); 
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
  return result;
}
// END